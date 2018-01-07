import React from 'react';
import './SevenHour.css';

export default function SevenHour(props) {
  return (
    <div className="seven-hour">
      <h2> Time: {props.hour} </h2>
      <img className= 'weather-image'src={props.image} />
      <h3> Projected Temp: {props.temp}° </h3>
    </div>
  )
}