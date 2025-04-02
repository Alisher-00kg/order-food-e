import React, { createContext, useState } from "react";

export const ModalContext = createContext();

const ContextModal = ({ children }) => {
  const [openClose, setOpenClose] = useState(false);
  const handleOpen = () => {
    setOpenClose(true);
  };

  const handleClose = () => {
    setOpenClose(false);
  };
  // const handleOpen = () => {
  //   setOpenClose(!openClose);
  // };
  // const handleClose = () => {
  //   setOpenClose(!openClose);
  // };
  return (
    <ModalContext.Provider
      value={{
        onOpen: handleOpen,
        onClose: handleClose,
        openClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ContextModal;
