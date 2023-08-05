import { Bar, Scatter } from "react-chartjs-2";
import { styled } from "styled-components";
export const BarChart = ({ chartData }) => {
  let delayed;
  return (
    <BarChartWrapper className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
        data={chartData}
        options={{
          animation: {
            onComplete: () => {
              delayed = true;
            },
            delay: (context) => {
              let delay = 0;
              if (
                context.type === "data" &&
                context.mode === "default" &&
                !delayed
              ) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
              }
              return delay;
            },
          },
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          },
          responsive: true,
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
  transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: scale(1.07);
  }
`;
