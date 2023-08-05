import React from "react";
import { PolarArea } from "react-chartjs-2";
import { styled } from "styled-components";

function PolarAreaChart({ chartData }) {
  return (
    <StackedChartWrapper className="chart-container">
      <h2 style={{ textAlign: "center" }}>Polar area Chart</h2>
      <PolarArea
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              // text: "Chart.js Bubble Chart",
            },
          },
        }}
      />
    </StackedChartWrapper>
  );
}

const StackedChartWrapper = styled.div`
  padding: 30px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;
export default PolarAreaChart;
