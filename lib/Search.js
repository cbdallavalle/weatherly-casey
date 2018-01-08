import React, { Component } from 'react';

export default class Search extends Component {
  constructor() {
    super();

    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleBtnClick () {
    this.props.getWeatherApi(this.state.inputCity)
  }

  handleChange (e) {
    this.setState({
      inputCity: e.target.value,
      suggestedCities: this.suggestCity(e.target.value)
    })
      console.log(this.state.suggestedCities)
  }

  return (
    <label htmlFor="enter-city" ></label>
    <input
      placeholder="Enter your zipCode..."
      id="city-input"
      onChange={this.handleChange}
    />


    <button className='submit' 
            onClick={ this.handleBtnClick }
    >Submit</button>
  )
}