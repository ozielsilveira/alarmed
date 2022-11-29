/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Container,
  LogoContainer,
  NotificationContainer,
  PhotoContainer,
  Photo,
  LeftContainer,
  RightContainer,
} from "./styles";
import LogoSvg from "../../../assets/logo1.svg";
import BellSvg from "../../../assets/bell.svg";
import apiAuth from "../../../services/apiAuth";
import { showToast } from "../../Others/Toaster";
import { UserDetails } from "../../../utils/types/types";
import { Load } from "../../Others/Load";

interface Props {
  data: UserDetails;
}

export function HeaderHome({ data }: Props) {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const [isLoading, setIsLoading] = useState(true);
  const [personalData, setPersonalData] = useState<UserDetails>(data);

  function handleGoProfile() {
    navigation.navigate("Profile");
  }

  async function getPersonalData() {
    setIsLoading(true);
    const userId = await AsyncStorage.getItem("userId");
    try {
      await apiAuth.get(`/api/client/user/info/${userId}`).then((res) => {
        setPersonalData(res.data);
        setIsLoading(false);
      });
    } catch (error: any) {
      setIsLoading(false);
      showToast("danger", error.response.data.ServerMessage.messga, 40);
    }
  }

  useEffect(() => {
    navigation.addListener("focus", () => getPersonalData());
  }, [navigation]);

  return (
    <Container>
      <LeftContainer>
        <LogoContainer>
          <LogoSvg width={182} height={27} />
        </LogoContainer>
      </LeftContainer>

      <RightContainer>
        <NotificationContainer>
          <BellSvg width={24} height={24} />
        </NotificationContainer>

        <PhotoContainer onPress={() => handleGoProfile()}>
          {isLoading ? (
            <Load />
          ) : (
            <Photo source={{ uri: personalData?.profilePicture }} />
          )}
        </PhotoContainer>
      </RightContainer>
    </Container>
  );
}
