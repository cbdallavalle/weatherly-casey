import React, { Component } from 'react';
import SevenHour from './SevenHour.js';
import TenDay from './TenDay.js';
import Card from './Card.js';

export default function Control(props) {
  let sevenArray = findNextSevenHours();

  function findNextSevenHours() {
    return props.hourForecastArray.reduce((accu, hourObj, index) => {
      if (index >= 0 && index < 7) {
        accu.push(hourObj)
      }
      return accu;
    }, [])
  }

  return (
    <div className="hour-container">

      <Card array = {sevenArray} />
    
      <div className="day-container">
        <Card array = {props.dayForecastArray} />

      </div>

    </div>
  )
}
