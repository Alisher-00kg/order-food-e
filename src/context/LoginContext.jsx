import React, { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <LoginContext.Provider value={{ isLoggedIn, onLogin: handleLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
