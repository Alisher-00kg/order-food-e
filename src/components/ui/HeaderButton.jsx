import React from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "./Button";
import { Icons } from "../../assets";

export const HeaderButton = () => {
  return (
    <div>
      <StyledContainerBasket>
        <StyledBasketBlock>
          <Icons.Basket />
          <StyledSpan>Your cart</StyledSpan>
        </StyledBasketBlock>
        <StyledBtnBasket>0</StyledBtnBasket>
      </StyledContainerBasket>
    </div>
  );
};
const StyledContainerBasket = styled(Button)`
  width: 249px;
  height: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 30px;
  background-color: rgb(90, 31, 8);
`;
const StyledBasketBlock = styled.div`
  display: flex;
  justify-content: center;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const StyledSpan = styled.span`
  color: rgb(255, 255, 255);
  font-weight: 600;
  line-height: 24px;
`;
const scale = keyframes`
  from {
    transform: scale(0.99);
  }
  to {
    transform: scale(1.2);
  }
`;
const StyledBtnBasket = styled.span`
  width: 51px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: rgb(138, 43, 6);
  color: rgb(255, 255, 255);
  font-family: Manrope;
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
  &:hover {
    animation: ${scale} 0.3s;
  }
`;
