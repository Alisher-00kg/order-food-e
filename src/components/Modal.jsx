import React, { useContext } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { Button } from "./ui/Button";
import { ModalContex } from "../context/ContextModal";
import { massive } from "../utils/constants/constants";

const Modal = ({ children }) => {
  const { onClose } = useContext(ModalContex);
  return createPortal(
    <BackdropDiv onClick={onClose}>
      <StyledContent onClick={(e) => e.stopPropagation()}>
        <StyledUl>
          {massive.map((item, i) => {
            return (
              <StyledLI key={i}>
                <div>
                  <h3>{item.title}</h3>
                  <StyledPriceBtn>
                    <span>$34</span>
                    <button>x1</button>
                  </StyledPriceBtn>
                </div>
                <StyledPlusMinusDiv>
                  <Button variant={"close"}>-</Button>
                  <Button variant={"open"}>+</Button>
                </StyledPlusMinusDiv>
              </StyledLI>
            );
          })}
        </StyledUl>
        <StyledTotalAmmount>
          <p>Total Ammount</p>
          <span>400$</span>
        </StyledTotalAmmount>
        <StyledCloseButtons>
          <Button variant={"close"} onClick={onClose}>
            close
          </Button>
          <Button variant={"add"} onClick={onClose}>
            order
          </Button>
        </StyledCloseButtons>
      </StyledContent>
    </BackdropDiv>,
    document.getElementById("modal")
  );
};

export default Modal;

const BackdropDiv = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(176, 176, 176);
  backdrop-filter: blur(5px);
`;

const StyledContent = styled.div`
  height: 437px;
  width: 670px;
  background-color: white;
  padding: 40px;
`;

const StyledUl = styled.ul`
  width: 570px;
  height: 200px;
  overflow-y: auto;
`;
const StyledLI = styled.li`
  display: flex;
  width: 530px;
  height: 100px;
  border-bottom: 1px solid gray;
  align-items: center;
  justify-content: space-between;
`;

const StyledPriceBtn = styled.div`
  display: flex;
  gap: 47px;
  padding-top: 16px;
  align-items: center;
`;

const StyledTotalAmmount = styled.div`
  display: flex;
  padding-top: 29px;
  gap: 425px;
`;

const StyledCloseButtons = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-top: 24px;
  margin-right: 19px;
  gap: 16px;
  align-items: center;
`;

const StyledPlusMinusDiv = styled.div`
  display: flex;
  gap: 15px;
`;
