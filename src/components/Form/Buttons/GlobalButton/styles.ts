import styled from "styled-components/native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface ButtonProps extends TouchableOpacityProps {
  color: string;
  colorText: string;
}

export const Container = styled(TouchableOpacity<ButtonProps>)`
  width: 100%;
  background-color: ${({ color, theme }) =>
    color ? color : theme.colors.primary};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 12px;
`;

export const Title = styled.Text<ButtonProps>`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ colorText, theme }) =>
    colorText ? colorText : theme.colors.white};
`;
