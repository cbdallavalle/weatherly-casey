import React from 'react';

const TenDay = (props) => {
  return (
      <div>
        <h2> Day {props.day} </h2>
        <img src = {props.img} />
        <h2> Projected High: {props.highTemp}</h2>
        <h2> Projected Low: {props.lowTemp}</h2>
      </div>
    )
}

export default TenDay;