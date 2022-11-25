import * as yup from "yup";

export const schema = yup
  .object({
    email: yup.string().email("Informe um e-mail válido."),

    password: yup.string(),
  })
  .required();
