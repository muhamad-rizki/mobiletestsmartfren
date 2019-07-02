// @flow
import React from 'react';
import {
  View,
  Text,
} from 'react-native-ui-lib';
import { Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import StarRatingBar from 'react-native-star-rating-view/StarRatingBar';
import { Header, Icon } from '../../components';
import { colors } from '../../styles';
import { WINDOW, isEmpty, makeThousand } from '../../env';

type Props = {};

const AppIcon = require('../../../assets/images/icon.png');

const item = {
  vote_count: 1950,
  id: 420817,
  video: false,
  vote_average: 7.2,
  title: 'Aladdin',
  popularity: 128.906,
  poster_path: '/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg',
  original_language: 'en',
  original_title: 'Aladdin',
  genre_ids: [12, 14, 10749, 35, 10751],
  backdrop_path: '/v4yVTbbl8dE1UP2dWu5CLyaXOku.jpg',
  adult: false,
  overview: 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \'fight clubs\' forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
  release_date: '2019-05-22',
};

export default (props: Props) => {
  const {
    navigation,
    imgUrl,
    genres,
  } = props;
  const dataItem = navigation.getParam('item', item);
  // console.log('lk55', props);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
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
          rightComponent={(<View />)}
        />
        <View>
          <Image
            style={{
              backgroundColor: colors.red,
              height: 150,
              width: WINDOW.width,
              resizeMode: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            blurRadius={4}
            source={{ uri: `${imgUrl}/w300/${dataItem.backdrop_path}` }}
          />
          <View row marginT-80 marginH-16 style={{ alignItems: 'flex-end' }}>
            <Image
              style={{
                width: 100,
                height: 150,
                resizeMode: 'contain',
              }}
              source={{ uri: `${imgUrl}/w185/${dataItem.poster_path || dataItem.profile_path}` }}
            />
            <View marginT-18 marginH-16 flex>
              <Text h3>{dataItem.name || dataItem.original_name || dataItem.original_title}</Text>
              {
                dataItem.profile_path
                  ? null
                  : (
                    <Text lightGray>
                      {isEmpty(dataItem.genre_ids.map(genre => genres.find(g => g.id === genre).name).join(', '), 'No Category')}
                    </Text>
                  )
              }
              <View style={{ flexDirection: 'row' }}>
                <StarRatingBar
                  maximumValue={dataItem.profile_path ? 1 : 5}
                  score={dataItem.profile_path ? 1 : dataItem.vote_average / 2.0}
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
                    dataItem.profile_path
                      ? ` • ${dataItem.popularity}`
                      : ` • ${dataItem.vote_average.toFixed(1)} from ${makeThousand(dataItem.vote_count)} votes`
                  }
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View padding-16>
          <Text>
            {dataItem.overview}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
