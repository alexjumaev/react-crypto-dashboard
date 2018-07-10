import React, { Component } from "react";
import ccxt from "ccxt";

import "./App2.css";

export class App2 extends Component {
  render() {
    return (
      <div className="app">
        <aside>
          <ul className="exchList">
            {ccxt.exchanges.map(exch => <li key={exch}>{exch}</li>)}
          </ul>
        </aside>
      </div>
    );
  }
}

export default App2;
