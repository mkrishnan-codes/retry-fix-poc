import { ISocketConnector } from "./types";

export class BaseExchange implements ISocketConnector {
    connect(str: string) {
      console.log("do connect from BaseExchange");
    }
    disConnect(str: string) {
        console.log("do discconnect from BaseExchange");
  
    }
  }