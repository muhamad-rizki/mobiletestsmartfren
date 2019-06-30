/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import {
  PopularList,
} from '../index';

describe('PopularList Component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <PopularList />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
