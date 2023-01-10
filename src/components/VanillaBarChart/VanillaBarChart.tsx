import React, { useMemo } from "react";
import "./style.css";

type Props = { values: number[]; maxLen: number; title?: string };

const getMax = (values: number[]) => Math.max(...values);

const randomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const VanillaBarChart = ({ values, maxLen, title = "Chart Data" }: Props) => {
  const max = useMemo(() => getMax(values), [values]);
  return (
    <div className="chart">
      <p>{title}</p>

      {maxLen &&
        values &&
        values.map((val) => {
          let stl = {
            width: (val * maxLen) / max,
            height: 30,
            background: randomColor(),
          };
          return (
            <div className="chart-wrapper">
              <div className="chart-core">
                <div
                  className="chart-elem"
                  key={val}
                  style={stl}
                  title={val.toLocaleString()}
                ></div>
                <div className="chart-txt">{val}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default VanillaBarChart;
