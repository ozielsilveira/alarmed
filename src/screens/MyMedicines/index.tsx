import React, { useState } from "react";
import { Image, FlatList, Text, View } from "react-native";
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
import { db } from "../../config";
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';


export type MedicineData = {
  id: number;
  name: string;
  amount_of_box: number;
  amount_per_box: number;
  leaflet: string;
  type: number;
}

const [medicineDoc, setMedicineDoc] = useState<any>([])

export const Read = () => {
  const myDoc = doc(db, "remedy", "Zz9ZwNr1nWPQNPx5Njue")

  getDoc(myDoc)
    .then((snapshot) => {
      if (snapshot.exists()) {
        setMedicineDoc(snapshot.data())
      }
      else {
        alert("No Doc Found")
      }
    })
    .catch((error) => {
      alert(error.message)
    })
}

export const Create = () => {

  const myDoc = doc(db, "remedy", "Zz9ZwNr1nWPQNPx5Njue")

  const docData = {
    "amount_of_box": "0",
    "amount_per_box": "0",
    "leaflet": "leaflet teste",
    "name": "name teste",
    "type": "3"
  }

  setDoc(myDoc, docData)
    .then(() => {
      console.log("Document Created!")
    })
    .catch((error) => {
      console.log(error.message)
    })
}

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
        <FlatList
          data={medicineDoc}
          renderItem={({ item }) => (
            <View>
              <Text>{item.name}</Text>
            </View>
          )}
        />
        <AddMedicineContainer>
          <AddMedicineText>Adicionar</AddMedicineText>
          <AddSvg width={20} height={24} />
        </AddMedicineContainer>
      </Content>
    </Container>
  );
}