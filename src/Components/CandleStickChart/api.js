import { timeParse } from "d3-time-format";
import ccxt from "ccxt";

export async function getCandles(exchange, symbol) {
  const exch = new ccxt[exchange]({
    proxy: "https://pure-mountain-67034.herokuapp.com/",
    enableRateLimit: true,
    timeout: 30000
  });

  try {
    const candles = await exch.fetchOHLCV(symbol, "1d");

    let newcandle = [];
    const parseDate = timeParse("%Q");
    candles.map(obj => {
      newcandle.push({
        date: parseDate(obj[0]),
        open: obj[1],
        high: obj[2],
        low: obj[3],
        close: obj[4],
        volume: obj[5],
        divident: "",
        split: "",
        percentChange: undefined,
        absoluteChange: undefined
      });
    });
    newcandle.columns = [
      "date",
      "open",
      "high",
      "low",
      "close",
      "volume",
      "split",
      "dividend",
      "absoluteChange",
      "percentChange"
    ];
    return newcandle;
  } catch (error) {
    let d = {};
    d.date = new Date().getTime();
    return d;
  }
}
