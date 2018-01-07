import React, { Component } from 'react';

export default function Card(props) {
  return (
    props.array.length === 7 ?
      <div>
        {       
          props.array.map(hourObj => {
            let hour = hourObj.FCTTIME.civil;
            let image = hourObj.icon_url;
            let temp = hourObj.temp.english;

            return ( 
              <div className="seven-hour">
                <h2> Time: {hour} </h2>
                <img className='weather-image' src={image} />
                <h3> Projected Temp: {temp}° </h3>
              </div>
            )}
          )
        }
      </div>

    : 

    <div>
      {
        props.array.map(dayObj => {
          let day = dayObj.date.weekday;
          let img = dayObj.icon_url;
          let highTemp = dayObj.high.fahrenheit;
          let lowTemp = dayObj.low.fahrenheit;
          return (
            <div lassName="ten-day">
              <h2> {day} </h2>
              <img className="ten-day-img" src ={img} />
              <h2> Projected High: {highTemp}°</h2>
              <h2> Projected Low: {lowTemp}°</h2>
            </div>
          )
        })
      }  
    </div>
  )

}

