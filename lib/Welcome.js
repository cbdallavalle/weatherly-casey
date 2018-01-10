import React from 'react';
import Search from './Search.js';
import '../styles/Welcome.css';
import PropTypes from 'prop-types';

export default function Welcome(props) {
  return (
    <header className='Front-page'>
        <h1 id="title"> 
          Bend the Weather 
        </h1>
        <div className='submit-city-form'>
          <Search getWeatherApi = {props.getWeatherApi}/>
        </div>
    </header>
  );
}

Welcome.propTypes = {
  getWeatherApi: PropTypes.func
};