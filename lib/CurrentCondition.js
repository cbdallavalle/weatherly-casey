import React, { Component } from 'react';
import './CurrentCondition.css';

export default function CurrentCondition (props) {
  return (
    <div>
      <h1>{props.city}</h1>
      <h3>{props.day}</h3>
      <h3>{props.high}</h3>
      <h3>{props.low}</h3>
      <h3>{props.summary}</h3>
      <h3>{props.temp}</h3>
    </div>
  )
}