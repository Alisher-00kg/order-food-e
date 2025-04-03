import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Button } from "../components/ui/Button";
import Input from "../components/ui/Input";
import { LoginContext } from "../context/LoginContext";

export const Login = () => {
  const { onLogin } = useContext(LoginContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setError("Please fill in all fields!");
    } else {
      setError("");
      onLogin();
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
      <p
        style={{
          color: "red",
        }}
      >
        {error}
      </p>
      <StyledBtn variant="add">Login</StyledBtn>
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

const StyledInput = styled(Input)`
  width: 450px;
  height: 40px;
  padding: 0px 10px;
`;

const StyledBtn = styled(Button)`
  width: 450px;
  height: 40px;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
`;
