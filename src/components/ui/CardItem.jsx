import React from "react";
import styled from "styled-components";
import Input from "./Input";
import { Icons } from "../../assets";
import { Button } from "./Button";

export const CardItem = ({ id, title, structure, price, amount }) => {
  return (
    <StyledLi>
      <FoodContainer>
        <TitleOfFood>{title}</TitleOfFood>
        <Structure>{structure}</Structure>
        <Cost>${price}</Cost>
      </FoodContainer>
      <AmountContainer>
        <StyledAmount>
          <StyledLabel htmlFor={id}>Amount</StyledLabel>
          <StyledInputNumber type="number" value={amount} min={1} max={5} />
        </StyledAmount>
        <Button variant={"add"}>
          <Icons.PlusWhite />
          Add
        </Button>
      </AmountContainer>
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
const AmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
const StyledAmount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const StyledLabel = styled.label`
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
