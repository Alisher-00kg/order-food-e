import React from "react";
import styled from "styled-components";

const IconButton = ({ icon: Icon, children, onClick, style, ...rest }) => {
  return (
    <div>
      <StyledButton onClick={onClick} style={style} {...rest}>
        {Icon && <Icon />}
        {children}
      </StyledButton>
    </div>
  );
};

export default IconButton;
const StyledButton = styled.button`
  width: 99px;
  height: 41px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background-color: #8a2b06;
  color: white;
`;
