import React from 'react';
import '@babel/polyfill';
import {hot} from 'react-hot-loader';

class App extends React.Component {
  render() {
    return <h1>Hello Hello</h1>
  }
}

export default hot(module)(App);