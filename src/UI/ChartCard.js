import React from "react";
import styled from "styled-components";

const ChartCard = (props) => {
  return <CardWrapper data-aos="fade-up">{props.children}</CardWrapper>;
};

const CardWrapper = styled.section`
  background-color: #e8f6ef;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  width: fit-content;
  height: fit-content;
  border-radius: 30px;
  margin: 20px;
  padding: 30px;
`;

export default ChartCard;
