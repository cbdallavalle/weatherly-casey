import React, { Component } from 'react';

export default class Data extends Component {
  constructor(){
    super();
    this.zipCode = 80203;
    this.state = {
    }
  }

  returnWeatherAPI() {
    fetch(`http://api.wunderground.com/api/143dda37475fd161/conditions/forecast/forecast10day/hourly/q/${this.zipCode}.json`)
      .then(data => data.json())
      .then(json => {
        this.setState({
        });
      });
  }

  render() {
    this.returnWeatherAPI();
    return (
      <h1>{this.state.city}, {this.state.state} {this.state.summary} {this.state.high} {this.state.low}</h1>
    )
  }
}