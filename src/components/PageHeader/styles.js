import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 40px;

  display: flex;
  flex-direction: column;

  a{
    text-decoration: none;
    display: flex;
    align-items: center;

    span{
      color: #5061FC;
      font-weight: bold;
    }

    img{
      margin-right: 8px;
      rotate: 270deg;
    }
  }

  .title-header{
    font-size: 20px;
    font-weight: bold;
    margin-top: 8px;
  }

`;
