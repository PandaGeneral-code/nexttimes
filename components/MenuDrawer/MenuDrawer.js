import React from "react";

import { useAppHooks } from "../context/AppHooks";
import { StyledDrawer } from "./styled";

export const MenuDrawer = () => {
  const {
    setDrawerVisibility,
    state: { drawerVisibility },
  } = useAppHooks();

  const handleMenuDrawerClose = () => {
    setDrawerVisibility({ menu: false });
  };

  return (
    <StyledDrawer
      onClose={handleMenuDrawerClose}
      visible={drawerVisibility.menu}
    >
      Menu
    </StyledDrawer>
  );
};
