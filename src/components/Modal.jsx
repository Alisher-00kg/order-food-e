import React, { useContext } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { ModalContext } from "../context/ContextModal";

export const Modal = ({ children }) => {
  const { onClose } = useContext(ModalContext);
  return createPortal(
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </Overlay>,
    document.getElementById("modal")
  );
};
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(2px);
`;
const ModalContent = styled.div`
  width: 600px;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 16px;
`;
