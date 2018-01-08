import React, { Component } from 'react';
import './CurrentCondition.css';

export default function CurrentCondition (props) {
  return (
    <div className="city-info">
      <h1 className="city-title">{props.currObs.display_location.full}</h1>
      <h3 className="date">{props.currForecast.date.weekday}, {props.currForecast.date.monthname_short}. {props.currForecast.date.day}</h3>
      <h3 className="current-condition">{props.currObs.weather}</h3>
      <h3> Current Temperature: {props.currObs.temp_f}°F</h3>
      <h3 className="current-design"> Projected high: {props.currForecast.high.fahrenheit}°</h3>
      <h3 className="current-design"> Projected Low: {props.currForecast.low.fahrenheit}°</h3>
      <h3 className="current-design"> Your summary: {props.summary}</h3>
    </div>
  )
}