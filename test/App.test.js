import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import App from '../lib/App.js';
import MockData from '../__mocks__/mockData';
import localStorageMock from '../__mocks__/localStorage';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
    window.localStorage = localStorageMock;
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render frontpage by default', () => {
    expect(wrapper.find('Welcome').length).toEqual(1);
  });

  it('should have a default state of forecastObj: null', () => {
    expect(wrapper.state().forecastObj).toEqual(null);
  });

  it('should render CurrentCondition, SevenHour, TenDay, and Search when given a state', () => {
    wrapper.setState({ forecastObj: MockData });
    expect(wrapper.find('CurrentCondition').length).toEqual(1);
    expect(wrapper.find('SevenHour').length).toEqual(1);
    expect(wrapper.find('TenDay').length).toEqual(1);
    expect(wrapper.find('Search').length).toEqual(1);
  });

  it('should render error message when location is not found', () => {
    wrapper.setState({ forecastObj: null, error: '404: City Not Found' })
    expect(wrapper.find('Welcome').length).toEqual(1);
    expect(wrapper.find('p').length).toEqual(1);
  })

  it('should check values in localStorage', () => {
    console.log(window.localStorage)
  })

})
