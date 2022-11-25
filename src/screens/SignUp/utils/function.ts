import * as yup from "yup";

export const schema = yup
  .object({
    email: yup
      .string()
      .email("Informe um e-mail válido.")
      .required("Campo obrigatório!"),

    name: yup.string().required("Campo obrigatório!"),

    password: yup.string().required("Campo obrigatório!"),

    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas não conferem")
      .required("Campo obrigatório!"),
  })
  .required();
