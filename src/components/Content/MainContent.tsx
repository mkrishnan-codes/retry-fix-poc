import React, { Suspense } from "react";
import { lazyWithRetry } from "../LazyUtil/LazyRetry";
import LoremIpsum from "../LoremIpsum/LoremIpsum";

const LineChart = lazyWithRetry(() => import("../ReactChart/LineChart"));

const MainCOntent = () => {
  return (
    <div>
      <Suspense fallback="Loading Lazily....">
        <LineChart />
      </Suspense>
      <LoremIpsum title="Non Lazy content" />
    </div>
  );
};

export default MainCOntent;
