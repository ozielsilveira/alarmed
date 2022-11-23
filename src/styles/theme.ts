export const theme = {
  colors: {
    primary: "#0C918B",

    secondary: "#DE9928",

    gray1: "#999999",
    gray2: "#D8EDEC",

    black: "#000000",
    white: "#FFFFFF",

    success: "#38B53E",

    danger: "#FF4E4E",
  } as const,

  fonts: {
    primary_400: "Inter_400Regular",
    primary_500: "Inter_500Medium",
    primary_600: "Inter_600SemiBold",
    primary_700: "Inter_700Bold",
  } as const,

  size: {
    xxsm: "0.25rem", // 4px
    xsm: "0.5rem", // 8px
    sm: "1rem", // 16px
    md: "1.5rem", // 24px
    lg: "2rem", // 32px
    xlg: "2.5rem", // 40px
    xxlg: "3rem", // 48px
    xxxlg: "3.5rem", // 56px
    xxxxlg: "4rem", // 64px
  } as const,
};
