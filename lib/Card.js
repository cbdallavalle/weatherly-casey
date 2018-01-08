import React, { Component } from 'react';

export default function Card(props) {
  return (
    props.type === 'hourly' ?
      <div>
        <div className="seven-hour">
          <h2> Time: {props.data.FCTTIME.civil} </h2>
          <img className='weather-image' src={props.data.icon_url} />
          <h3> Projected Temp: {props.data.temp.english}° </h3>
        </div>
      </div>

    : 

      <div>
        <div className="ten-day">
          <h2> {props.data.date.weekday} </h2>
          <img className="ten-day-img" src ={props.data.icon_url} />
          <h2> Projected High: {props.data.high.fahrenheit}°</h2>
          <h2> Projected Low: {props.data.low.fahrenheit}°</h2>
        </div>
      </div>
  )

}