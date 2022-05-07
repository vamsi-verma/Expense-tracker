import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((months) => (
        <ChartBar
          key={months.label}
          value={months.value}
          maxValue={totMax}
          label={months.label}
        />
      ))}
    </div>
  );
};

export default Chart;
