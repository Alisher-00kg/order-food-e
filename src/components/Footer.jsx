import React from "react";
import styled from "styled-components";
export const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <h4>О компании</h4>
        <ul>
          <li>
            <StyledA href="#">Кто делал этот сайт</StyledA>{" "}
          </li>
          <li>
            <StyledA href="">Мы работаем с 10:00 до 22:00</StyledA>
          </li>
          <li>
            <StyledA href="">Отзывы</StyledA>
          </li>
        </ul>
      </FooterSection>
      <FooterSection>
        <h4>Покупателям</h4>
        <ul>
          <li>
            <StyledA href="">Доставка и оплата</StyledA>
          </li>
          <li>
            <StyledA href="">Гарантия</StyledA>
          </li>
          <li>
            <StyledA href="">Как оформить и оплатить заказ</StyledA>
          </li>
        </ul>
      </FooterSection>
      <FooterSection>
        <h4>Контакты</h4>
        <ul>
          <li>
            Email: <StyledA href="Peaksoft@mail.com">Peaksoft@mail.com</StyledA>
          </li>
          <li>По России: 8-995-999-99-99</li>
          <li>г. Москва м. Кожуховская</li>
        </ul>
      </FooterSection>
      <p>© 2025 Все права защищены.</p>
      HELLO WORLD
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background-color: #8a2b06;
  color: #f4f4f4;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  flex: 1;
  margin: 10px;

  h4 {
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  ul {
    margin: 5px 0;
  }
`;
const StyledA = styled.a`
  text-decoration: none;
  color: white;
`;
