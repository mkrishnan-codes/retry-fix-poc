import { useEffect } from "react";
import { BinanceExchange } from "./BinanceExchange";
import { OkexExchange } from "./OkexExchange";
import { ISocketConnector } from "./types";
type Exchanges = "Okex" | "Binance";
const getConnector = (str: string, exchange: Exchanges) => {
  switch (exchange) {
    case "Binance":
      return new BinanceExchange();
    case "Okex":
      return new OkexExchange();

    default:
      return new OkexExchange();
  }
};
export const useExchangeConnector = (str: string, exchange: Exchanges) => {
  useEffect(() => {
    const ab: ISocketConnector = getConnector(str, exchange);

    return () => {
      ab.disConnect(str);
    };
  }, [str]);
  // handle visibility
  return {
    connected: true,
    exchange,
  };
};
