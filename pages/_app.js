import "../styles/globals.css";
import { ThemeProvider } from "styled-components";

import { AppContextProvider } from "../components/context/AppState";
import { Header } from "../components/Header/Header";
import * as theme from "../utils/theme/index";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppContextProvider>
  );
}

export default MyApp;
