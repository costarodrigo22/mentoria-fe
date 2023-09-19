import styled from "styled-components";

export default styled.button`
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 4px;
  background: #5061FC;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
  color: #fff;
  font-weight: bold;
  transition: background 0.2s ease-in;

  &:hover{
    background: #818efe;
  }

  &:active{
    background: #2033fa;
  }

  &:disabled{
    background: #ccc;
    cursor: default;
  }
`;
