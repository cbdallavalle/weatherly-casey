import React, { Component } from 'react';
import './CurrentCondition.css';

export default function CurrentCondition (props) {
  return (
    <div>
      <h1>{props.currObs.display_location.full}</h1>
      <h3>{props.currForecast.date.pretty}</h3>
      <h3>{props.currForecast.high.fahrenheit}</h3>
      <h3>{props.currForecast.low.fahrenheit}</h3>
      <h3>{props.summary}</h3>
      <h3>{props.currObs.temp_f}</h3>
    </div>
  )
}