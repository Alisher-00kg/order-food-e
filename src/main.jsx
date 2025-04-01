import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextModal from "./context/ContextModal.jsx";
import { FoodsProvider } from "./context/FoddsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FoodsProvider>
      <ContextModal>
        <App />
      </ContextModal>
    </FoodsProvider>
  </React.StrictMode>
);
