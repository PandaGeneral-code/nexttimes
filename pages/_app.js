import "antd/dist/antd.css";
import "../styles/globals.css";
import { ThemeProvider } from "styled-components";

import { AppContextProvider } from "../components/context/AppState";
import { Header } from "../components/Header/Header";
import * as theme from "../utils/theme/index";

import { MenuDrawer } from "../components/MenuDrawer/MenuDrawer";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <MenuDrawer />
      </ThemeProvider>
    </AppContextProvider>
  );
}

export default MyApp;
