import React, { Component } from 'react';
import './App.css';
import Ticker from './Components/ListExchanges'
import BtcPrice from './Components/BtcPrice'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><BtcPrice/></h1>
        </header>
        <Ticker/>
      </div>
    );
  }
}

export default App;
