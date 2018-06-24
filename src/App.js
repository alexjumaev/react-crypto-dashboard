import React, { Component } from "react";
import "./App.css";
import Ticker from "./Components/ListExchanges";
import Price from "./Components/Price";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <Price exchange={"bittrex"} symbol={"BTC/USDT"} />
            <Price exchange={"binance"} symbol={"BTC/USDT"} />
            <Price exchange={"hitbtc"} symbol={"BTC/USDT"} />
            <Price exchange={"kraken"} symbol={"BTC/USD"} />
            <Price exchange={"ccex"} symbol={"BTC/USD"} />
          </h1>
        </header>
        <Ticker />
      </div>
    );
  }
}

export default App;
