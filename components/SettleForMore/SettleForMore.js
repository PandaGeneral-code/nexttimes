import { useRouter } from "next/router";
import React from "react";

import Wrapper from "./styled";

export const SettleForMore = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <h1>Settle for more</h1>
      <p>We do things a little differently.</p>
      <img src="https://tiemens.com.au/file/2017/12/feature-2.png" />
      <h4>Co-creation</h4>
      <p>
        We involve our clients in all aspects of our creative development so
        they feel confident and supported as they build their businesses.
      </p>
      <img src="https://tiemens.com.au/file/2017/12/feature-3.png" />
      <h4>Local</h4>
      <p>
        We use the best of our local Australian talent to work on the design and
        delivery of creative work rather than send the bulk of it overseas.
      </p>
      <img src="https://tiemens.com.au/file/2017/12/feature-1.png" />
      <h4>Roadmap</h4>
      <p>
        We aim to be the most respected boutique website development,
        advertising, design and marketing agency in east Australia. Too
        ambitious? We don’t think so.
      </p>
      <button onClick={() => router.push("/websites")}>Get started</button>
    </Wrapper>
  );
};
