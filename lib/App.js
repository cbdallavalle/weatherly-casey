import React, { Component } from 'react';
import MockData from '../__mocks__/mockData';
import CurrentCondition from './CurrentCondition';
import Control from './Control';
import FrontPage from './FrontPage'
import '../styles/App.css';

let currDay = MockData.forecast.simpleforecast.forecastday[0].date.pretty; 
let currHigh = MockData.forecast.simpleforecast.forecastday[0].high.fahrenheit;
let currLow = MockData.forecast.simpleforecast.forecastday[0].low.fahrenheit;
let dayForecastArray = MockData.forecast.simpleforecast.forecastday;

let currTemp = MockData.current_observation.temp_f;
let currCity = MockData.current_observation.display_location.full;

let currSummary = MockData.forecast.txt_forecast.forecastday[14].fcttext;

let hourForecastArray = MockData.hourly_forecast;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      zipCode: '',
      cityEntered: false
    }
  }

  render() {
    return (
      <div>
        <FrontPage />
        <div className="current">
          <CurrentCondition city = {currCity}
                          day = {currDay}
                          high = {currHigh}
                          low = {currLow}
                          summary = {currSummary}
                          temp = {currTemp}
        />
        <Control hourForecastArray = {hourForecastArray}
                 dayForecastArray = {dayForecastArray}
        />
      
        </div>
      </div>
    )
  }
};