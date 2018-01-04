import React, { Component } from 'react';
import './CurrentCondition.css';

export default class CurrentCondition extends Component {
  constructor() {
    super()
    this.state = {
      full: 'Louisville, KY',
      
    }
  }

  render() {
    return (
        <div>
          <h1>{this.state.full}</h1>
        </div>
      )
  } 

}