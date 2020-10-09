import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useAppHooks } from "../context/AppHooks";
import Wrapper, {
  LinksContainer,
  LogoLinkContainer,
  StyledImage,
  StyledLink,
  StyledMenuIcon,
} from "./styled";

export const Header = () => {
  const {
    setDrawerVisibility,
    state: { contentScroll },
  } = useAppHooks();
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleMenuDrawerOpen = () => {
    setDrawerVisibility({ menu: true });
  };

  useEffect(() => {
    if (contentScroll > 100) {
      setIsCollapsed(() => true);
    } else {
      setIsCollapsed(() => false);
    }
  }, [contentScroll]);

  return (
    <Wrapper>
      <LogoLinkContainer>
        <Link href="/">
          <StyledImage
            alt="company-logo"
            collapsed={isCollapsed}
            src="https://tiemens.com.au/file/2017/12/logo-for-website-RGB.jpg"
          />
        </Link>
      </LogoLinkContainer>
      <LinksContainer collapsed={isCollapsed}>
        <Link href="/websites">
          <StyledLink>websites</StyledLink>
        </Link>
        <Link href="/advertising">
          <StyledLink>advertising</StyledLink>
        </Link>
        <Link href="/design">
          <StyledLink>design</StyledLink>
        </Link>
        <StyledMenuIcon onClick={handleMenuDrawerOpen} />
      </LinksContainer>
    </Wrapper>
  );
};
