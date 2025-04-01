import React, { useState } from "react";
import styled from "styled-components";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setError("Please fill in all fields!");
    }
  };

  return (
    <StyledLoginContainer onSubmit={handleSubmit}>
      <StyledInput
        type="email"
        placeholder="Enter your email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <StyledInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <StyledBtn>Login</StyledBtn>
    </StyledLoginContainer>
  );
};

const StyledLoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 20px;
`;

const StyledInput = styled.input`
  width: 450px;
  height: 40px;
  padding: 0px 10px;
`;

const StyledBtn = styled.button`
  width: 450px;
  height: 40px;
  border: none;
  cursor: pointer;
  color: white;
  background-color: blue;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
`;
