import React from 'react';
import '@babel/polyfill';
import {hot} from 'react-hot-loader';

const Warning =   React.lazy(() => require('./Warning'))

class App extends React.Component {
  render() {
    return (
    <>
      <h1>Hello Hello</h1>
      <React.Suspense fallback={null}>
        <Warning />
      </React.Suspense>
    </>)
  }
}

export default hot(module)(App);