import React from "react";
import styled from "styled-components";

const ChartCard = (props) => {
  return <CardWrapper>{props.children}</CardWrapper>;
};

const CardWrapper = styled.section`
  background-color: #ffffff;
  display: flex;
  width: 100%;
  flex: 1 0 200px;
  height: 500px;
  border-radius: 12px;
  border: 1px solid #e4e4e4;
  padding: 30px;
  justify-content: center;
  align-items: center;
`;

export default ChartCard;
