import React, { useContext } from "react";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import Footer from "./components/Footer";
import { Login } from "./auth/Login";
import { LoginContext } from "./context/LoginContext";

const App = () => {
  const { isLoggedIn } = useContext(LoginContext);
  return (
    <div>
      {isLoggedIn ? (
        <>
          <Header />
          <MainContent />
          <Footer />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};
export default App;
