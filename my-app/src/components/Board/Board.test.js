import React from 'react'
import Board from './index'
import Map from '../Map/index'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
configure({adapter: new Adapter()})

it('renders contain one div', () => {
  const wrapper = shallow(<Board />);
  expect(wrapper.find('div').exists()).toBe(true);
});