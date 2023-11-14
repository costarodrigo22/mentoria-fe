/* eslint-disable react/prop-types */

import FormGroup from "../FormGroup";
import { Form, ContainerButton } from "./styles";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";
import { useContactForm } from "./useContactForm";

export default function ContactForm({ buttonLabel }) {
  const { register, handleSubmit, handleCreatContact, errors } =
    useContactForm();

  return (
    <>
      <Form onSubmit={handleSubmit(handleCreatContact)}>
        <FormGroup error={errors?.name?.message}>
          <Input
            placeholder="Nome"
            {...register("name")}
            error={errors?.name?.message}
          />
        </FormGroup>

        <FormGroup error={errors?.email?.message}>
          <Input
            placeholder="E-mail"
            {...register("email")}
            error={errors?.email?.message}
          />
        </FormGroup>

        <FormGroup error={errors?.phone?.message}>
          <Input
            placeholder="Telefone"
            {...register("phone")}
            error={errors?.phone?.message}
          />
        </FormGroup>

        <FormGroup>
          <Select placeholder="Categorias" {...register("category")}>
            <option value="">Selecione</option>
            <option value="Instagram">Instagram</option>
            <option value="Discord">Discord</option>
            <option value="Facebook">Facebook</option>
          </Select>
        </FormGroup>

        <ContainerButton>
          <Button>{buttonLabel}</Button>
        </ContainerButton>
      </Form>
    </>
  );
}
