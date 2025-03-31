import React from "react";
import Modal from "./components/Modal";
import { useContext } from "react";
import { ModalContex } from "./context/ContextModal";

const App = () => {
  const { openClose, setOpenClose } = useContext(ModalContex);
  return (
    <div>
      {openClose ? (
        <Modal></Modal>
      ) : (
        <button onClick={() => setOpenClose(!openClose)}>click</button>
      )}
    </div>
  );
};

export default App;
