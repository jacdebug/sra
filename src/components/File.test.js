import React from 'react';
import { shallow } from 'enzyme';
import filesize from 'filesize';
import dateformat from 'dateformat';
import renderer from 'react-test-renderer';
import File from './File';

const fileData = {
  id: 0,
  name: 'checking_account.m2a',
  ext: 'm2a',
  desc: 'Minima dolor et sequi dicta vitae possimus molestiae laborum quis.',
  created: '2017-01-22T11:45:28.533Z',
  size: 2042211209,
};

const fileDataKeys = Object.keys(fileData);

it('renders without crashing', () => {
  shallow(<File file={fileData} />);
});

it('display all file informtion', () => {
  const filesShallowRender = shallow(<File file={fileData} />);
  const renderHtml = filesShallowRender.html();
  for (let key of fileDataKeys) {
    let testString = fileData[key];
    if (key === 'created') testString = dateformat(testString);
    if (key === 'size') testString = filesize(testString);
    expect(renderHtml.indexOf(testString) > -1).toBe(true);
  }
});

it('renders a snapshot', () => {
  const tree = renderer.create(<File file={fileData} />).toJSON();
  expect(tree).toMatchSnapshot();
});
