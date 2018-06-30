import React from "react";

import Chart from "./Chart";
import { getCandles } from "./api";
import "./style.css";

export default class CandleStickChart extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      loading: true
    };

    this.interval = null;
  }

  fetchData = () => {
    this.interval = setInterval(() => {
      getCandles(this.props.exchange, this.props.symbol).then(data => {
        this.setState({ data: [...data], loading: false });
      });
    }, 5000);
  };

  componentDidMount() {
    this.fetchData();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.interval = null;
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.symbol !== prevProps.symbol ||
      this.props.exchange !== prevProps.exchange
    ) {
      this.setState({ loading: true });
      getCandles(this.props.exchange, this.props.symbol).then(data => {
        this.setState({ data, loading: false });
      });
    }
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="chart">
        <Chart type={"hybrid"} data={this.state.data} />
      </div>
    );
  }
}
