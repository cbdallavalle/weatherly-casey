import React, { Component } from 'react';
import CurrentCondition from './CurrentCondition';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import Welcome from './Welcome';
import Search from './Search';
import api from '../__mocks__/api';
import '../styles/App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = { 
      forecastObj: null,
      error: null,
      locationChecked: false,
      weatherCity: null
    };

    this.getWeatherApi = this.getWeatherApi.bind(this);
    
  }

  getWeatherApi(location) {
    api.returnWeatherAPI(location)
      .then(json => { 
        this.setState({ forecastObj: json, 
                        error: null, 
                        locationChecked: true, 
                        weatherCity: null
                      });
        this.setLocalStorage(location);
      }) 
      .catch(() => this.setState({ forecastObj: null, 
                                      error: '404: City Not Found', 
                                      locationChecked: true, 
                                      weatherCity: null
                                    })
      );
  }

  setLocalStorage(location) {
    localStorage.setItem('location', location);
  }

  checkLocalStorage() {
    if (window.localStorage.location && !this.state.locationChecked) {
      this.getWeatherApi(window.localStorage.location); 
    }
  }

  componentDidMount() {
    this.checkLocalStorage();
  }

  render() {
    return (

      this.state.forecastObj ? 
      <div className="backGround">
        
        <div className='search-container'>
          <Search getWeatherApi={this.getWeatherApi}/>
        </div>

        <div className="current">
          <CurrentCondition 
          currObs = {this.state.forecastObj.current_observation}
          currForecast = {this.state.forecastObj
            .forecast.simpleforecast.forecastday[0]}
          summary = {this.state.forecastObj
            .forecast.txt_forecast.forecastday[0].fcttext}               
          />
       
        </div>

        <SevenHour hourForecastArray = 
        {this.state.forecastObj.hourly_forecast} />
        <TenDay dayForecastArray = 
        {this.state.forecastObj.forecast.simpleforecast.forecastday} />
      
      </div> 

      :

      this.state.error ?

      <div>
        <Welcome getWeatherApi = {this.getWeatherApi}/>
        <p className='error'>Error - City Not Found</p>
      </div>
      
      : 

      <Welcome getWeatherApi = {this.getWeatherApi}/>
    
    );
  }
}