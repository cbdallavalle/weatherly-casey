import React, { Component } from 'react';
import MockData from '../__mocks__/mockData';
import CurrentCondition from './CurrentCondition';
import Control from './Control';
import FrontPage from './FrontPage'
import '../styles/App.css';
import api from '../__mocks__/api.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = { 
      forecastObj: null
    }

  this.getWeatherApi = this.getWeatherApi.bind(this)

  }

  // componentDidMount() {
  //   this.getWeatherApi();
  // }

  getWeatherApi(location) {
    api.returnWeatherAPI(location).then(json => this.setState({ forecastObj: json}))
  }

  render() {
    
    return (

      this.state.forecastObj ? 
      <div>
        <div className="current">
          <CurrentCondition currObs = {this.state.forecastObj.current_observation}
                            currForecast = {this.state.forecastObj.forecast.simpleforecast.forecastday[0]}
                            summary = {this.state.forecastObj.forecast.txt_forecast.forecastday[0].fcttext}
                         
        />
        <Control hourForecastArray = {this.state.forecastObj.hourly_forecast}
                 dayForecastArray = {this.state.forecastObj.forecast.simpleforecast.forecastday}
        />
      
        </div>
      </div> 

      :

      <FrontPage getWeatherApi = {this.getWeatherApi}/>
    )
  }
};