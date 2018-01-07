import React, { Component } from 'react';
import '../styles/FrontPage.css';
import trie from './AutoComplete.js';

// console.log(trie.suggest("DE"));
export default class FrontPage extends Component {
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
      suggestedCities: this.suggestCity(e.target.value)
    })
      console.log(this.state.suggestedCities)
  }

  suggestCity(strgFrag) {
    return trie.suggest(strgFrag.toLowerCase())
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

        {
          this.state.inputCity !== "" ?

          <div className="suggest-container">
          {
            this.state.suggestedCities.map(city => {
              return (
                    <p  className="suggestedCities"
                        onClick={() => {
                          document.getElementById('city-input').value = city;
                          this.setState({ inputCity: "", 
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

      </header>
    )
  }
}