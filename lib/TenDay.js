import React from 'react';
import './TenDay.css'

const TenDay = (props) => {
  return (
    <div className="day-container">
      <div className="ten-day">
        <h2> Day {props.day} </h2>
        <img src = {props.img} />
        <h2> Projected High: {props.highTemp}</h2>
        <h2> Projected Low: {props.lowTemp}</h2>
      </div>
    </div>
    )
}

export default TenDay;