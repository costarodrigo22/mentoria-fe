/* eslint-disable react/prop-types */

import { Container } from "./styles";

export default function FormGroup({ children, error }) {
  return (
    <Container error={error}>
      {children}

      {error && <small>{error}</small>}
    </Container>
  );
}
