import React from 'react'
import ccxt, { binance } from 'ccxt'

export default class BtcPrice extends React.Component {

  state = {
    price: 0
  }

  constructor(props) {
    super(props);
    this.updatePrice(binance);
    setInterval(this.updatePrice, 5000);
  }

  updatePrice = () => (async () => {
    const exchange = new ccxt.binance();
    const ticker = await exchange.fetchTicker("BTC/USDT");
    this.setState({
      price: ticker.close.toFixed(2)
    })
  }) ()

  render() {

    return (
      <div>
        BINANCE BTC/USDT price = ${this.state.price}
      </div>
    )
    };
}