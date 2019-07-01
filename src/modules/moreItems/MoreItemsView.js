// @flow
import React from 'react';
import {
  View,
  Text,
} from 'react-native-ui-lib';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { compose, lifecycle, withState } from 'recompose';
import StarRatingBar from 'react-native-star-rating-view/StarRatingBar';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import FastImage from 'react-native-fast-image';
import { Header, Icon } from '../../components';
import { colors } from '../../styles';
import { isEmpty, makeThousand } from '../../env';

type Props = {};

const AppIcon = require('../../../assets/images/icon.png');

const renderItem = (data) => {
  const {
    item,
    loaded,
    imgUrl,
    setLoaded,
    onPress,
    genres,
  } = data;
  return (
    <View paddingH-8 style={{ flexDirection: 'row' }}>
      <View>
        <ShimmerPlaceHolder autoRun width={100} height={150} visible={loaded}>
          <FastImage
            source={{ uri: `${imgUrl}/${item.profile_path ? 'w185' : 'w154'}/${item.profile_path || item.poster_path}` }}
            onLoadEnd={() => setLoaded(true)}
            resizeMode={FastImage.resizeMode.cover}
            style={{
              width: 100,
              height: 150,
            }}
          />
        </ShimmerPlaceHolder>
      </View>
      <View flex marginL-8>
        <Text h3>{item.name || item.original_name || item.original_title}</Text>
        {
          item.profile_path
            ? null
            : (
              <Text lightGray>
                {isEmpty(item.genre_ids.map(genre => genres.find(g => g.id === genre).name).join(', '), 'No Category')}
              </Text>
            )
        }
        <View style={{ flexDirection: 'row' }}>
          <StarRatingBar
            maximumValue={item.profile_path ? 1 : 5}
            score={item.profile_path ? 1 : item.vote_average / 2.0}
            dontShowScore
            allowsHalfStars
            accurateHalfStars
            spacing={2}
            starStyle={{
              width: 15,
              height: 15,
            }}
          />
          <Text>
            {
              item.profile_path
                ? ` • ${item.popularity}`
                : ` • ${item.vote_average.toFixed(1)} from ${makeThousand(item.vote_count)} votes`
            }
          </Text>
        </View>
        <TouchableWithoutFeedback
          onPress={() => onPress && onPress(item)}
          disabled={!loaded}
        >
          <Text>
            {
              item.profile_path
                ? `Known For: ${item.known_for.map(movie => movie.original_name || movie.original_title).join(', ')} `
                : `${isEmpty(item.overview, 'This movie doesn\'t have any description').substring(0, 80)} ... `
            }
            <Text primary>
              {item.profile_path ? 'Learn More' : 'Read More '}
              <Icon name="chevron-double-right" type="MaterialCommunityIcons" />
            </Text>
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const Recomposed = compose(
  withState('loaded', 'setLoaded', false),
  lifecycle({
  })
)(renderItem);

const emptyComponent = () => (
  <View flex center>
    <Icon size={80} name="movie-roll" type="MaterialCommunityIcons" />
    <Text center h2 margin-32>
      {'Sorry currently we don\'t have any data to show here'}
    </Text>
  </View>
);

export default (props: Props) => {
  const {
    list,
    data,
    navigation,
    page,
    getItems,
    loading,
    imgUrl,
    onPress,
    genres,
  } = props;
  const type = navigation.getParam('type', 'movie');
  const kind = navigation.getParam('kind', 'popular');
  const dataList = [].concat(data[type][kind].results, list);
  return (
    <View flex>
      <View flex>
        <Header
          icon={AppIcon}
          leftComponent={(
            <Icon
              name="x"
              type="Feather"
              size={28}
              color={colors.secondary}
              onPress={() => navigation.goBack()}
              containerStyle={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          )}
          rightComponent={(
            <Icon
              name="search"
              type="Feather"
              size={28}
              color={colors.secondary}
              onPress={() => { }}
              containerStyle={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          )}
        />
        <FlatList
          contentContainerStyle={[
            { paddingVertical: 8 },
            dataList.length <= 0 ? { flex: 1 } : {}
          ]}
          ItemSeparatorComponent={() => <View style={{ height: 0.5, backgroundColor: '#ededed' }} marginV-8 />}
          keyExtractor={item => item.id.toString()}
          data={dataList}
          renderItem={dataItem => (
            <Recomposed
              {...dataItem}
              imgUrl={imgUrl}
              onPress={onPress}
              genres={genres}
            />
          )}
          ListEmptyComponent={emptyComponent}
          onEndReached={() => !loading
            && page <= data[type][kind].total_pages
            && getItems(page + 1)}
          onEndReachedThreshold={0.3}
        />
      </View>
    </View>
  );
};
