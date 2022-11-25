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
import { InputText } from "../../components/Form/Inputs/InputText";
import { PasswordInput } from "../../components/Form/Inputs/PasswordInput";
import {
  Container,
  LogoContainer,
  HeaderContainer,
  Content,
  InputContainer,
  Footer,
  GlobalButtonContainer,
  InputsContainer,
} from "./styles";
import LogoSvg from "../../assets/logo.svg";
import { schema } from "./utils/function";
import { HeaderPrincipal } from "../../components/Headers/HeaderPrincipal";
import ChevronLeftSvg from "../../assets/chevron-left.svg";

export function SignUp() {
  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleGoScreen(screen: string) {
    navigation.navigate(screen);
  }

  return (
    <>
      <HeaderContainer>
        <HeaderPrincipal
          title="Cadastrar"
          children1={<ChevronLeftSvg width={24} height={24} />}
          onPress1={() => handleGoBack()}
        />
      </HeaderContainer>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Formik
            initialValues={{
              email: "",
              name: "",
              password: "",
              passwordConfirm: "",
            }}
            validationSchema={schema}
            onSubmit={(values: any) => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <>
                <Content>
                  <LogoContainer>
                    <LogoSvg width={200} height={65} />
                  </LogoContainer>
                  <InputsContainer>
                    <InputContainer>
                      <InputText
                        label="Email"
                        labelColor={errors.email && theme.colors.danger}
                        placeholder="Email"
                        placeholderTextColor={
                          errors.email && theme.colors.danger
                        }
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                        error={errors.email}
                        errorText={errors.email}
                      />
                    </InputContainer>

                    <InputContainer>
                      <InputText
                        label="Nome"
                        labelColor={errors.name && theme.colors.danger}
                        placeholder="Nome"
                        placeholderTextColor={
                          errors.name && theme.colors.danger
                        }
                        onChangeText={handleChange("name")}
                        onBlur={handleBlur("name")}
                        value={values.name}
                        error={errors.name}
                        errorText={errors.name}
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

                    <InputContainer>
                      <PasswordInput
                        label="Confirme sua senha"
                        labelColor={
                          errors.passwordConfirm && theme.colors.danger
                        }
                        placeholder="Confirme sua senha"
                        placeholderTextColor={
                          errors.passwordConfirm && theme.colors.danger
                        }
                        onChangeText={handleChange("passwordConfirm")}
                        onBlur={handleBlur("passwordConfirm")}
                        value={values.passwordConfirm}
                        error={errors.passwordConfirm}
                        errorText={errors.passwordConfirm}
                      />
                    </InputContainer>
                  </InputsContainer>
                </Content>
                <Footer>
                  <GlobalButtonContainer>
                    <GlobalButton title="Cadastrar" onPress={handleSubmit} />
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
