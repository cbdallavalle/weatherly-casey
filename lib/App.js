import React, { Component } from 'react';
import MockData from '../__mocks__/mockData';
import CurrentCondition from './CurrentCondition';
import Control from './Control';
import FrontPage from './FrontPage'
import api from '../__mocks__/api.js';
import '../styles/App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = { 
      forecastObj: null,
      error: null,
      locationChecked: false,
      weatherCity: null
    }

  this.getWeatherApi = this.getWeatherApi.bind(this);
  this.handleBtnWeatherChange = this.handleBtnWeatherChange.bind(this);
  this.handleWeatherChange = this.handleWeatherChange.bind(this);

  }

  getWeatherApi(location) {
    api.returnWeatherAPI(location)
    .then(json => { 
      this.setState({ forecastObj: json, 
                      error: null, 
                      locationChecked: true, 
                      weatherCity: null
                    }) 
       localStorage.setItem('location', location) 
      } ) 
    .catch(error => this.setState({ forecastObj: null, 
                                    error: '404: City Not Found', 
                                    locationChecked: true, 
                                    weatherCity: null
                                  })
    )
  }

  checkLocalStorage() {
    if(window.localStorage.location && !this.state.locationChecked) {
      this.getWeatherApi(window.localStorage.location) 
    }
  }

  handleBtnWeatherChange() {
    localStorage.clear();
    this.getWeatherApi(this.state.weatherCity)
  }

  handleWeatherChange(e) {
    let forecast = this.state.forecastObj

    this.setState({
      forecastObj: forecast,
      error: null,
      locationChecked: true,
      weatherCity: e.target.value
    })
  }

  render() {
    this.checkLocalStorage();
    return (

      this.state.forecastObj ? 
      <div className="backGround">
        <input
            placeholder="Enter your zipCode..."
            onChange={this.handleWeatherChange}
        />
        <button onClick={this.handleBtnWeatherChange}>Submit</button>
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

      this.state.error ?

      <div>
        <FrontPage getWeatherApi = {this.getWeatherApi}/>
        <p className='error'>Error - City Not Found</p>
      </div>
      
      : 

      <FrontPage getWeatherApi = {this.getWeatherApi}/>
    )
  }
};