import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 0 16px;
`;

export const LogoContainer = styled.View`
  align-items: center;
  margin-bottom: 16px;
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Content = styled.View``;
