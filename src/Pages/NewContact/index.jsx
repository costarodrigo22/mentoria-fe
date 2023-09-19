import Button from "../../components/Button";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import Select from "../../components/Select";

export default function NewContact() {
  return (
    <>
      <PageHeader title='Novo contato' />

      <Input />

      <Select>
        <option>opção 01</option>
        <option>opção 01</option>
        <option>opção 01</option>
      </Select>

      <Button>Cadastrar</Button>
    </>
  );
}
