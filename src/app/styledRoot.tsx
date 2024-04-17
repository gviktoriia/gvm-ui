"use client";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme/theme";
import { lightTheme, darkTheme, globalStyles } from "../../theme/theme";
import { Global } from "@emotion/react";

export function StyledRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      theme={theme.palette.mode === "dark" ? darkTheme : lightTheme}
    >
      <Global styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
}
