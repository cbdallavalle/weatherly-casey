import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import Welcome from '../lib/Welcome.js';
import MockData from '../__mocks__/mockData';

describe('Welcome', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Welcome />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render header by default', () => {
    expect(wrapper.find('header').length).toEqual(1);
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('Search').length).toEqual(1);
  });
})