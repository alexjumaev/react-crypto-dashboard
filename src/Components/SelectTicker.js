import React from "react";
import ccxt from "ccxt";

import "./style.css";

export default class SelectTicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pairList: []
    };
  }

  componentDidMount() {
    this.getPairs();
  }

  componentDidUpdate(prevProps) {
    if (this.props.exchange !== prevProps.exchange) {
      this.getPairs();
    }
  }

  getPairs = async () => {
    const exch = this.props.exchange;
    const exchange = new ccxt[exch]({
      proxy: "https://hodlwatch-proxy.herokuapp.com/",
      enableRateLimit: true,
      timeout: 30000
    });
    const tickers = await exchange.loadMarkets();
    const pairs = Object.keys(tickers);
    this.setState({
      pairList: pairs
    });
  };

  render() {
    return (
      <div className="select-ticker">
        <header>Кол-во торгуемых пар: {this.state.pairList.length} </header>
        <div>
          <select
            style={{ width: 150 }}
            onChange={this.props.onChange}
            value={this.props.value}
          >
            {this.state.pairList.map(pair => {
              return <option key={pair}>{pair}</option>;
            })}
          </select>
        </div>
      </div>
    );
  }
}
