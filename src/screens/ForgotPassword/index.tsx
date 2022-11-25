import React from "react";
import { Formik } from "formik";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { useTheme } from "styled-components";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { GlobalButton } from "../../components/Form/Buttons/GlobalButton";
import { InputText } from "../../components/Form/Inputs/InputText";
import {
  Container,
  HeaderContainer,
  TextContainer,
  Title,
  Description,
  ImageContainer,
  Content,
  InputContainer,
  Footer,
  GlobalButtonContainer,
} from "./styles";
import BackgroundSvg from "../../assets/background.svg";
import ChevronLeftSvg from "../../assets/chevron-left.svg";
import { schema } from "./utils/function";
import { HeaderPrincipal } from "../../components/Headers/HeaderPrincipal";

export function ForgotPassword() {
  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <>
      <HeaderContainer>
        <HeaderPrincipal
          title="Esqueceu a senha"
          children1={<ChevronLeftSvg width={24} height={24} />}
          onPress1={() => handleGoBack()}
        />
      </HeaderContainer>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <TextContainer>
            <Title>Enviaremos um email para a{"\n"}recuperação da senha</Title>
            <Description>
              Por favor verifique sua caixa de entrada e clique{"\n"}no link
              recebido para alterar sua senha.
            </Description>
          </TextContainer>
          <ImageContainer>
            <BackgroundSvg width={267} height={267} />
          </ImageContainer>
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={schema}
            onSubmit={(values: any) => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <>
                <Content>
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
                </Content>
                <Footer>
                  <GlobalButtonContainer>
                    <GlobalButton title="Enviar" onPress={handleSubmit} />
                  </GlobalButtonContainer>
                </Footer>
              </>
            )}
          </Formik>
        </Container>
      </TouchableWithoutFeedback>
    </>
  );
}
