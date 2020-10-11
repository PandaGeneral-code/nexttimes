import React, { useEffect } from "react";
import { useCountUp } from "react-countup";
import { useInView } from "react-intersection-observer";

import Wrapper, {
  GraphContainer,
  StyledProgress,
  StyledProgressBar,
} from "./styled";

export const MarketingMessage = () => {
  const { countUp: forReturn, start: startReturn } = useCountUp({ end: 71 });
  const { countUp: forSales, start: startSales } = useCountUp({ end: 45 });
  const { countUp: WDD } = useCountUp({ end: 90 });
  const { countUp: AC } = useCountUp({ end: 70 });
  const { countUp: LDD } = useCountUp({ end: 75 });
  const { countUp: CR } = useCountUp({ end: 20 });
  const { countUp: MST } = useCountUp({ end: 60 });
  const { countUp: WEH } = useCountUp({ end: 70 });
  const [ref, inView] = useInView({ threshold: 0.75, triggerOnce: true });
  const [secondRef, secondInView] = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      startReturn();
      startSales();
    }
  }, [inView]);

  return (
    <Wrapper>
      <h1>Consistent marketing and branding saves thousands</h1>
      <p>
        The average consumer sees and hears over 4000 marketing messages a day.
        From Facebook to the radio, and from emails to text messages we are
        constantly bombarded.
      </p>
      <p>
        In order to cut through this clutter it is essential to get the basics
        right before attempting other advertising and marketing tactics.
      </p>
      <p>
        A lot of advertising and marketing is wasted because messages are
        inconsistent and branding is confusing. Building a consistent “look”,
        “feel” and “sound” to your marketing will pay off in the long run by
        making it
        <a
          href="https://hbr.org/2017/03/what-creativity-in-marketing-looks-like-today"
          target="_blank"
        >
          easier for your customers{" "}
        </a>
        to find you, understand you and buy your products.
      </p>
      <GraphContainer ref={ref}>
        <StyledProgress
          color="internationalOrange"
          percent={inView ? forReturn : 0}
          type="circle"
          width={250}
        />
        <p>71% increase in return</p>
        <StyledProgress
          color="downy"
          percent={inView ? forSales : 0}
          type="circle"
          width={175}
        />
        <p>45% increase in sales</p>
      </GraphContainer>
      <h1>Our specialties</h1>
      <GraphContainer ref={secondRef}>
        <p>WEB DESIGN AND DEVELOPMENT</p>
        <StyledProgressBar
          color="internationalOrange"
          percent={secondInView ? WDD : 0}
          showInfo={false}
        />
        <p>ADVERTISING CREATION</p>
        <StyledProgressBar
          color="internationalOrange"
          percent={secondInView ? AC : 0}
          showInfo={false}
        />
        <p>LOGO AND IDENTITY DESIGN</p>
        <StyledProgressBar
          color="internationalOrange"
          percent={secondInView ? LDD : 0}
          showInfo={false}
        />
        <p>CONSUMER RESEARCH</p>
        <StyledProgressBar
          color="internationalOrange"
          percent={secondInView ? CR : 0}
          showInfo={false}
        />
        <p>MARKETING STRATEGY AND TACTICS</p>
        <StyledProgressBar
          color="internationalOrange"
          percent={secondInView ? MST : 0}
          showInfo={false}
        />
        <p>WEBSITE AND EMAIL HOSTING</p>
        <StyledProgressBar
          color="internationalOrange"
          percent={secondInView ? WEH : 0}
          showInfo={false}
        />
      </GraphContainer>
    </Wrapper>
  );
};
