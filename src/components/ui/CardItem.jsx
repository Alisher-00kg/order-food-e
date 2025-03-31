import React from "react";
import styled from "styled-components";
import Input from "./Input";

export const CardItem = ({ title, structure, price, amount }) => {
  return (
    <StyledLi>
      <FoodContainer>
        <TitleOfFood>{title}</TitleOfFood>
        <Structure>{structure}</Structure>
        <Cost>${price}</Cost>
      </FoodContainer>
      <div>
        <StyledAmount>
          Amount
          <StyledInputNumber type="number" value={amount} />
        </StyledAmount>
        <button>+add</button>
      </div>
    </StyledLi>
  );
};
const StyledLi = styled.li`
  width: 100%;
  height: 148px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(214, 214, 214);
  /* box-shadow: 0px 6px 12px 0px rgba(36, 36, 36, 0.08); */
`;
const FoodContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2px;
`;
const TitleOfFood = styled.p`
  color: rgb(34, 34, 34);
  font-family: Poppins;
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
`;
const Structure = styled.p`
  color: rgb(34, 34, 34);
  font-family: Poppins;
  font-style: italic;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
`;
const Cost = styled.p`
  color: rgb(173, 85, 2);
  font-family: Poppins;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: left;
`;
const StyledAmount = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: rgb(34, 34, 34);
  font-family: Poppins;
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
`;
const StyledInputNumber = styled(Input)`
  width: 60px;
  height: 32px;
  cursor: pointer;
  color: rgb(34, 34, 34);
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
`;
