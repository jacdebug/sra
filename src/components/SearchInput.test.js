import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchInput from './SearchInput';

it('renders without crashing', () => {
  const mockFn = jest.fn();
  shallow(<SearchInput searchTerm="testval" searchKeyPress={mockFn} />);
});

it('renders correctly', () => {
  const mockFn = jest.fn();
  const tree = shallow(
    <SearchInput searchTerm="testval" searchKeyPress={mockFn} />
  );
  expect(toJson(tree)).toMatchSnapshot();
});
