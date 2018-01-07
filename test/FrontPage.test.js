import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import FrontPage from '../lib/FrontPage.js';
import MockData from '../__mocks__/mockData';

describe('FrontPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FrontPage />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render header by default', () => {
    expect(wrapper.find('header').length).toEqual(1);
  });


})