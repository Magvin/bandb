import React, { Component } from 'react';
import './App.css';

import Posts from './components/Posts/Posts'
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Posts />
      </div>
    );
  }
}

export default App;
