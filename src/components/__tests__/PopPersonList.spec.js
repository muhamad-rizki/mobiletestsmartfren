/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import {
  PopPersonList,
} from '../index';

describe('PopPersonList Component', () => {
  it('renders as expected', () => {
    const setPPLoading = jest.fn();
    const wrapper = shallow(
      <PopPersonList
        popPerson={{
          results: [],
        }}
        imgUrl="https://image.tmdb.org/t/p/"
        popPersonIndex={0}
        setPPLoading={setPPLoading}
        loadingPopPerson={false}
        activeTabIndex={1}
        // eslint-disable-next-line jsx-a11y/tabindex-no-positive
        tabIndex={1}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
