import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const InputContainer = styled.View<{
  error: boolean;
  disabled: boolean;
}>`
  width: 100%;
  color: ${({ theme }) => theme.colors.gray2};
  border-radius: 10px;
  border-width: 1px;
  border-color: ${({ error }) => (error ? "#FF3333" : "#CCCCCC")};
  background-color: ${({ disabled }) => (disabled ? "#CCCCCC" : "#FFF")};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InputTextContainer = styled.TextInput<{
  error: boolean;
  disabled: boolean;
}>`
  padding: 12px 16px;
  width: 85%;
  color: ${({ disabled }) => (disabled ? "#999999" : "#191919")};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const Error = styled.View`
  margin-top: 4px;
`;

export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  margin-bottom: 8px;
`;

export const ChangeVisibiliyPassword = styled(TouchableOpacity)`
  padding: 10px;
`;

export const IconContainer = styled.View``;

export const InputLabel = styled.Text<{ labelColor: any }>`
  margin-top: 8px;
  color: ${({ theme, labelColor }) => labelColor ?? theme.colors.black};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  margin-bottom: 4px;
`;
