import { Container } from "./styles";

import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';

export default function Card() {
  return (
    <Container>
      <div className="container-info">
        <div className="container-title">
          <strong>Mateus Silva</strong>

          <small>Instagram</small>
        </div>

        <div className="container-data">
          <span>mateus@mail.com.br</span>
          <span>(99) 9 9999-9999</span>
        </div>
      </div>

      <div className="container-actions">
        <img src={edit} />
        <img src={trash} />
      </div>
    </Container>
  );
}
