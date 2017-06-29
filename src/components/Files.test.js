import React from 'react';
import { shallow } from 'enzyme';
import Files from './Files';
import File from './File';

const mockDataFiles = [
  {
    id: 0,
    name: 'checking_account.m2a',
    ext: 'm2a',
    desc: 'Minima dolor et sequi dicta vitae possimus molestiae laborum quis.',
    created: '2017-01-22T11:45:28.533Z',
    size: 2042211209,
  },
  {
    id: 1,
    name: 'checking_account_dynamic.wav',
    ext: 'wav',
    desc:
      'Commodi aperiam dolores consectetur non et quas animi reprehenderit.',
    created: '2017-01-02T18:10:05.646Z',
    size: 7396732169,
  },
];

it('renders without crashing', () => {
  shallow(<Files files={[]} />);
});

it('show no files feedback if files prop length is zero', () => {
  const noFilePlaceholder = <div>No files</div>;
  const filesShallowRender = shallow(<Files files={[]} />);
  expect(filesShallowRender.contains(noFilePlaceholder)).toBe(true);
  expect(filesShallowRender.find(File)).toHaveLength(0);
});

it('renders list of files', () => {
  const noFilePlaceholder = <div>No files</div>;
  const filesShallowRender = shallow(<Files files={mockDataFiles} />);
  expect(filesShallowRender.contains(noFilePlaceholder)).toBe(false);
  expect(filesShallowRender.find(File)).toHaveLength(2);
});
