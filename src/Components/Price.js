import React from "react";
import ccxt from "ccxt";

export default class Price extends React.Component {
  state = {
    price: 0
  };

  componentDidMount() {
    this.updatePrice();
    setInterval(this.updatePrice, 20000);
  }

  componentWillUnmount() {
    clearInterval(this.updatePrice);
  }

  componentDidUpdate(prevProps) {
    if (this.props.symbol !== prevProps.symbol) {
      this.updatePrice();
    }
  }

  updatePrice = async () => {
    const exch = this.props.exchange;
    const exchange = new ccxt[exch]({
      proxy: "https://hodlwatch-proxy.herokuapp.com/",
      enableRateLimit: true,
      timeout: 30000
    });
    const ticker = await exchange.fetchTicker(this.props.symbol);
    this.setState({
      price: ticker.last.toFixed(2)
    });
  };

  render() {
    return (
      <div>
        {this.props.exchange.toUpperCase()} {this.props.symbol} price = ${
          this.state.price
        }
      </div>
    );
  }
}
