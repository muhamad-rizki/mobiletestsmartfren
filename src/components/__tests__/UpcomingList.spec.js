/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import {
  UpcomingList,
} from '../index';

describe('UpcomingList Component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <UpcomingList />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
