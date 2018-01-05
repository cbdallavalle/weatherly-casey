import React, { Component } from 'react';
import MockData from '../__mocks__/mockData';
import CurrentCondition from './CurrentCondition';
import Control from './Control';
import FrontPage from './FrontPage'
import '../styles/App.css';
import api from '../__mocks__/api.js';

let currDay = MockData.forecast.simpleforecast.forecastday[0].date.pretty; 
let currHigh = MockData.forecast.simpleforecast.forecastday[0].high.fahrenheit;
let currLow = MockData.forecast.simpleforecast.forecastday[0].low.fahrenheit;
let dayForecastArray = MockData.forecast.simpleforecast.forecastday;

let currTemp = MockData.current_observation.temp_f;
let currCity = MockData.current_observation.display_location.full;

let currSummary = MockData.forecast.txt_forecast.forecastday[14].fcttext;

let hourForecastArray = MockData.hourly_forecast;

          // forecastDayObservations: json.forecast.simpleforecast.forecastday[0],
          // currLocation: json.current_observation,
          // currSummary: json.forecast.txt_forecast.forecastday[14].fcttext,
          // hourForcastArray: json.hourly_forecast,

export default class App extends Component {
  constructor() {
    super();
    this.state = { 
      forecastObj: null
    }
  this.getWeatherApi = this.getWeatherApi.bind(this)

  }

  componentDidMount() {
    this.getWeatherApi();
    console.log(this.state);
  }

  getWeatherApi() {
    api.returnWeatherAPI().then(json => this.setState({ forecastObj: json}))
  }

  render() {
    
    return (

      this.state.forecastObj && 
      <div>
        <FrontPage />
        <div className="current">
          <CurrentCondition currObs = {this.state.forecastObj.current_observation}
                          currForecast = {this.state.forecastObj.forecast.simpleforecast.forecastday[0]}
                          summary = {this.state.forecastObj.forecast.txt_forecast.forecastday[0].fcttext}
                         
        />
        <Control hourForecastArray = {hourForecastArray}
                 dayForecastArray = {dayForecastArray}
        />
      
        </div>
      </div> 


    )
  }
};