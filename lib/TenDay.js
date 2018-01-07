import React from 'react';
import './TenDay.css'

export default function TenDay (props) {
  return (
    <div className="day-container">
      <div className="ten-day">
        <h2> {props.day} </h2>
        <img className= "ten-day-img"src = {props.img} />
        <h2> Projected High: {props.highTemp}°</h2>
        <h2> Projected Low: {props.lowTemp}°</h2>
      </div>
    </div>
  )
}