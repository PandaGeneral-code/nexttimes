import { MenuOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const LogoLinkContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const StyledImage = styled.img`
  transition: all 0.3s ease;
  width: ${(props) => (props.collapsed ? "5rem" : "10rem")};
`;

export const StyledLink = styled.a`
  color: ${(props) => props.theme.shipGray};
  font-weight: 900;
  letter-spacing: 3px;
`;

export const StyledMenuIcon = styled(MenuOutlined)``;

export const LinksContainer = styled.div`
  align-items: flex-end;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  transition: all 0.3s ease;

  a {
    font-size: ${(props) => (props.collapsed ? 0 : "1.25rem")};
    transition: all 0.3s ease;
    visibility: ${(props) => (props.collapsed ? "hidden" : "visible")};
  }

  ${StyledMenuIcon} {
    font-size: ${({ collapsed }) => (collapsed ? "1.5rem" : "0")};
    opacity: ${({ collapsed }) => (collapsed ? "1" : "0")};
    transition: all 0.3s ease;
    visibility: ${({ collapsed }) => (collapsed ? "visible" : "hidden")};
  }
`;

const Wrapper = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${({ theme: { appPadding } }) => appPadding};
`;

export default Wrapper;
