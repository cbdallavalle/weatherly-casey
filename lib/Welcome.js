import React, { Component } from 'react';
import trie from './AutoComplete.js';
import Search from './Search.js';
import '../styles/FrontPage.css';

export default function Welcome(props) {
  return (
    <header className='Front-page'>
        <h1 id="title"> Bend the Weather </h1>
        <div className='submit-city-form'>
          <Search getWeatherApi = {props.getWeatherApi}/>
        </div>
    </header>
  )
}