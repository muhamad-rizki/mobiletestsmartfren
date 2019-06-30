/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import {
  UpcomingList,
} from '../index';

describe('UpcomingList Component', () => {
  it('renders as expected', () => {
    const setUCLoading = jest.fn();
    const wrapper = shallow(
      <UpcomingList
        upcoming={{
          results: [],
        }}
        imgUrl="https://image.tmdb.org/t/p/"
        upcomingIndex={0}
        setUCLoading={setUCLoading}
        loadingUpcoming={false}
        activeTabIndex={1}
        // eslint-disable-next-line jsx-a11y/tabindex-no-positive
        tabIndex={1}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
