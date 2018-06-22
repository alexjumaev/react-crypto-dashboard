import React from 'react'
import ccxt from 'ccxt'

export default class BtcPrice extends React.Component {

  state = {
    price: 0
  }

  constructor(props) {
    super(props);
    this.updatePrice('BTC/USDT');
    setInterval(this.updatePrice, 20000);
  }

  updatePrice = async (symbol) => {
    const exchange = new ccxt.binance();
    const ticker = await exchange.fetchTicker(symbol);
    this.setState({
      price: ticker.close.toFixed(2)
    })
  };

  render() {

    return (
      <div>
        BINANCE BTC/USDT price = ${this.state.price}
      </div>
    )
    };
}