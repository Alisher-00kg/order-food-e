import React from "react";
import styled from "styled-components";

export const Header = () => {
  // const handleButtonClick = () => {
  //   alert("Button clicked!");
  // };

  return (
    <StyledHeader>
      <div>
        <StyledH1>ReactMeals</StyledH1>
      </div>
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  width: 100%;
  height: 101px;
  background-color: rgb(138, 43, 6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 120px 120px;
`;
const StyledH1 = styled.h1`
  color: rgb(255, 255, 255);
  font-family: Poppins;
  font-size: 38px;
  font-weight: 600;
  line-height: 57px;
  letter-spacing: 0%;
  text-align: left;
`;
