import React from "react";
import ccxt from "ccxt";

const proxyAddress = "https://pure-mountain-67034.herokuapp.com/";

export default function SelectExchange(props) {
  const getCandles = async () => {
    const exch = props.exchange;
    const exchange = new ccxt[exch]({
      proxy: proxyAddress,
      enableRateLimit: true,
      timeout: 30000
    });
    const candles = await exchange.fetchOHLCV(props.symbol, "1m");
    console.log(candles);
  };

  const getTrades = async () => {
    const exch = props.exchange;
    const exchange = new ccxt[exch]({
      proxy: proxyAddress,
      enableRateLimit: true,
      timeout: 30000
    });
    const candles = await exchange.fetchTrades(props.symbol);
    console.log(candles);
  };

  const getOrderBook = async () => {
    const exch = props.exchange;
    const exchange = new ccxt[exch]({
      proxy: proxyAddress,
      enableRateLimit: true,
      timeout: 30000
    });
    const candles = await exchange.fetchOrderBook(props.symbol);
    console.log(candles);
  };

  const getTickers = async () => {
    const exch = props.exchange;
    const exchange = new ccxt[exch]({
      proxy: proxyAddress,
      enableRateLimit: true,
      timeout: 30000
    });
    const candles = await exchange.fetchTickers();
    console.log(candles);
  };

  const getMarkets = async () => {
    const exch = props.exchange;
    const exchange = new ccxt[exch]({
      proxy: proxyAddress,
      enableRateLimit: true,
      timeout: 30000
    });
    const candles = await exchange.fetchMarkets();
    console.log(candles);
  };

  const getCurrencies = async () => {
    const exch = props.exchange;
    const exchange = new ccxt[exch]({
      proxy: proxyAddress,
      enableRateLimit: true,
      timeout: 30000
    });
    const candles = await exchange.fetchCurrencies();
    console.log(candles);
  };

  return (
    <div className="select-change">
      <div>FETCH OHLCV to console</div>
      <button onClick={getCandles}>GO</button>
      <div>FETCH Trades to console</div>
      <button onClick={getTrades}>GO</button>
      <div>FETCH OrderBook to console</div>
      <button onClick={getOrderBook}>GO</button>
      <div>FETCH Tickers to console</div>
      <button onClick={getTickers}>GO</button>
      <div>FETCH Markets to console</div>
      <button onClick={getMarkets}>GO</button>
      <div>FETCH Currencies to console</div>
      <button onClick={getCurrencies}>GO</button>
    </div>
  );
}
