import { GlobalStyles } from "../../assets/styles/Global";
import { Container, ContainerHeader } from "./styles";
import Router from "../../Router";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import logo from "../../assets/images/logo.svg";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Container>
        <ContainerHeader>
          <img src={logo} />
        </ContainerHeader>
        <Toaster />
        <Router />
      </Container>
    </BrowserRouter>
  );
}
