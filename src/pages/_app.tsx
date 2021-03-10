// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MyThemeProvider } from "../providers/themeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyThemeProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </MyThemeProvider>
  );
}
export default MyApp;
