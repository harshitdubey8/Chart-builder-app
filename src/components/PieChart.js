import React from "react";
import { Pie } from "react-chartjs-2";
import { styled } from "styled-components";

function PieChart({ chartData }) {
  return (
    <PieChartWrapper className="chart-container">
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              // text: "Users Gained between 2016-2020",
            },
          },
        }}
      />
    </PieChartWrapper>
  );
}

const PieChartWrapper = styled.div`
  padding: 30px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;
export default PieChart;
