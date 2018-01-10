import React, { Component } from 'react';
import trie from './AutoComplete.js';
import PropTypes from 'prop-types';
import '../styles/Search.css';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      inputCity: '',
      suggestedCities: []
    };

    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleBtnClick() {
    this.props.getWeatherApi(this.state.inputCity);
  }

  handleChange(e) {
    this.setState({
      inputCity: e.target.value,
      suggestedCities: trie.suggest(e.target.value.toLowerCase())
    });

    if (e.target.value === '') {
      this.setState({
        inputCity: '',
        suggestedCities: []
      });
    }
  }

  render() {
    return (
      <div className="change-search">
        <label htmlFor="enter-city"></label>
          <input
            placeholder="Enter City, State or zip code..."
            list='cities-array'
            id="city-input"
            onChange={ this.handleChange }
          /> 
          <datalist id="cities-array">
            {
              this.state.suggestedCities.map(city => {
                return (
                  <option  value={ city }
                           className="suggestedCities"
                           onClick={() => {
                             trie.select(city);
                             this.setState({ inputCity: city, 
                                             suggestedCities: []
                                           });
                           }} 
                  />
                );
              })
            }
          </datalist>
        <button className='submit' 
                onClick={ this.handleBtnClick }
        >
          Submit
        </button>
      </div>
    );
  }
}

Search.propTypes = {
  getWeatherApi: PropTypes.func 
};