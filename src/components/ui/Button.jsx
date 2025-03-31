import React from "react";
import styled from "styled-components";
export const Button = ({
  children,
  onClick,
  disabled,
  variant,
  type,
  ...props
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      type={type}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
const StylesButton = (variant) => {
  switch (variant) {
    case "add": {
      return {
        width: "99px",
        height: "41px",
        borderRadius: "20px",
        background: "rgb(138, 43, 6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        color: "white",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontWeight: "700",
        lineHeight: "21px",
        letterSpacing: "3%",
        "&:hover": {
          background: "rgb(126, 42, 10)",
        },
        "&:active": {
          background: "rgb(153, 49, 8)",
        },
        "&:disabled": {
          background: "rgb(202, 198, 196)",
        },
      };
    }
    case "close": {
      return {
        width: "110px",
        height: "44px",
        borderRadius: "20px",
        border: "1px solid rgb(138, 43, 6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        color: "rgb(138, 43, 6)",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "24px",
        letterSpacing: "0px",
        "&:hover": {
          background: "rgb(138, 43, 6)",
          color: "white",
        },
        "&:active": {
          background: "rgb(153, 49, 8)",
        },
        "&:disabled": {
          border: "1px solid rgb(202, 198, 196)",
          color: "#CAC6C4",
        },
      };
    }
  }
};
const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  ${(props) => StylesButton(props.variant)}
`;
