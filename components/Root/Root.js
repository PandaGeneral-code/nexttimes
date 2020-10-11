import React from "react";

import { useAppHooks } from "../context/AppHooks";
import { OurServices } from "../OurServices/OurServices";
import { SettleForMore } from "../SettleForMore/SettleForMore";
import RootWrapper from "./styled";

export const Root = () => {
  const { setDrawerVisibility } = useAppHooks();

  return (
    <RootWrapper>
      <h2>Build your business today</h2>
      <h1>Think creatively</h1>
      <p style={{ color: "white" }}>
        Today’s businesses need senior people drawing on years of creative
        experience without charging senior prices.
      </p>
      <p style={{ color: "white" }}>
        Great creative work is thought provoking and works hard connecting your
        business with your customers.
      </p>
      <div style={{ margin: 0, padding: 0 }}>
        <button onClick={() => setDrawerVisibility({ menu: true })}>
          Contact us
        </button>
      </div>
      <h1>Our services</h1>
      <p style={{ color: "white" }}>
        We offer a full creative set of services for business all times and
        sizes.
      </p>
      <OurServices />
      <SettleForMore />
    </RootWrapper>
  );
};
