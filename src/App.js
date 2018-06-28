import React, { Component } from "react";
import ccxt from "ccxt";

// import Ticker from "./Components/ListExchanges";
import Price from "./Components/Price";
import SelectExchange from "./Components/SelectExchange";
import SelectTicker from "./Components/SelectTicker";
import FetchOHLCV from "./Components/FetchOHLCV";
import CandleStickChart from "./Components/CandleStickChart";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exchangeChoosen: "binance",
      pairChoosen: "BTC/USDT"
    };
  }

  handleExchange = event => {
    this.setState({
      exchangeChoosen: event.target.value,
      pairChoosen: "BTC/USDT"
    });
  };

  handlePair = event => {
    this.setState({
      pairChoosen: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Библиотека CCXT</h1>
          <h1 className="App-title">
            Колличество поддерживаемых бирж - {ccxt.exchanges.length}
          </h1>
        </header>
        <div>
          <SelectExchange
            onChange={this.handleExchange}
            value={this.state.exchangeChoosen}
          />
          <SelectTicker
            exchange={this.state.exchangeChoosen}
            onChange={this.handlePair}
            value={this.state.pairChoosen}
          />
          <Price
            exchange={this.state.exchangeChoosen}
            symbol={this.state.pairChoosen}
          />
          <FetchOHLCV
            exchange={this.state.exchangeChoosen}
            symbol={this.state.pairChoosen}
          />
          {/* <CandleStickChart
            exchange={this.state.exchangeChoosen}
            symbol={this.state.pairChoosen}
          /> */}
        </div>
      </div>
    );
  }
}

export default App;
