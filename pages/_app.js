import "antd/dist/antd.css";
import "../styles/globals.css";
import { ThemeProvider } from "styled-components";

import { AppContextProvider } from "../components/context/AppState";
import { Header } from "../components/Header/Header";
import { ContactDrawer } from "../components/ContactDrawer/ContactDrawer";
import { MenuDrawer } from "../components/MenuDrawer/MenuDrawer";
import * as theme from "../utils/theme/index";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <MenuDrawer />
        <ContactDrawer />
      </ThemeProvider>
    </AppContextProvider>
  );
}

export default MyApp;
