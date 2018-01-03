import React from 'react';

const SevenHour = (props) => {
  return (
      <h2> Time: {props.hourOne} </h2>
      <img className= 'weather-image'src={props.img} />
    )
}