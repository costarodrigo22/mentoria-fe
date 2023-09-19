import ContactsList from "../../components/ContactsList";
import { InputSerachContainer } from "./styles";

export default function Home() {
  return (
    <>
      <InputSerachContainer>
        <input placeholder='Pesquisar contato' />
      </InputSerachContainer>

      <ContactsList />
    </>
  );
}
