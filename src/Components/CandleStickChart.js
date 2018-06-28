import React from "react";
import ccxt from "ccxt";

import { ChartCanvas, Chart } from "react-stockcharts";

class CandleStickChartWithCHMousePointer extends React.Component {
  state = {
    candles: []
  };

  componentDidMount() {
    this.getOHLCV();
  }

  getOHLCV = async () => {
    const exch = this.props.exchange;
    const exchange = new ccxt[exch]();
    const candles = await exchange.fetchOHLCV(this.props.symbol, "1m");
    this.setState({
      candles
    });
  };

  render() {
    const { candles } = this.state;

    if (this.state.candles == []) {
      return <div>Loading...</div>;
    }

    return <ChartCanvas height={400} type={"hybrid"} data={candles} />;
  }
}

export default CandleStickChartWithCHMousePointer;
