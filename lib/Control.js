import React, { Component } from 'react';
import MockData from '../__mocks__/mockData.js';
import SevenHour from './SevenHour.js';
import TenDay from './TenDay.js';
import './TenDay.css';

let hourForecastArray = MockData.hourly_forecast;
let dayForecastArray = MockData.forecast.simpleforecast.forecastday;

export default function Control() {
  let currIndex = findCurrHour();
  let sevenArray = findNextSevenHours();
  console.log(sevenArray)



  function findCurrHour() {
    return hourForecastArray.findIndex (function (hourObj) {
      return hourObj.FCTTIME.hour == '11'
    } )
  }

  function findNextSevenHours() {
    return hourForecastArray.reduce((accu, hourObj, index) => {
      if(index > currIndex && index <= currIndex + 7) {
        accu.push(hourObj)
      }
      return accu;
    }, [])
  }

    return (
      <div className="hour-container">
        {
        sevenArray.map(hourObj => {
          let hour = hourObj.FCTTIME.civil;
          let image = hourObj.icon_url;
          let temp = hourObj.temp.english;

          return ( 
              <SevenHour hour={hour}
                        image={image}
                        temp={temp}
                        />

            )
        })
        }

        <div className="day-container">
          {
        dayForecastArray.map(dayObj => {
          let day = dayObj.date.weekday;
          let img = dayObj.icon_url;
          let highTemp = dayObj.high.fahrenheit;
          let lowTemp = dayObj.low.fahrenheit;

          return (
              <TenDay day={day}
                      img={img}
                      highTemp={highTemp}
                      lowTemp={lowTemp}
                      />
            )
        })
      }
        </div>
      </div>
      )

}

