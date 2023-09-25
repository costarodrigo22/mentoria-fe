import styled, { css } from "styled-components";

export const Container = styled.div`
  & + &{
    margin-top: 16px;
  }

  ${({ error }) => error && css`

  small{
      color: #FC5050;
      font-size: 12px;
    }
  `}
`;
