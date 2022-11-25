import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const HeaderContainer = styled.View`
  margin-top: ${getStatusBarHeight()}px;
`;

export const Container = styled.View`
  flex: 1;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const LogoContainer = styled.View`
  margin-top: 8px;
  align-items: center;
`;

export const Content = styled.View``;

export const InputContainer = styled.View``;

export const InputsContainer = styled.View`
  margin-bottom: 24px;
`;

export const Footer = styled.View``;

export const GlobalButtonContainer = styled.View`
  margin-bottom: 16px;
`;
