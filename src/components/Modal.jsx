import React from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";

const massive = [
  { title: "burger", price: 40 },
  { title: "burger", price: 40 },
  { title: "burger", price: 40 },
  { title: "burger", price: 40 },
  { title: "burger", price: 40 },
  { title: "burger", price: 40 },
  { title: "burger", price: 40 },
  { title: "burger", price: 40 },

  { title: "burger", price: 40 },
  { title: "burger", price: 40 },
];

const Modal = () => {
  return createPortal(
    <BackDropDiv>
      <UlStyled>
        <StyledContentDiv>
          {massive.map((item, index) => {
            return (
              <Listyled key={index}>
                <FoodFirstItem>
                  <h1>{item.title}</h1>
                  <StyledPrice>
                    <span>${item.price}</span>
                    <button>x1</button>
                  </StyledPrice>
                </FoodFirstItem>
                <FoodbuttDiv>
                  <button>-</button>
                  <button>+</button>
                </FoodbuttDiv>
              </Listyled>
            );
          })}
        </StyledContentDiv>
        <StyledDiv>
          <h1>Total Ammount</h1>
          <h1>200</h1>
        </StyledDiv>
      </UlStyled>
    </BackDropDiv>,

    document.getElementById("modal")
  );
};

export default Modal;

const BackDropDiv = styled.div``;

const UlStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 20px;
  padding: 100px;
  height: 100vh;

  background: rgb(176, 176, 176);
`;

const Listyled = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  margin-top: 28px;
  gap: 240px;
  padding-bottom: 10px;
`;

const FoodFirstItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const FoodbuttDiv = styled.div`
  display: flex;
  gap: 30px;
`;

const StyledPrice = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledContentDiv = styled.div`
  width: 500px;
  padding: 30px;
  overflow-y: scroll;
  padding-right: 20px;

  height: 560px;
  background-color: white;
  font-size: 20px;
`;

const StyledDiv = styled.div`
  display: flex;
  background-color: white;
  width: 500px;
  padding: 20px;
  gap: 170px;
`;
