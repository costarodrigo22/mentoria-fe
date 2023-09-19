import styled from "styled-components";

export const Container = styled.div`
  margin-top: 36px;
`;

export const Header = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  strong{
    font-size: 24px;
  }

  a {
    color: #5061FC;
    text-decoration: none;
    border: 2px solid #5061FC;
    padding: 10px;
    border-radius: 4px;
    font-weight: bold;
    transition: 0.3s ease-in-out;
  }

  a:hover{
    background: #5061FC;
    color: #fff;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1.5px;
  opacity: 0.2;
  background: #bcbcbc;
  margin-top: 20px;
  border-radius: 5px;
`;

export const HeaderCard = styled.div`
  width: 100%;
  margin-top: 18px;

  strong{
    color: #5061FC;
  }

  .sort-container {
    display: flex;
    align-items: center;

    img{
      margin-left: 9px;
    }
  }
`;
