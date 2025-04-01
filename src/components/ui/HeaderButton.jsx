import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "./Button";
import { Icons } from "../../assets";
import { ModalContext } from "../../context/ContextModal";
import { FoodsContext } from "../../context/FoddsContext";
import { Modal } from "../Modal";
import { CardItem } from "../CardItem";

export const HeaderButton = () => {
  const { openClose, onClose, onOpen } = useContext(ModalContext);
  const { foodItems } = useContext(FoodsContext);
  return (
    <>
      <StyledContainerBasket>
        <StyledBasketBlock>
          <Icons.Basket />
          <StyledSpan>Your cart</StyledSpan>
        </StyledBasketBlock>
        <Badge>0</Badge>
      </StyledContainerBasket>
      {openClose && (
        <Modal>
          <ModalContainer>
            {foodItems.length === 0 ? (
              <>
                <StyledH2>Total Amount</StyledH2>
                <DivCost>
                  <StyledSpanAmount>$$</StyledSpanAmount>
                  <Button variant={"close"} onClick={onClose}>
                    Close
                  </Button>
                </DivCost>
              </>
            ) : (
              <div>
                <div>
                  <ul>
                    <CardItem />
                  </ul>
                </div>
              </div>
            )}
          </ModalContainer>
        </Modal>
      )}
    </>
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
const Badge = styled.span`
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
const ModalContainer = styled.div`
  width: 550px;
  height: fit-content;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 16px;
  padding: 30px 20px;
`;
const StyledH2 = styled.h2`
  color: rgb(34, 34, 34);
  font-family: Poppins;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0%;
`;
const StyledSpanAmount = styled.span`
  color: rgb(138, 43, 6);
  font-family: Poppins;
  font-size: 22px;
  font-weight: 600;
  line-height: 33px;
  letter-spacing: 0px;
`;
const DivCost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
