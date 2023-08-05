import React from "react";
import { Doughnut } from "react-chartjs-2";
import { styled } from "styled-components";

function DougnutChart({ chartData }) {
  return (
    <DougnutChartWrapper className="chart-container">
      <h2 style={{ textAlign: "center" }}>Doughnut Chart</h2>
      <Doughnut
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
    </DougnutChartWrapper>
  );
}

const DougnutChartWrapper = styled.div`
  padding: 30px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;
export default DougnutChart;
