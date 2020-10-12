import React from "react";

import { useAppHooks } from "../../components/context/AppHooks";
import Wrapper, { OurServicesContainer } from "./styled";

export const WebsitesIntro = () => {
  const { setDrawerVisibility } = useAppHooks();

  return (
    <Wrapper>
      <h1>You can tell a lot about a business by their website</h1>
      <OurServicesContainer>
        <h1>Our services</h1>
        <p>
          When building a website, it’s important that you have have an
          experienced and talented design and web development team. Here at
          Tiemens Creative we strive to make every website strong, secure and
          highly effective
        </p>
        <button onClick={() => setDrawerVisibility({ contact: true })}>
          Get started
        </button>
      </OurServicesContainer>
    </Wrapper>
  );
};
