import { useRouter } from "next/router";
import React from "react";

import { useAppHooks } from "../context/AppHooks";
import { LinkButton, NavButtonContainer, StyledDrawer } from "./styled";

export const MenuDrawer = () => {
  const {
    setDrawerVisibility,
    state: { drawerVisibility },
  } = useAppHooks();
  const router = useRouter();

  const handleContactDrawerOpen = () => {
    setDrawerVisibility({ menu: false });
    setDrawerVisibility({ contact: true });
  };

  const handleNavButtonClick = (newPath) => {
    if (router.pathname !== newPath) {
      router.push(newPath);
    }
    handleMenuDrawerClose();
  };

  const handleMenuDrawerClose = () => {
    setDrawerVisibility({ menu: false });
  };

  return (
    <StyledDrawer
      closable={false}
      onClose={handleMenuDrawerClose}
      visible={drawerVisibility.menu}
    >
      <NavButtonContainer>
        <LinkButton
          custom={{ active: router.pathname === "/" }}
          onClick={() => handleNavButtonClick("/")}
        >
          HOME
        </LinkButton>
        <LinkButton
          custom={{ active: router.pathname === "/websites" }}
          onClick={() => handleNavButtonClick("/websites")}
        >
          WEBSITES
        </LinkButton>
        <LinkButton
          custom={{ active: router.pathname === "/advertising" }}
          onClick={() => handleNavButtonClick("/advertising")}
        >
          ADVERTISING
        </LinkButton>
        <LinkButton
          custom={{ active: router.pathname === "/design" }}
          onClick={() => handleNavButtonClick("/design")}
        >
          DESIGN
        </LinkButton>
        <LinkButton
          custom={{ active: false }}
          onClick={handleContactDrawerOpen}
        >
          CONTACT
        </LinkButton>
      </NavButtonContainer>
    </StyledDrawer>
  );
};
