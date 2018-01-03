import React, { Component } from 'react';

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