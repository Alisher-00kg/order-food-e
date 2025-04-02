import React from "react";
import styled from "styled-components";
import { HeaderButton } from "./ui/HeaderButton";

export const Header = () => {
  return (
    <StyledHeader>
      <div>
        <StyledH1>ReactMeals</StyledH1>
      </div>
      <HeaderButton />
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  width: 100%;
  height: 101px;
  position: fixed;
  z-index: 2;
  background-color: rgb(138, 43, 6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 120px;
`;
const StyledH1 = styled.h1`
  color: rgb(255, 255, 255);
  font-size: 38px;
  font-weight: 600;
  line-height: 57px;
  text-align: left;
`;
