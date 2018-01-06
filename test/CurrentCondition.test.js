import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import CurrentCondition from '../lib/CurrentCondition.js';
import MockData from '../__mocks__/mockData';

describe ('CurrentCondition', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount (<CurrentCondition currObs = {MockData.current_observation}
                                      currForecast = {MockData.forecast.simpleforecast.forecastday[0]}
                                      summary = {MockData.forecast.txt_forecast.forecastday[0].fcttext}
                                      />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should have the text we expect', () => {
    expect(wrapper.find('h1').text()).toEqual('Louisville, KY')
    // expect(wrapper.find().text()).toEqual('Louisville, KY')

  })
})



      // <h1>{props.currObs.display_location.full}</h1>
      // <h3>{props.currForecast.date.pretty}</h3>
      // <h3>{props.currForecast.high.fahrenheit}</h3>
      // <h3>{props.currForecast.low.fahrenheit}</h3>
      // <h3>{props.summary}</h3>
      // <h3>{props.currObs.temp_f}</h3>