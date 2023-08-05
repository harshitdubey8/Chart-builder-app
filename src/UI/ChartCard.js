import React from "react";
import styled from "styled-components";

const ChartCard = (props) => {
  return <CardWrapper data-aos="fade-up">{props.children}</CardWrapper>;
};

const CardWrapper = styled.section`
  background-color: #ffffff;
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */

  display: flex;
  width: 100%;
  height: fit-content;
  border-radius: 12px;
  border: 1px solid #e4e4e4;
  margin: 20px;
  padding: 30px;
`;

export default ChartCard;
