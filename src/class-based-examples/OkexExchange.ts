import { BaseExchange } from "./BaseExchange";

export class OkexExchange extends BaseExchange {
  connect(str: string): void {
    super.connect(str);
    console.log("conect from ExchangeA class");
  }
}
