import styled from "styled-components";

const Input = ({ type, onChange, style, placeholder, ...rest }) => {
  return (
    <StyledInput
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      style={style}
      {...rest}
    />
  );
};

export default Input;

const StyledInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 10px;
  outline: none;
`;
