import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import TenDay from '../lib/TenDay.js';
import MockData from '../__mocks__/mockData';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TenDay day={MockData.forecast.simpleforecast.forecastday[0].date.weekday}
                              img={MockData.forecast.simpleforecast.forecastday[0].icon_url}
                              highTemp={MockData.forecast.simpleforecast.forecastday[0].high.fahrenheit}
                              lowTemp={MockData.forecast.simpleforecast.forecastday[0].low.fahrenheit}
                      />)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render a card', () => {
    expect(wrapper.find('div').length).toEqual(2);
  })

  it('should render the day, the image, and the high and low temps', () => {
    // expect(wrapper.find('h2').length).toEqual(1);
    // expect(wrapper.find('img').length).toEqual(1);
    // expect(wrapper.find('h3').length).toEqual(1);

    // expect(wrapper.find('h2').text()).toEqual(' Time: 12:00 PM ');
    // expect(wrapper.find('img').prop('src')).toEqual('http://icons.wxug.com/i/c/k/partlycloudy.gif');
    // expect(wrapper.find('h3').text()).toEqual(' Projected Temp: 47 ');

  })


  });