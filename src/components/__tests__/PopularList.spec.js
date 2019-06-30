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
});
