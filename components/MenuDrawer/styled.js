import { Drawer } from "antd";
import styled from "styled-components";

export const LinkButton = styled.button`
  color: ${(props) =>
    props.custom.active
      ? props.theme.internationalOrange
      : props.theme.shipGray};
  cursor: pointer;
  background-color: black;
  border: 0px solid;
  font-size: 1.75rem;
  font-weight: 900;
  letter-spacing: 3px;
  outline: none;
  text-align: left;
  tex-transform: uppercase;

  &:hover {
    color: ${(props) => props.theme.internationalOrange};
  }
`;

export const NavButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 35%;
  justify-content: space-around;
  }
`;

export const StyledDrawer = styled(Drawer).attrs(() => ({
  bodyStyle: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    margin: 0,
    padding: 0,
  },
  drawerStyle: { backgroundColor: "black", margin: 0, padding: 0 },
}))``;

const Wrapper = styled.div``;

export default Wrapper;
