import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const LogoContainer = styled.View`
  margin: ${getStatusBarHeight() + 32}px 0 32px 0;
  align-items: center;
`;

export const Content = styled.View``;

export const InputContainer = styled.View``;

export const ForgotPasswordContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  justify-content: flex-end;
  margin: -28px 0 24px 0;
`;

export const ForgotPasswordText = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;

export const Footer = styled.View``;

export const GlobalButtonContainer = styled.View`
  margin-bottom: 16px;
`;

export const NoFillButtonContainer = styled.View``;
