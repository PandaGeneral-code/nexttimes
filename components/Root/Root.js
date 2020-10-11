import React from "react";

import { useAppHooks } from "../context/AppHooks";
import { Intro } from "../Intro/Intro";
import { MarketingMessage } from "../MarketingMessage/MarketingMessage";
import { OurServices } from "../OurServices/OurServices";
import { SettleForMore } from "../SettleForMore/SettleForMore";
import RootWrapper from "./styled";

export const Root = () => {
  const { setDrawerVisibility } = useAppHooks();

  return (
    <RootWrapper>
      <Intro />
      <OurServices />
      <SettleForMore />
      <MarketingMessage />
    </RootWrapper>
  );
};
