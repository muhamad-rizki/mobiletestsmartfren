/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import {
  TopRatedList,
} from '../index';

describe('TopRatedList Component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <TopRatedList />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
