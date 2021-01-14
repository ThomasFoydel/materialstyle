import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './Sidebar';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

configure({ adapter: new Adapter() });

const defaultProps = {
  showSidebar: false,
  setShowSidebar: () => {},
  classes: {},
};

describe('<Sidebar />', () => {
  const container = shallow(<Sidebar props={{ ...defaultProps }} />);
  //   it('should match the snapshot', () => {
  //     expect(container.html()).toMatchSnapshot();
  //   });

  it('Should match snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('Should have three links', () => {
    expect(container.find('Link').length).toEqual(3);
  });
});
