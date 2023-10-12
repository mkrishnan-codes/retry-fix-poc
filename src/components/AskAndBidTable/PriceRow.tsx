import React from "react";

type Props = {
  data: any;
};

const PriceRow = ({ data }: Props) => {
  return <div>{data.value}</div>;
};

export default PriceRow;
