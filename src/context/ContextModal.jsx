import React, { createContext, useState } from "react";

export const ModalContex = createContext();

const ContextModal = ({ children }) => {
  const [openClose, setOpenClose] = useState(false);

  const handleOpen = () => {
    setOpenClose(!openClose);
  };
  const handleClose = () => {
    setOpenClose(!openClose);
  };
  return (
    <ModalContex.Provider
      value={{
        onOpen: handleOpen,
        onClose: handleClose,
        openClose,
      }}
    >
      {children}
    </ModalContex.Provider>
  );
};

export default ContextModal;
