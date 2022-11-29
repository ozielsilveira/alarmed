import { TouchableOpacity } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 13px 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.View``;

export const NotificationContainer = styled(TouchableOpacity).attrs({
  activeOpacity: 0.5,
})`
  margin-right: 16px;
`;

export const PhotoContainer = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  width: ${RFValue(44)}px;
  height: ${RFValue(44)}px;
  border-radius: ${RFValue(22)}px;
  background-color: ${({ theme }) => theme.colors.primary_5};
`;

export const Photo = styled.Image`
  width: ${RFValue(44)}px;
  height: ${RFValue(44)}px;
  border-radius: ${RFValue(22)}px;
`;

export const LeftContainer = styled.View``;

export const RightContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
