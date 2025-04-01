import React from "react";
import styled from "styled-components";
import Input from "./ui/Input";
import { Icons } from "../assets";
import { Button } from "./ui/Button";

export const Card = ({ id, title, structure, price, amount }) => {
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
          <StyledInputNumber type="number" value={amount} min={0} max={5} />
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
  width: 1039px;
  height: 148px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(214, 214, 214);
  margin-left: 100px;
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
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  text-align: left;
`;
const Structure = styled.p`
  color: rgb(34, 34, 34);
  font-style: italic;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
`;
const Cost = styled.p`
  color: rgb(173, 85, 2);
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  text-align: left;
`;
const AmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
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
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  text-align: left;
`;
const StyledInputNumber = styled(Input)`
  width: 60px;
  height: 32px;
  cursor: pointer;
  color: rgb(34, 34, 34);
  font-size: 16px;
  line-height: 24px;
  text-align: left;
`;
