import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(1, "Campo nome e obrigatorio"),
  email: z.string().email("Informe um e-mail valido"),
  phone: z.string(),
  category: z.string(),
});

export function useContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  function handleCreatContact(data) {
    console.log(data);
  }

  return { register, handleSubmit, handleCreatContact, errors };
}
