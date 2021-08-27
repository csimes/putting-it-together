import React, { Component } from 'react';
import './App.css';
import { Checking } from './checking';
import { Header } from "./common"

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header brand="Komodo Banking" />
        <Checking />
      </div>
    );
  }
}

export default App;
