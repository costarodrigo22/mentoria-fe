import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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

    &::placeholder {
      color: #bcbcbc;
    }
  }
`;

export const ContainerContactsList = styled.div`
  margin-top: 36px;
`;

export const Header = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-size: 24px;
  }

  a {
    color: #5061fc;
    text-decoration: none;
    border: 2px solid #5061fc;
    padding: 10px;
    border-radius: 4px;
    font-weight: bold;
    transition: 0.3s ease-in-out;
  }

  a:hover {
    background: #5061fc;
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

  strong {
    color: #5061fc;
  }

  .sort-container {
    display: flex;
    align-items: center;

    img {
      margin-left: 9px;
    }
  }
`;
