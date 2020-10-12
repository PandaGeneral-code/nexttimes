import Head from "next/head";
import { useCallback, useEffect, useRef } from "react";

import { useAppHooks } from "../../components/context/AppHooks";
import { WebsitesIntro } from "../../components/WebsitesIntro/WebsitesIntro";
import Wrapper from "./styled";

export default function Home() {
  const { setContentScroll } = useAppHooks();
  const wrapperRef = useRef();

  const handleScroll = useCallback(
    (e) => {
      setContentScroll(e.target.scrollTop);
    },
    [setContentScroll]
  );

  useEffect(() => {
    const wrapper = wrapperRef.current;
    wrapper.addEventListener("scroll", handleScroll);
    return () => {
      wrapper.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    setContentScroll(0);
  }, [setContentScroll]);

  return (
    <Wrapper ref={wrapperRef}>
      <Head>
        <title>Websites</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WebsitesIntro />
    </Wrapper>
  );
}
