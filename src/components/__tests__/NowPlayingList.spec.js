/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import {
  NowPlayingList,
} from '../index';

describe('NowPlayingList Component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <NowPlayingList />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
