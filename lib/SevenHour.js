import React from 'react';
import './SevenHour.css';

const SevenHour = (props) => {
  return (
    <div className="seven-hour">
      <h2> Time: {props.hour} </h2>
      <img className= 'weather-image'src={props.image} />
      <h2> Projected Temp: {props.temp} </h2>
    </div>
    )
}

export default SevenHour;