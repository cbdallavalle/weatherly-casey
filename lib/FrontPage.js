import React, { Component } from 'react';
import '../styles/FrontPage.css';

export default function frontPage() {
  return (
    <header className='Front-page'>
      <h1 id="title"> Bend the Weather </h1>
      <label htmlFor="enter-city" ></label>
      <div className='submit-city-form'>
        <input
          placeholder="Enter your city..."
          id="city-input"
        />
        <button className='submit'>Submit</button>
      </div>
    </header>
  )
}