/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom'

import { render } from '@testing-library/react';
import App from './App';
import Login from './Login';

it("renders App",()=>{
  const div=document.createElement("div");
  ReactDOM.render(<App></App>,div);
})

it("renders login",()=>{
  const div=document.createElement("div");
  ReactDOM.render(<Login></Login>,div);
})
