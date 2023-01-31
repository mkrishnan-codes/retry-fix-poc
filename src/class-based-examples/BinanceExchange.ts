import { BaseExchange } from "./BaseExchange";
import { ISocketConnector } from "./types";

export class BinanceExchange extends BaseExchange {
  connect(str: string): void {
    super.connect(str);
    console.log("conect from BinanceExchange class");
  }
}
