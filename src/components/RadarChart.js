import React from "react";
import { Radar } from "react-chartjs-2";
import { styled } from "styled-components";

function RadarChart({ chartData }) {
  return (
    <RadarChartWrapper className="chart-container">
      <h2 style={{ textAlign: "center" }}>Radar Chart</h2>
      <Radar
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
    </RadarChartWrapper>
  );
}

const RadarChartWrapper = styled.div`
  padding: 30px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;
export default RadarChart;
