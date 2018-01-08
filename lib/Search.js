import React, { Component } from 'react';
import trie from './AutoComplete.js';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      inputCity: null,
      suggestedCities: []
    }

    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleBtnClick () {
    this.props.getWeatherApi(this.state.inputCity)
  }

  handleChange (e) {
    this.setState({
      inputCity: e.target.value,
      suggestedCities: trie.suggest(e.target.value.toLowerCase())
    })

    if (e.target.value === '') {
      this.setState({
        inputCity: null,
        suggestedCities: []
      })
    }
  }

  render() {
  return (
    <div>
      <label htmlFor="enter-city" ></label>
        <input
          placeholder="Enter City, State or zip code..."
          id="city-input"
          onChange={this.handleChange}
        />
      <button className='submit' 
              onClick={ this.handleBtnClick }
      >Submit</button>

      {
          this.state.suggestedCities.length ?

          <div className="suggest-container">
          {
            this.state.suggestedCities.map(city => {
              return (
                    <p  className="suggestedCities"
                        onClick={() => {
                          trie.select(city);
                          document.getElementById('city-input').value = city;
                          this.setState({ inputCity: city, 
                                          suggestedCities: [],
                                        })
                        }}> {city} 
                    </p>
                  )
            })
          }
          </div>

          :

          <div>
          </div>
      }

    </div>
  )
}
}