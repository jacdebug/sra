import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SortbySelect from './SortbySelect';

it('renders without crashing', () => {
  const mockFn = jest.fn();
  shallow(<SortbySelect sortBy="id" sortOnChange={mockFn} />);
});

it('renders correctly', () => {
  const mockFn = jest.fn();
  const tree = shallow(<SortbySelect sortBy="id" sortOnChange={mockFn} />);
  expect(toJson(tree)).toMatchSnapshot();
});
