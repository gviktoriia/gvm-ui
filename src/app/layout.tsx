"use client";

import { CssBaseline, PaletteMode, Switch } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMemo, useState } from "react";
import { getDesignTokens } from "../../theme/theme";
import Head from "next/head";
import ModeSwitcher from "./components/ModeSwitcher";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mode, setMode] = useState<PaletteMode>("light");

  const theme = useMemo(() => {
    return createTheme(getDesignTokens(mode));
  }, [mode]);

  return (
    <html lang="en">
      <Head>
        <title>GVM-UI Template</title>
        <meta property="og:title" content="GVM-UI Template" key="title" />
      </Head>
      <body
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <ThemeProvider theme={theme}>
          {children}
          <CssBaseline />
          <ModeSwitcher
            mode={mode}
            toggle={() => setMode(mode === "light" ? "dark" : "light")}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
