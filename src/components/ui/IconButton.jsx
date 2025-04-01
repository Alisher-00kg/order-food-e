import React from "react";
import styled from "styled-components";

const IconButton = ({
  icon: Icon,
  children,
  onClick,
  style,
  variant,
  ...rest
}) => {
  return (
    <div>
      <StyledButton onClick={onClick} style={style} variant={variant} {...rest}>
        {Icon && <Icon />}
        {children}
      </StyledButton>
    </div>
  );
};

export default IconButton;

const StylesButton = (variant) => {
  switch (variant) {
    case "add": {
      return {
        width: "99px",
        height: "41px",
        background: "rgb(138, 43, 6)",
        color: "white",
        fontSize: "14px",
        fontWeight: "700",
        lineHeight: "21px",
        letterSpacing: "3%",
        borderRadius: "20px",
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
        width: "48px",
        height: "36px",
        border: "1px solid rgb(138, 43, 6)",
        background: "transparent",
        color: "rgb(138, 43, 6)",
        lineHeight: "24px",
        borderRadius: "8px",
        "&:hover": {
          background: "rgb(138, 43, 6)",
          color: "white",
          "& path": {
            stroke: "#fff",
          },
        },
        "&:active": {
          background: "rgb(153, 49, 8)",
        },
        "&:disabled": {
          border: "1px solid rgb(202, 198, 196)",
          color: "#CAC6C4",
          background: "transparent",
        },
      };
    }
  }
};
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  background-color: #8a2b06;
  color: white;
  ${(props) => StylesButton(props.variant)}
`;
