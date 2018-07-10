import React, { Component } from "react";
import ccxt from "ccxt";

import Price from "./Components/Price";
import SelectExchange from "./Components/SelectExchange";
import SelectTicker from "./Components/SelectTicker";
import FetchOHLCV from "./Components/FetchOHLCV";
import CandleStickChart from "./Components/CandleStickChart/index";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exchangeChoosen: "bittrex",
      pairChoosen: "BTC/USDT",
      showChart: false
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

  handleShowChart = () => {
    this.setState(() => {
      return { showChart: !this.state.showChart };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Тестовая сборка по работе с биржами</h1>
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

          <button onClick={this.handleShowChart}>SHOW CHART</button>
          {this.state.showChart ? (
            <CandleStickChart
              exchange={this.state.exchangeChoosen}
              symbol={this.state.pairChoosen}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
