/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import {
  TopRatedList,
} from '../index';

describe('TopRatedList Component', () => {
  it('renders as expected', () => {
    const setTRLoading = jest.fn();
    const wrapper = shallow(
      <TopRatedList
        topRated={{
          results: [],
        }}
        imgUrl="https://image.tmdb.org/t/p/"
        topRatedIndex={0}
        setTRLoading={setTRLoading}
        loadingTopRated={false}
        activeTabIndex={1}
        // eslint-disable-next-line jsx-a11y/tabindex-no-positive
        tabIndex={1}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
