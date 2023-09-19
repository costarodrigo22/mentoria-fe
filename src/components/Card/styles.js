import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 8px;
  background: #fff;
  border-radius: 4px;
  padding: 16px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);

  display: flex;
  align-items: center;
  justify-content: space-between;

  .container-actions{
    img {
      margin-left: 8px;
    }
  }

  .container-info {
    .container-title{
      small{
        background: #E0E3FF;
        font-size: 12px;
        padding: 3px;
        color: #5061FC;
        font-weight: bold;
        text-transform: uppercase;
        margin-left: 14px;
        border-radius: 4px;
      }
    }

    .container-data{
      margin-top: 5px;

      display: flex;
      flex-direction: column;

      span{
        color: #bcbcbc;
        font-size: 14px;
      }
    }
  }
`;
