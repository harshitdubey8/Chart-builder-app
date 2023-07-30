import React, { useEffect } from "react";
import { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "./PieChart";
import { BarChart } from "./BarChart";
import LineChart from "./LineChart";

import ChartCard from "../UI/ChartCard";
import styled from "styled-components";
import ChartButton from "../UI/ChartButton";
import ChartForm from "./ChartForm";

Chart.register(CategoryScale);
function HomeChart() {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState({});

  const [active, setActive] = useState({
    pieA: false,
    barA: false,
    lineA: false,
  });

  useEffect(() => {
    setChartData({
      labels: data.map((bar) => bar.label),
      datasets: [
        {
          label: " ",
          data: data.map((bar) => bar.data),
          backgroundColor: [
            "rgba(75,192,192,1)",

            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
  }, [data]);

  const chartDataHandler = (event, chartData) => {
    event.preventDefault();
    setData((prev) => [...prev, chartData]);
    setShowBar(true);
    // setActive((prevState) => ({ ...prevState, barA: !showBar }));
  };

  const [showPie, setShowPie] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const [showLine, setShowLine] = useState(false);

  const pieHandler = (e) => {
    e.preventDefault();
    setShowPie((prev) => !prev);
    setActive((prevState) => ({ ...prevState, pieA: !showPie }));
  };

  const lineHandler = (e) => {
    e.preventDefault();
    setShowLine((prev) => !prev);
    setActive((prevState) => ({ ...prevState, lineA: !showLine }));
  };

  const barHandler = (e) => {
    e.preventDefault();
    setShowBar((prev) => !prev);
    setActive((prevState) => ({ ...prevState, barA: !showBar }));
  };

  const allDisplayHandler = (e) => {
    e.preventDefault();

    setShowBar(true);
    setShowLine(true);
    setShowPie(true);
  };

  return (
    <HomeWrapper>
      <ChartDisplay>
        <ButtonSection>
          <ChartButton
            title={"Pie"}
            onClick={pieHandler}
            isActive={active.pieA}
          />
          <ChartButton
            title={"Bar"}
            onClick={barHandler}
            isActive={active.barA}
          />
          <ChartButton
            title={"Line"}
            onClick={lineHandler}
            isActive={active.lineA}
          />
          <ChartButton title={"Display All"} onClick={allDisplayHandler} />
        </ButtonSection>

        <ChartSection>
          {!showPie && !showBar && !showLine && (
            <InfoText>
              Fill the form to see Charts or Tap on the above Buttons
            </InfoText>
          )}

          {showPie && (
            <ChartCard>
              <PieChart chartData={chartData} />
            </ChartCard>
          )}
          {showBar && (
            <ChartCard>
              <BarChart chartData={chartData} />
            </ChartCard>
          )}
          {showLine && (
            <ChartCard>
              <LineChart chartData={chartData} />
            </ChartCard>
          )}
        </ChartSection>
      </ChartDisplay>
      <FormDisplay>
        <FormHeader> Chart Form </FormHeader>
        <ChartForm chartDataHandler={chartDataHandler} />
      </FormDisplay>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.section`
  display: flex;
`;
const ChartSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const ButtonSection = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

const ChartDisplay = styled.div`
  background-color: #f6f4eb;
  overflow-y: scroll;
  height: 100%;
  width: 50%;
`;
const FormDisplay = styled.div`
  width: 50%;
  background-color: #19a7ce;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const FormHeader = styled.h1`
  display: flex;
  color: white;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

  margin-top: 20px;
`;

const InfoText = styled.h1`
  color: black;
  font-size: 20px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;
export default HomeChart;
