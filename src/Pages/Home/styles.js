import styled from "styled-components";

export const InputSerachContainer = styled.div`
  width: 100%;
  margin-top: 48px;

  input {
    width: 100%;
    padding: 15px 16px;
    background: #fff;
    outline: 0;
    border-radius: 25px;
    border: none;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);

    &::placeholder{
      color: #bcbcbc;
    }
  }
`;
