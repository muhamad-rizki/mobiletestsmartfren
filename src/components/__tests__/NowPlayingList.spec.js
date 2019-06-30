/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import {
  NowPlayingList,
} from '../index';

describe('NowPlayingList Component', () => {
  it('renders as expected', () => {
    const setNPLoading = jest.fn();
    const wrapper = shallow(
      <NowPlayingList
        nowPlaying={{
          results: [],
        }}
        imgUrl="https://image.tmdb.org/t/p/"
        nowPlayingIndex={0}
        setNPLoading={setNPLoading}
        loadingNowPlaying={false}
        activeTabIndex={1}
        // eslint-disable-next-line jsx-a11y/tabindex-no-positive
        tabIndex={1}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
