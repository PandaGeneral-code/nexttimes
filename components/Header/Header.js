import Link from "next/link";
import { useEffect, useState } from "react";

import { useAppHooks } from "../context/AppHooks";
import { StyledImage, Wrapper } from "./styled";

export const Header = () => {
  const {
    state: { contentScroll },
  } = useAppHooks();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (contentScroll > 100) {
      setCollapsed(() => true);
    } else {
      setCollapsed(() => false);
    }
  }, [contentScroll]);

  return (
    <Wrapper>
      <Link href="/about">
        <StyledImage
          alt="company-logo"
          collapsed={collapsed}
          src="https://tiemens.com.au/file/2017/12/logo-for-website-RGB.jpg"
        />
      </Link>
      <pre>{JSON.stringify({ contentScroll }, null, 2)}</pre>
    </Wrapper>
  );
};
