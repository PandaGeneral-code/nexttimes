import Head from "next/head";
import { useCallback, useEffect, useRef } from "react";

import { Root } from "../components/Root/Root";
import Wrapper from "./styled";

import { useAppHooks } from "../components/context/AppHooks";

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
        <title>New Times</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Root />
    </Wrapper>
  );
}
