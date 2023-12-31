import React from "react";
import { Line } from "react-chartjs-2";
import { styled } from "styled-components";
function LineChart({ chartData }) {
  return (
    <LineChartWrapper className="chart-container">
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line
        data={chartData}
        options={{
          animations: {
            radius: {
              duration: 400,
              easing: "linear",
              loop: (context) => context.active,
            },
          },
          hoverRadius: 12,
          hoverBackgroundColor: "yellow",
          interaction: {
            mode: "nearest",
            intersect: false,
            axis: "x",
          },
          plugins: {
            title: {
              display: true,
              // text: "Users Gained between 2016-2020",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </LineChartWrapper>
  );
}

const LineChartWrapper = styled.div`
  padding: 20px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;
export default LineChart;
