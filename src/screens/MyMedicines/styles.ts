import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 0 16px;
  background-color: #fff;
`;

export const HeaderContainer = styled.View`
  margin-top: ${getStatusBarHeight()}px;
`;

export const Header = styled.View`
  padding: 16px 24px;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextsContainer = styled.View``;

export const MyText = styled.Text`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const MedicinesText = styled.Text`
  margin-top: -8px;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;

export const Content = styled.View`
  margin-top: 24px;
`;

export const PhotoContainer = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;

export const MedicinesListText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const AddMedicineContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin-top: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const AddMedicineText = styled.Text`
  margin-right: 12px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;
