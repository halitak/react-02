import React from 'react';
import { shallow } from 'enzyme';

import Routes from './Routes';

it('renders correctly', () => {
  const wrapper = shallow(<Routes />);
  expect(wrapper).toMatchSnapshot();
});
