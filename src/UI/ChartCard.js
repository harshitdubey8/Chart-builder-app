import React from "react";
import styled from "styled-components";

const ChartCard = (props) => {
  return <CardWrapper data-aos="fade-up">{props.children}</CardWrapper>;
};

const CardWrapper = styled.section`
  background-color: #ffffff;

  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  border: 1px solid #e4e4e4;
  margin: 20px;
  padding: 30px;
  justify-content: center;
  align-items: center;
`;

export default ChartCard;
