import React from "react";

import Wrapper from "./styled";

import { useAppHooks } from "../context/AppHooks";

export const Intro = () => {
  const { setDrawerVisibility } = useAppHooks();

  return (
    <Wrapper>
      <h4>Build your business today</h4>
      <h1>Think creatively</h1>
      <p>
        Today’s businesses need senior people drawing on years of creative
        experience without charging senior prices.
      </p>
      <p>
        Great creative work is thought provoking and works hard connecting your
        business with your customers.
      </p>
      <button onClick={() => setDrawerVisibility({ contact: true })}>
        Contact us
      </button>
      <h1>Our services</h1>
      <p>
        We offer a full creative set of services for business all times and
        sizes.
      </p>
    </Wrapper>
  );
};
