/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { Link } from "react-router-dom";

import edit from "../../assets/images/edit.svg";
import trash from "../../assets/images/trash.svg";

export default function Card({ contact }) {
  return (
    <Container>
      <div className="container-info">
        <div className="container-title">
          <strong>{contact.name}</strong>

          <small>{contact.category.name}</small>
        </div>

        <div className="container-data">
          <span>{contact.email}</span>
          <span>{contact.telephone}</span>
        </div>
      </div>

      <div className="container-actions">
        <Link to={`/edit/${contact.id}`}>
          <img src={edit} />
        </Link>
        <img src={trash} />
      </div>
    </Container>
  );
}
