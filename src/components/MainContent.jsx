import React, { useContext } from "react";
import styled from "styled-components";
import { BannerImg } from "../assets";
import { CardItem } from "./CardItem";
import { FoodsContext } from "../context/FoodsContext";
export const MainContent = () => {
  const { state } = useContext(FoodsContext);
  return (
    <StyledMain>
      <StyledImg src={BannerImg} alt="banner" />
      <Description>
        <StyledH2>Delicious Food, Delivered To You</StyledH2>
        <StyledP1>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </StyledP1>
        <StyledP1>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by  experienced chefs!
        </StyledP1>
      </Description>
      <StyledUl>
        {state.menuItems?.map((item) => (
          <CardItem key={item.id} {...item} />
        ))}
      </StyledUl>
    </StyledMain>
  );
};
const StyledMain = styled.main`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(63, 63, 63);
`;
const StyledImg = styled.img`
  width: 100%;
  height: 432px;
`;
const Description = styled.div`
  width: 854px;
  height: 270px;
  border-radius: 16px;
  box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.3);
  background: rgb(56, 56, 56);
  position: absolute;
  top: 20%;
  left: 20%;
  right: 20%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 120px;
`;
const StyledH2 = styled.h2`
  color: rgb(255, 255, 255);
  font-size: 36px;
  font-weight: 600;
  line-height: 54px;
  text-align: left;
  text-align: center;
`;
const StyledP1 = styled.p`
  color: rgb(255, 255, 255);
  line-height: 24px;
  text-align: center;
`;
const StyledUl = styled.ul`
  width: fit-content;
  height: 564px;
  border-radius: 16px;
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  margin-bottom: 100px;
  padding: 0px 40px;
`;
