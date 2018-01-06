import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import App from '../lib/App.js';
import MockData from '../__mocks__/mockData';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should ', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render frontpage by default', () => {
    expect(wrapper.find('FrontPage').length).toEqual(1);
  });

  it('should have a default state of forecastObj: null', () => {
    expect(wrapper.state().forecastObj).toEqual(null);
  });

  it('should render CurrentCondition and Control when given a state', () => {
    wrapper.setState({ forecastObj: MockData });
    expect(wrapper.find('CurrentCondition').length).toEqual(1);
    expect(wrapper.find('Control').length).toEqual(1);
  });

})
