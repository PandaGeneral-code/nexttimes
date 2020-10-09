import Head from "next/head";
import { useCallback, useEffect, useRef } from "react";

import { useAppHooks } from "../../components/context/AppHooks";

import { Wrapper } from "./styled";

const About = () => {
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
        <title>About Us</title>
      </Head>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
      <div>ABOUT US</div>
    </Wrapper>
  );
};

export default About;
