import styled, { css } from "styled-components";

export default styled.input`
  width: 100%;
  border: none;
  background: #fff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
  height: 52px;
  border-radius: 4px;
  padding: 0 16px;
  outline: none;
  border: 2px solid #fff;
  transition: border-color 0.2s ease-in;

  &:focus {
    border: 2px solid #5061FC;
  }

  ${({ error }) => error && css`
    color: #FC5050;
    border: 2px solid #FC5050 !important;
  `}
`;
