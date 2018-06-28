import React from "react";
import ccxt from "ccxt";

export default function SelectExchange(props) {
  const getCandles = async () => {
    const exch = props.exchange;
    const exchange = new ccxt[exch]();
    const candles = await exchange.fetchOHLCV(props.symbol, "1m");
    console.log(candles);
  };

  return (
    <div className="select-change">
      <div>FETCH OHLCV to console</div>
      <button onClick={getCandles}>GO</button>
    </div>
  );
}
