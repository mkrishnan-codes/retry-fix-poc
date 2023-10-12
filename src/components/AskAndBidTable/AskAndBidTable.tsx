import React from "react";
import PriceRow from "./PriceRow";

type Props = {
  data: any[];
};

const AskAndBidTable = ({ data }: Props) => {
  return (
    <div>
      {data.map((item) => (
        <PriceRow data={item} />
      ))}
    </div>
  );
};

export default AskAndBidTable;
