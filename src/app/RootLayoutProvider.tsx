"use client";
import { CssBaseline, PaletteMode } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMemo, useState } from "react";
import { getDesignTokens } from "../../theme/theme";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Providers } from "./components/Auth/Provider";

const RootLayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<PaletteMode>("light");

  const theme = useMemo(() => {
    return createTheme(getDesignTokens(mode));
  }, [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Providers>
        <Navbar
          mode={mode}
          toggle={() => setMode(mode === "light" ? "dark" : "light")}
        />
        {children}
      </Providers>
      <Footer />
    </ThemeProvider>
  );
};

export default RootLayoutProvider;
