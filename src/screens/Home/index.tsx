import React from "react";
// import { Formik } from "formik";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { GlobalButton } from "../../components/Form/Buttons/GlobalButton";
import { NoFillButton } from "../../components/Form/Buttons/NoFillButton";
import { InputText } from "../../components/Form/Inputs/InputText";
import { PasswordInput } from "../../components/Form/Inputs/PasswordInput";
import {
  Container,
  LogoContainer,
  Content,
  InputContainer,
  ForgotPasswordContainer,
  ForgotPasswordText,
  Footer,
  GlobalButtonContainer,
  NoFillButtonContainer,
} from "./styles";
import LogoSvg from "../../assets/logo.svg";
// import { schema } from "./utils/function";

export function Home() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  function teste() {
    navigation.navigate("Teste");
  }
  return (
    <Container>
      {/* <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={schema}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <> */}
      <Content>
        <LogoContainer>
          <LogoSvg width={233} height={72} />
        </LogoContainer>
        <InputContainer>
          <InputText label="Email" />
        </InputContainer>
        <InputContainer>
          <PasswordInput label="Senha" />
        </InputContainer>
        <ForgotPasswordContainer>
          <ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>
        </ForgotPasswordContainer>
      </Content>
      <Footer>
        <GlobalButtonContainer>
          <GlobalButton title="Login" onPress={() => teste()} />
        </GlobalButtonContainer>
        <NoFillButtonContainer>
          <NoFillButton title="Cadastrar" />
        </NoFillButtonContainer>
      </Footer>
      {/* </>
        )}
      </Formik> */}
    </Container>
  );
}
