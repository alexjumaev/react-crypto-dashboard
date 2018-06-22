import React from 'react'
import ccxt from 'ccxt'

import './ListExchanges.css'

export default class Ticker extends React.Component {

  render() {
    return (
      <div className="List" >
        Колличество поддерживаемых бирж - {ccxt.exchanges.length}
      </div>
    );
  }
}
