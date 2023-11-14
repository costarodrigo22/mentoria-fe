import Card from "../../components/Card";
import {
  InputSerachContainer,
  ContainerContactsList,
  Header,
  HeaderCard,
  Separator,
  Container,
} from "./styles";
import arrow from "../../assets/images/arrow.svg";
import { useEffect, useState, Fragment } from "react";
import { listContacts } from "../../services/listContactsService";
import { BeatLoader } from "react-spinners";
import toast from "react-hot-toast";

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadContacts() {
      try {
        const response = await listContacts.list();

        setContacts(response.data);
      } catch (error) {
        toast.error("Ops! Algo não saiu como esperado");
      } finally {
        setIsLoading(false);
      }
    }

    loadContacts();
  }, []);

  return (
    <Container>
      {isLoading && <BeatLoader color="#4636d7" />}

      {!isLoading && (
        <>
          <InputSerachContainer>
            <input placeholder="Pesquisar contato" />
          </InputSerachContainer>

          <ContainerContactsList>
            <Header>
              <strong>
                {contacts.length}{" "}
                {contacts.length === 1 ? "contato" : "contatos"}
              </strong>

              <a href="/new">Novo contato</a>
            </Header>

            <Separator />

            <HeaderCard>
              <div className="sort-container">
                <strong>Nome</strong>

                <img src={arrow} />
              </div>
            </HeaderCard>

            {contacts.map((item) => (
              <Fragment key={item.id}>
                <Card contact={item} />
              </Fragment>
            ))}
          </ContainerContactsList>
        </>
      )}
    </Container>
  );
}
