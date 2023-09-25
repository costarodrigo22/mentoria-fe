import FormGroup from "../FormGroup";
import { Form, ContainerButton } from "./styles";
import Input from "../../components/Input";
import Select from '../../components/Select';
import Button from '../../components/Button';
import { useState } from "react";

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState([])

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'name', message: 'Nome é obrigatório' }
      ])
    } else {
      setErrors((prevState) => prevState.filter((error) => error.field !== 'name'))
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value)
  }

  function handlePhoneChange(event) {
    setPhone(event.target.value)
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value)
  }

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message
  }

  return (
    <>
      <Form>
        <FormGroup error={getErrorMessageByFieldName('name')}>
          <Input placeholder="Nome" value={name} onChange={handleNameChange} error={getErrorMessageByFieldName('name')} />
        </FormGroup>

        <FormGroup>
          <Input placeholder="E-mail" value={email} onChange={handleEmailChange} />
        </FormGroup>

        <FormGroup>
          <Input placeholder="Telefone" value={phone} onChange={handlePhoneChange} />
        </FormGroup>

        <FormGroup>
          <Select value={category} onChange={handleCategoryChange}>
            <option value=''>Selecione</option>
            <option value='Instagram'>Instagram</option>
            <option value='Discord'>Discord</option>
            <option value='Facebook'>Facebook</option>
          </Select>
        </FormGroup>

        <ContainerButton>
          <Button>{buttonLabel}</Button>
        </ContainerButton>

      </Form>
    </>
  );
}

// CONTROLLED COMPONENTS -> Campos do formuário onde a responsabilidade de controlar o que ta dentro (valor) do input é do React

