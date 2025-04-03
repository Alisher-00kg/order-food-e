import React, { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "./Button";
import { Icons } from "../../assets";
import { ModalContext } from "../../context/ContextModal";
import { FoodsContext } from "../../context/FoodsContext";
import { Modal } from "../Modal";
import { OrderItem } from "./OrderItem";

export const HeaderButton = () => {
  const { openClose, onClose, onOpen } = useContext(ModalContext);
  const { dispatch, state, total } = useContext(FoodsContext);
  const [count, setCount] = useState(0);
  const [bounce, setBounce] = useState("");

  const totalCount = state.newOrderMassive.reduce((acc, meal) => {
    return acc + meal.amount;
  }, 0);
  console.log(state.newOrderMassive);

  useEffect(() => {
    setBounce("bounce");
    setCount(totalCount);
    return () => {
      setTimeout(() => setBounce(""), 300);
    };
  }, [total]);
  return (
    <>
      <StyledContainerBasket
        onClick={() => onOpen(!openClose)}
        className={bounce}
      >
        <StyledBasketBlock>
          <Icons.Basket />
          <StyledSpan>Your cart</StyledSpan>
        </StyledBasketBlock>
        <Badge>{count}</Badge>
      </StyledContainerBasket>
      {openClose && (
        <Modal>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            {count === 0 ? (
              <>
                <StyledH2>Total Amount</StyledH2>
                <DivCost>
                  <StyledSpanAmount>${total.toFixed(2)}</StyledSpanAmount>
                  <Button
                    variant={"close"}
                    onClick={() => {
                      onClose();
                      dispatch({ type: "clear_cart" });
                    }}
                  >
                    Close
                  </Button>
                </DivCost>
              </>
            ) : (
              <SecondMoadl>
                <StyledUlContainer>
                  <StyledUl>
                    {state.newOrderMassive.map((item) => (
                      <OrderItem key={item.id} {...item} item={item} />
                    ))}
                  </StyledUl>
                </StyledUlContainer>
                <ContainerofCost>
                  <>
                    <StyledH2>Total Amount</StyledH2>
                  </>
                  <DivCost2>
                    <StyledSpanAmount>{total.toFixed(2)}</StyledSpanAmount>
                    <DivOrderingClosing>
                      <Button variant={"close"} onClick={onClose}>
                        Close
                      </Button>
                      <Button
                        variant={"add"}
                        onClick={() => dispatch({ type: "order" })}
                      >
                        Order
                      </Button>
                    </DivOrderingClosing>
                  </DivCost2>
                </ContainerofCost>
              </SecondMoadl>
            )}
          </ModalContainer>
        </Modal>
      )}
    </>
  );
};
const heartbeat = keyframes`
  0% { transform: scale(1); }
  25% { transform: scale(1.1); }
  50% { transform: scale(0.9); }
  100% { transform: scale(1); }
`;
const StyledContainerBasket = styled(Button)`
  width: 249px;
  height: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 30px;
  background-color: rgb(90, 31, 8);
  &.bounce {
    animation: ${heartbeat} 0.5s ease;
  }
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
  padding: 30px 10px;
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
const SecondMoadl = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledUlContainer = styled.div`
  width: 540px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledUl = styled.ul`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;
const ContainerofCost = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const DivCost2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 24px;
`;
const DivOrderingClosing = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-right: -10px;
`;
