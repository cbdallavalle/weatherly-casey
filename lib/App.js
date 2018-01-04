import React, { Component } from 'react';
import MockData from '../__mocks__/mockData.js';
import CurrentCondition from './CurrentCondition.js';
import Control from './Control.js';
import '../styles/App.css';

let currDay = MockData.forecast.simpleforecast.forecastday[0].date.pretty; 
let currHigh = MockData.forecast.simpleforecast.forecastday[2].high.fahrenheit;
let currLow = MockData.forecast.simpleforecast.forecastday[3].low.fahrenheit;
let currSummary = MockData.forecast.txt_forecast.forecastday[14].fcttext;
let currTemp = MockData.current_observation.temp_f;




const App = () => {
  return (
      <div>

        <div className="current">
          <CurrentCondition />
    
        <header>
          <h1 id="title"> Bend the Weather </h1>
          <label htmlFor="enterCity" >Enter your city</label>
            <input 
              id="enterCity"
            />
        </header>
      
        <h3> Date: {currDay} </h3>
        <h3> CurrentTemp: {currTemp} </h3>
        <h3> Expected High: {currHigh} </h3>
        <h3> Expected Low: {currLow} </h3>
        <h3> Today/'s summary: {currSummary} </h3>

        <Control />
        </div>

      </div>


    )
}


export default App;