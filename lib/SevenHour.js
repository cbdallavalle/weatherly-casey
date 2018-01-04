import React from 'react';

export default function SevenHour(props) {
  return (
    <div>
      <h2> Time: {props.hour} </h2>
      <img className= 'weather-image'src={props.image} />
      <h2> Projected Temp: {props.temp} </h2>
    </div>
    )
}