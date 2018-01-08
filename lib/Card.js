import React, { Component } from 'react';
import '../styles/Card.css';

export default function Card(props) {
  let imageSource = 'http://icons.wxug.com/i/c/f/nt_' + props.data.icon + '.gif';

  return (
    props.type === 'hourly' ?
      <div>
        <div className="seven-hour">
          <h2> Time: {props.data.FCTTIME.civil} </h2>
          <img className='weather-image' src={imageSource} />
          <h3> Projected Temp: {props.data.temp.english}° </h3>
        </div>
      </div>

    : 

      <div>
        <div className="ten-day">
          <h2> {props.data.date.weekday} </h2>
          <img className="ten-day-img" src ={imageSource} />
          <h2> Projected High: {props.data.high.fahrenheit}°</h2>
          <h2> Projected Low: {props.data.low.fahrenheit}°</h2>
        </div>
      </div>
  )

}