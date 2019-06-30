/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import {
  PopPersonList,
} from '../index';

describe('PopPersonList Component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <PopPersonList />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
