import React, { Suspense, useEffect } from "react";
import { useExchangeConnector } from "../../class-based-examples/useExchangeConnector";
import AskAndBidTable from "../AskAndBidTable/AskAndBidTable";
import { lazyWithRetry } from "../LazyUtil/LazyRetry";
import LoremIpsum from "../LoremIpsum/LoremIpsum";

const LineChart = lazyWithRetry(() => import("../ReactChart/LineChart"));
const data = [
  {
    value:50,
  },
  {
    value:60,
  },
  {
    value:70,
  }
]
const MainCOntent = () => {
  // const { connected, exchange } = useExchangeConnector("order", "Okex");

  return (
    <div>
      <Suspense fallback="Loading Lazily....">
        <LineChart />
      </Suspense>
      <LoremIpsum title="Non Lazy content" />
      {/* {`${exchange}${connected?" connected":" not conneected"}`} */}
      {/* <AskAndBidTable data={data} /> */}
    </div>
  );
};

export default MainCOntent;
