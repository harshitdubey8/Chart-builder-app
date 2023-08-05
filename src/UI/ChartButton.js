import React from "react";
import styled from "styled-components";

const ChartButton = (props) => {
  return (
    <Button data-aos="fade-down" onClick={props.onClick} {...props}>
      {props.title}
    </Button>
  );
};

const Button = styled.button`
  /* background-color: #146c94; */
  border-radius: 8px;
  border-style: none;
  width: 200px;
  box-sizing: border-box;

  cursor: pointer;
  display: inline-block;

  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 10px 10px 10px 10px;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  /* &:hover,
  &:focus {
    background-color: #ef6262;
  } */
  ${(props) =>
    props.type === "submit" &&
    `
     width: 200px;
     border-radius : 10px;
     background-color : black !important;
     color: #ffffff !important;
     
  `}
`;

export default ChartButton;
