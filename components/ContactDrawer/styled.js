import { Drawer, Input } from "antd";
import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const StyledDrawer = styled(Drawer).attrs((props) => ({
  bodyStyle: { color: "white" },
  drawerStyle: { backgroundColor: props.theme.lighten("ebonyClay", 0.83) },
}))``;

export const StyledInput = styled(Input)`
  background-color: ${(props) => props.theme.ebonyClay};
  border: 0px solid;
  color: white;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 30px;
  margin: 0 0 0.5rem 0;

  &::placeholder {
    color: white;
    font-weight: 700;
    letter-spacing: 2px;
  }
`;

export const StyledTextArea = styled(Input.TextArea)`
  background-color: ${(props) => props.theme.ebonyClay};
  border: 0px solid;
  color: white;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 30px;
  margin: 0 0 0.5rem 0;

  &::placeholder {
    color: white;
    font-weight: 700;
    letter-spacing: 2px;
  }
`;

const Wrapper = styled.div`
  button {
    background-color: ${(props) => props.theme.internationalOrange};
    border: 0px solid;
    color: ${(props) => props.theme.white};
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    line-height: 1.8rem;
    outline: none;
    padding: 0.5rem;
    margin: 0 0 1rem 0;
    text-transform: uppercase;
  }

  h1 {
    color: ${(props) => props.theme.white};
    font-size: 1.5rem;
    font-weight: 900;
    letter-spacing: 0.5rem;
    line-height: 2.25rem;
    margin: 0 0 1rem 0;
    padding: 0;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export default Wrapper;
