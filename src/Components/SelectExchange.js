import React from "react";
import ccxt from "ccxt";

export default function SelectExchange(props) {
  return (
    <div className="select-change">
      <div>Choose exchange</div>
      <select onChange={props.onChange} value={props.value}>
        {ccxt.exchanges.map(exch => {
          return (
            <option value={exch} key={exch}>
              {exch}
            </option>
          );
        })}
      </select>
    </div>
  );
}
