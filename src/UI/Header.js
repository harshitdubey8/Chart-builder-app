import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <Title> Chart App</Title>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  background-color: #001c30;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-weight: 300;
  color: white;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

export default Header;
