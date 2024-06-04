
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { light } from "../scss/MaterialTheme";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  //@ts-ignore
  const [theme, setTheme] = useState(createTheme(light));

  //WebSocket, Redux,Mui ... Global integrationlarni mantigini shu erda amalga oshirishimiz mumkin 
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Component
        {
          ...pageProps /* app ozida mujassam barcha narsani qolgan pages routinga jonatmoqda */
        }
      />
      
    </ThemeProvider>
  );
}
