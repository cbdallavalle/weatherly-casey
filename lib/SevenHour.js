import React from 'react';
import Card from './Card.js';
import './SevenHour.css';

export default function SevenHour(props) {
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
    <div>
      {    
        sevenArray.map(hourObj => {
          return ( 
            <div className="seven-hour-cont">
              <Card type="hourly" 
                    data = {hourObj} 
              />
            </div>
          )}
        )
      }
    </div>
  )
}