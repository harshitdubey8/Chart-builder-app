import { Bar } from "react-chartjs-2";
import { styled } from "styled-components";
export const BarChart = ({ chartData }) => {
  return (
    <BarChartWrapper className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
        data={chartData}
        options={{
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
    </BarChartWrapper>
  );
};

const BarChartWrapper = styled.div`
  padding: 30px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;
