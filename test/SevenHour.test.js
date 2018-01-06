import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import SevenHour from '../lib/SevenHour.js';
import MockData from '../__mocks__/mockData';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SevenHour hour={MockData.hourly_forecast[0].FCTTIME.civil}
                                 image={MockData.hourly_forecast[0].icon_url}
                                 temp={MockData.hourly_forecast[0].temp.english}
                      />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render a card', () => {
    expect(wrapper.find('div').length).toEqual(1);
  })

  it('should render the time, the image, and the temp', () => {
    expect(wrapper.find('h2').length).toEqual(1);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('h3').length).toEqual(1);

    expect(wrapper.find('h2').text()).toEqual(' Time: 12:00 PM ');
    expect(wrapper.find('img').prop('src')).toEqual('http://icons.wxug.com/i/c/k/partlycloudy.gif');
    expect(wrapper.find('h3').text()).toEqual(' Projected Temp: 47 ');

  })
})