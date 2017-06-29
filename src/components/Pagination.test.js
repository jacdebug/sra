import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Pagination from './Pagination';

const paginationLinksData = [
  {
    type: 'first',
    isEnabled: true,
    queryString: '?_page=1&name_like=',
    linkData: {
      _page: '1',
      name_like: '',
      rel: 'first',
      url: 'http://localhost:3003/files?_page=1&name_like=',
    },
  },
  { type: 'prev', isEnabled: false, queryString: '?', linkData: null },
  {
    type: 'next',
    isEnabled: true,
    queryString: '?_page=2&name_like=',
    linkData: {
      _page: '2',
      name_like: '',
      rel: 'next',
      url: 'http://localhost:3003/files?_page=2&name_like=',
    },
  },
  {
    type: 'last',
    isEnabled: true,
    queryString: '?_page=100&name_like=',
    linkData: {
      _page: '100',
      name_like: '',
      rel: 'last',
      url: 'http://localhost:3003/files?_page=100&name_like=',
    },
  },
];

it('renders without crashing', () => {
  shallow(<Pagination paginationLinks={paginationLinksData} />);
});

it('renders correctly', () => {
  const tree = shallow(<Pagination paginationLinks={paginationLinksData} />);
  expect(toJson(tree)).toMatchSnapshot();
});
