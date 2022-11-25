import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

export const HeaderContainer = styled.View`
  margin-top: ${getStatusBarHeight()}px;
`;

export const TextContainer = styled.View`
  margin-top: 16px;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const Description = styled.Text`
  text-align: center;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.gray1};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const ImageContainer = styled.View`
  align-items: center;
  margin-top: 16px;
`;

export const Container = styled.View`
  flex: 1;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View``;

export const InputContainer = styled.View`
  margin-bottom: 24px;
`;

export const Footer = styled.View``;

export const GlobalButtonContainer = styled.View``;
