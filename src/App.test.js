import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import renderer from 'react-test-renderer';


describe('App component', () => {
  it('starts with a count of 0', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('p').text();
    expect(text).toEqual('lorem');
  });
});

it('matches the snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });