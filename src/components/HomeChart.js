import React, { useEffect } from "react";
import { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "./PieChart";
import { BarChart } from "./BarChart";
import LineChart from "./LineChart";

import ChartCard from "../ui/ChartCard";
import styled from "styled-components";

import ChartForm from "./ChartForm";

import LineSegmentChart from "./Dougnut";
import PolarAreaChart from "./PolarAreaChart";
import RadarChart from "./RadarChart";
import ScatterChart from "./ScatterChart";

Chart.register(CategoryScale);
function HomeChart() {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState({});

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setChartData({
      labels: data.map((bar) => bar.label),
      datasets: [
        {
          label: "",
          data: data.map((bar) => bar.data),
          backgroundColor: [
            "rgba(55, 25, 247, 0.5)",
            "rgba(124, 218, 148, 0.5)",
            "rgba(244, 132, 0, 0.5)",
            "rgba(7, 124, 255, 1)",
          ],
          borderColor: [
            "rgba(55, 25, 247, 1)",
            "rgba(124, 218, 148, 1)",
            "rgba(244, 132, 0, 1)",
            "rgba(163, 163, 163, 1)",
          ],
          borderWidth: 2,
        },
      ],
    });
    setLoaded(true);
  }, [data]);

  const chartDataHandler = (event, chartData) => {
    event.preventDefault();
    setData((prev) => [...prev, chartData]);
  };

  return (
    <HomeWrapper>
      <FormDisplay>
        <FormHeader>Chart Builder </FormHeader>
        <ChartForm chartDataHandler={chartDataHandler} />
      </FormDisplay>
      <ChartDisplay>
        {loaded && (
          <ChartSection>
            <ChartCard>
              <PieChart chartData={chartData} />
            </ChartCard>

            <ChartCard>
              <BarChart chartData={chartData} />
            </ChartCard>

            <ChartCard>
              <LineChart chartData={chartData} />
            </ChartCard>

            <ChartCard>
              <LineSegmentChart chartData={chartData} />
            </ChartCard>
            <ChartCard>
              <PolarAreaChart chartData={chartData} />
            </ChartCard>
            <ChartCard>
              <RadarChart chartData={chartData} />
            </ChartCard>
          </ChartSection>
        )}
      </ChartDisplay>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const ChartSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  overflow-y: scroll;
  border-radius: 16px;
  gap: 20px;
  background-color: #f6f6f6;
  height: 100vh;
  margin-top: 25px;
  margin-right: 20px;
`;

const ChartDisplay = styled.div`
  background-color: #ffffff;
  overflow-y: auto;
  height: fit-content;
  width: 80%;
`;
const FormDisplay = styled.div`
  background-color: #ffffff;
  width: 20%;
  /* background-color: #19a7ce; */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormHeader = styled.h1`
  color: black;

  margin-top: 20px;
`;

export default HomeChart;
