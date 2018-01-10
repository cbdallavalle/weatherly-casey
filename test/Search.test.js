import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import Search from '../lib/Search.js';
import MockData from '../__mocks__/mockData';
import localStorageMock from '../__mocks__/localStorage';

describe('Search', () => {
  let wrapper;
  let loactionApiCall;

  beforeEach(() => {
    wrapper = shallow(<Search getWeatherApi = {(location) => loactionApiCall = 'api call from: ' + location }/>)
    window.localStorage = localStorageMock;
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render an input and a button', () => {
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('label').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('should render an option tag when there is a suggested city', () => {
    wrapper.setState({ inputCity: null, suggestedCities: [' Denver, Co ']});
    expect(wrapper.find('option').length).toEqual(1);
  });

  it('should change the state inputCity on change of input', () => {
    wrapper.find('input').simulate('change', {target: {value: 'de'}});
    expect(wrapper.state().inputCity).toEqual('de');
  })

  it('should input the value p tag of the suggested cities array on click', () => {
    wrapper.find('input').simulate('change', {target: {value: 'den'}});
    expect(wrapper.find('option').length).toEqual(2);
    wrapper.find('option').first().simulate('click');
    expect(wrapper.state().inputCity).toEqual('denver, co');
  })

  it('should have a suggestedCities array when the inputCity has a string fragment', () => {
    wrapper.find('input').simulate('change', {target: {value: 'den'}});
    expect(wrapper.state().suggestedCities.length).toEqual(2);
  })

  it('should return a string of the location when the submit button is clicked', () => {
    wrapper.find('input').simulate('change', {target: {value: 'denver, co'}});
    wrapper.find('button').simulate('click');
    expect(loactionApiCall).toEqual('api call from: denver, co');
  })
})