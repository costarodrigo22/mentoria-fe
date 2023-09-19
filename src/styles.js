import styled from 'styled-components'

const inadimplente = true;

export const Container = styled.div`
  width: 200px;
  height: 200px;
  background: #FFF;
  border: 1px solid #000;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  h1{
    color: ${inadimplente ? 'red' : 'green'}
  }
`;

export const NavMenu = styled.nav`
  width: 100%;
  height: 60px;
  background: violet;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const NavItem = styled.div`
  width: 40%;
  height: 60px;
  background: #f3f;

  display: flex;
  justify-content: space-around;
`;
