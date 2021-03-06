import React from 'react';
import Card from './Card.js';
import '../styles/TenDay.css';
import PropTypes from 'prop-types';

export default function TenDay (props) {
  return (
    <div className="day-container">
      {
        props.dayForecastArray.map(dayObj => {
          return (
            <div className="tenday-card" >
              <Card type = 'tenDay'
                    data = {dayObj} 
              />
            </div>
          );
        })
      }  
    </div>
  );
}

TenDay.propTypes = {
  dayForecastArray: PropTypes.array
};