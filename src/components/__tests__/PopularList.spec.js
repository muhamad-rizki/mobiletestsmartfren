/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import {
  PopularList,
} from '../index';

describe('PopularList Component', () => {
  it('renders as expected', () => {
    const setPopLoading = jest.fn();
    const wrapper = shallow(
      <PopularList
        popular={{
          results: [],
        }}
        imgUrl="https://image.tmdb.org/t/p/"
        popularIndex={0}
        setPopLoading={setPopLoading}
        loadingPopular={false}
        activeTabIndex={1}
        // eslint-disable-next-line jsx-a11y/tabindex-no-positive
        tabIndex={1}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders as expected with at least one item', () => {
    const setPopLoading = jest.fn();
    const wrapper = shallow(
      <PopularList
        popular={{
          results: [
            {
              vote_count: 1950,
              id: 420817,
              video: false,
              vote_average: 7.2,
              title: 'Aladdin',
              popularity: 128.906,
              poster_path: '/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg',
              original_language: 'en',
              original_title: 'Aladdin',
              genre_ids: [12],
              backdrop_path: '/v4yVTbbl8dE1UP2dWu5CLyaXOku.jpg',
              adult: false,
              overview: 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \'fight clubs\' forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
              release_date: '2019-05-22',
            }
          ],
        }}
        imgUrl="https://image.tmdb.org/t/p/"
        popularIndex={0}
        setPopLoading={setPopLoading}
        loadingPopular={false}
        activeTabIndex={1}
        // eslint-disable-next-line jsx-a11y/tabindex-no-positive
        tabIndex={1}
        genres={[
          {
            id: 12,
            name: 'Drama'
          }
        ]}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
