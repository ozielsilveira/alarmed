import React from "react";
import { Image } from "react-native";
import {
  Container,
  HeaderContainer,
  Header,
  MyText,
  MedicinesText,
  Content,
  MedicinesListText,
  AddMedicineContainer,
  AddMedicineText,
  PhotoContainer,
  TextsContainer,
} from "./styles";
import AddSvg from "../../assets/plus.svg";

export function MyMedicines() {
  return (
    <Container>
      <HeaderContainer>
        <Header>
          <TextsContainer>
            <MyText>Meus</MyText>
            <MedicinesText>Remédios</MedicinesText>
          </TextsContainer>
          <PhotoContainer>
            <Image
              style={{ width: 70, height: 70, borderRadius: 35 }}
              source={{
                uri: "https://img.ibxk.com.br/2019/02/17/17124052466014.jpg?ims=704x",
              }}
            />
          </PhotoContainer>
        </Header>
      </HeaderContainer>
      <Content>
        <MedicinesListText>Lista de remedios cadastrados!</MedicinesListText>
        <AddMedicineContainer>
          <AddMedicineText>Adicionar</AddMedicineText>
          <AddSvg width={20} height={24} />
        </AddMedicineContainer>
      </Content>
    </Container>
  );
}
