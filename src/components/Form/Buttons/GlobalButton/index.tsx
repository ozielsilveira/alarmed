import React from "react";
import { useTheme } from "styled-components";
import { Container, Title } from "./styles";

interface Props {
  title: string;
  disabled?: boolean;
  color?: string;
  colorText?: string;
  onPress?: () => void;
}

export function GlobalButton({
  title,
  disabled = false,
  color,
  colorText,
  onPress,
  ...rest
}: Props) {
  const theme = useTheme();
  return (
    <Container
      {...rest}
      onPress={onPress}
      activeOpacity={0.7}
      color={color || theme.colors.primary}
      disabled={disabled}
      style={{ opacity: disabled === false ? 1 : 0.5 }}
    >
      <Title colorText={colorText}>{title}</Title>
    </Container>
  );
}
