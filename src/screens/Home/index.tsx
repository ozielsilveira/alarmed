import React from "react";
import { Text } from "react-native";
import { Container, LogoContainer, Content } from "./styles";
import LogoSvg from "../../assets/logo.svg";

export function Home() {
  return (
    <Container>
      <LogoContainer>
        <LogoSvg />
      </LogoContainer>

      <Content>
        <Text
          style={{
            fontSize: 20,
            color: "#000",
            fontFamily: "Inter_600SemiBold",
            textAlign: "center",
          }}
        >
          Seja bem vindo ao Alermed
        </Text>
        <Text
          style={{
            marginTop: 8,
            fontSize: 16,
            color: "#000",
            fontFamily: "Inter_400Regular",
            textAlign: "center",
          }}
        >
          O seu app para gerenciamento dos seus medicamentos
        </Text>
        <Text
          style={{
            marginTop: 8,
            fontSize: 14,
            color: "#000",
            fontFamily: "Inter_400Regular",
            textAlign: "center",
          }}
        >
          Utilize o nosso menu de navegação embaixo da sua tela.
        </Text>
      </Content>
    </Container>
  );
}
