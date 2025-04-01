import React, { createContext, useState } from "react";

export const ModalContex = createContext();

const ContextModal = ({ children }) => {
  const [openClose, setOpenClose] = useState(false);

  return (
    <ModalContex.Provider value={{ openClose, setOpenClose }}>
      {children}
    </ModalContex.Provider>
  );
};

export default ContextModal;
