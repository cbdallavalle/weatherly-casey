import React, { Component } from 'react';
import '../styles/FrontPage.css';

export default class FrontPage extends Component {
  constructor() {
    super();
    this.state = {
      inputCity: null,
    }

    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleBtnClick () {
    this.props.getWeatherApi(this.state.inputCity)
  }

  handleChange (e) {
    this.setState({
      inputCity: e.target.value
    })
  }

  render() {
    return (
      <header className='Front-page'>
        <h1 id="title"> Bend the Weather </h1>
        <div className='submit-city-form'>
          <label htmlFor="enter-city" ></label>
          <input
            placeholder="Enter your zipCode..."
            id="city-input"
            onChange={this.handleChange}
          />
          <button className='submit' 
                  onClick={ this.handleBtnClick }
          >Submit</button>
        </div>
      </header>
    )
  }
}