export interface ISocketConnector {
  connect: (str: string) => void;
  disConnect: (str: string) => void;
}
