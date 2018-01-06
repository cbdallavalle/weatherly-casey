import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import Control from '../lib/Control.js';
import MockData from '../__mocks__/mockData';

describe('Control', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow (<Control hourForecastArray = {MockData.hourly_forecast} 
                                                    dayForecastArray = {MockData.forecast.simpleforecast.forecastday}
                                                    />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should start with props', () => {
    expect(wrapper.instance().props.hourForecastArray).toEqual(MockData.hourly_forecast)
    expect(wrapper.instance().props.dayForecastArray).toEqual(MockData.forecast.simpleforecast.forecastday)
  })

  it('should render 7 seven hour cards', () => {
    expect(wrapper.find('SevenHour').length).toEqual(7)
  })

  it('should render 10 ten hour cards', () => {
    expect(wrapper.find('TenDay').length).toEqual(10)
  })  
  //Maybe test if text matches data fetched?
})