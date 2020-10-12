import React, { useEffect } from "react";
import { useCountUp } from "react-countup";
import { useInView } from "react-intersection-observer";

import Wrapper, {
  ChartLabel,
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
  const { countUp: BS } = useCountUp({ end: 55 });
  const { countUp: MS } = useCountUp({ end: 85 });
  const { countUp: SM } = useCountUp({ end: 70 });
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
        making it{" "}
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
        <ChartLabel>WEB DESIGN AND DEVELOPMENT</ChartLabel>
        <StyledProgressBar
          color="internationalOrange"
          percent={secondInView ? WDD : 0}
          showInfo={false}
        />
        <ChartLabel>ADVERTISING CREATION</ChartLabel>
        <StyledProgressBar
          color="internationalOrange"
          percent={secondInView ? AC : 0}
          showInfo={false}
        />
        <ChartLabel>LOGO AND IDENTITY DESIGN</ChartLabel>
        <StyledProgressBar
          color="internationalOrange"
          percent={secondInView ? LDD : 0}
          showInfo={false}
        />
        <ChartLabel>CONSUMER RESEARCH</ChartLabel>
        <StyledProgressBar
          color="internationalOrange"
          percent={secondInView ? CR : 0}
          showInfo={false}
        />
        <ChartLabel>MARKETING STRATEGY AND TACTICS</ChartLabel>
        <StyledProgressBar
          color="internationalOrange"
          percent={secondInView ? MST : 0}
          showInfo={false}
        />
        <ChartLabel>WEBSITE AND EMAIL HOSTING</ChartLabel>
        <StyledProgressBar
          color="internationalOrange"
          percent={secondInView ? WEH : 0}
          showInfo={false}
        />
        <ChartLabel>BRAND STRATEGY</ChartLabel>
        <StyledProgressBar
          color="internationalOrange"
          percent={secondInView ? BS : 0}
          showInfo={false}
        />
        <ChartLabel>MARKETING STRATEGY</ChartLabel>
        <StyledProgressBar
          color="internationalOrange"
          percent={secondInView ? MS : 0}
          showInfo={false}
        />
        <ChartLabel>SOCIAL MEDIA</ChartLabel>
        <StyledProgressBar
          color="internationalOrange"
          percent={secondInView ? SM : 0}
          showInfo={false}
        />
      </GraphContainer>
      <p style={{ margin: "1rem 0 1rem 0", textAlign: "left" }}>
        Tiemens Creative can be your own “one-stop shop” in-house marketing
        department without paying the costs of staff and expensive contracts.
      </p>
      <p style={{ margin: "1rem 0 1rem 0", textAlign: "left" }}>
        The business founder Darrell Tiemens has more than twenty-four years in
        the advertising and marketing profession with extensive experience,
        connections, and a big international network.
      </p>
      <p style={{ margin: "1rem 0 1rem 0", textAlign: "left" }}>
        The tools of our trade are our creativity, big Mac computers, cameras,
        our fast broadband, our Adobe software and, of course, our coffee
        machine!
      </p>
      <p style={{ margin: "1rem 0 1rem 0", textAlign: "left" }}>
        To see how we can apply the tools of our trade to your business please
        call us.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <a href="tel:+61411572926">
          <button>Let's chat</button>
        </a>
      </div>
    </Wrapper>
  );
};
