import React, { Component } from 'react';
import MockData from '../__mocks__/mockData.js';

let hourForecastArray = MockData.hourly_forecast;


export default class Control extends Component {
  constructor() {
    super();

    this.state = {
      time: '12',
    }
    // this.findCurrHour = this.findCurrHour.bind(this)
    // currIndex: this.findCurrHour(),
  }

  componentDidMount() {
    this.findCurrHour();
  }

  findCurrHour() {
    let currIndex = hourForecastArray.findIndex(hourObj => {
      return hourObj.FCTTIME.hour == this.state.time
    } )

    this.findNextSevenHours(currIndex);
  }

  findNextSevenHours(currIndex) {
    return hourForecastArray.reduce((accu, hourObj, index) => {
      
    })
  }

  render() {
    return (
      <div>
      </div>
      )
  }

}

