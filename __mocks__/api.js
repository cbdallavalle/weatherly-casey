// import React, { Component } from 'react';

// const Data extends Component {
//   constructor(){
//     super();
//     this.zipCode = 80203;
//     this.state = {
//       forecastDayObservations: '',
//       currLocation: '', 
//       currSummary: '',
//       hourForcastArray: ''
//     }

//     // this.returnWeatherAPI = this.returnWeatherAPI.bind(this);
//   }

export default {
  returnWeatherAPI() {
    return fetch(`http://api.wunderground.com/api/143dda37475fd161/conditions/forecast/forecast10day/hourly/q/80203.json`)
      .then(data => data.json()) 
      }

}