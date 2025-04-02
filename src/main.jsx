import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextModal from "./context/ContextModal.jsx";
import { FoodsProvider } from "./context/FoodsContext.jsx";
import { LoginProvider } from "./context/LoginContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginProvider>
      <FoodsProvider>
        <ContextModal>
          <App />
        </ContextModal>
      </FoodsProvider>
    </LoginProvider>
  </React.StrictMode>
);
