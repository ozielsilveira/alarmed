import React from "react";
import { Formik } from "formik";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { useTheme } from "styled-components";
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
import { schema } from "./utils/function";

export function Login() {
  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  function handleGoScreen(screen: string) {
    navigation.navigate(screen);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={schema}
          onSubmit={(values: any) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <>
              <Content>
                <LogoContainer>
                  <LogoSvg width={233} height={72} />
                </LogoContainer>
                <InputContainer>
                  <InputText
                    label="Email"
                    labelColor={errors.email && theme.colors.danger}
                    placeholder="Email"
                    placeholderTextColor={errors.email && theme.colors.danger}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    error={errors.email}
                    errorText={errors.email}
                  />
                </InputContainer>

                <InputContainer>
                  <PasswordInput
                    label="Senha"
                    labelColor={errors.password && theme.colors.danger}
                    placeholder="Senha"
                    placeholderTextColor={
                      errors.password && theme.colors.danger
                    }
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    error={errors.password}
                    errorText={errors.password}
                  />
                </InputContainer>
                <ForgotPasswordContainer
                  onPress={() => handleGoScreen("ForgotPassword")}
                >
                  <ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>
                </ForgotPasswordContainer>
              </Content>
              <Footer>
                <GlobalButtonContainer>
                  <GlobalButton title="Login" onPress={handleSubmit} />
                </GlobalButtonContainer>
                <NoFillButtonContainer>
                  <NoFillButton
                    title="Cadastrar"
                    onPress={() => handleGoScreen("SignUp")}
                  />
                </NoFillButtonContainer>
              </Footer>
            </>
          )}
        </Formik>
      </Container>
    </TouchableWithoutFeedback>
  );
}
