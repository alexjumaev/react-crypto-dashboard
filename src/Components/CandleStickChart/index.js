import React from "react";

import Chart from "./Chart";
import { getCandles } from "./api";
import "./style.css";

export default class CandleStickChart extends React.Component {
  componentDidMount() {
    getCandles(this.props.exchange, this.props.symbol).then(data => {
      this.setState({ data });
      console.log(data);
    });
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.symbol !== prevProps.symbol ||
      this.props.exchange !== prevProps.exchange
    ) {
      getCandles(this.props.exchange, this.props.symbol).then(data => {
        this.setState({ data });
        console.log(data);
      });
    }
  }

  render() {
    if (this.state == null) {
      return <div>Loading...</div>;
    }
    return (
      <div className="chart">
        <Chart type={"hybrid"} data={this.state.data} />
      </div>
    );
  }
}
