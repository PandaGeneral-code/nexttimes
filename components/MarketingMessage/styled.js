import { Progress } from "antd";
import styled from "styled-components";

export const GraphContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    text-align: center;
    margin: 1rem 0 0 0;
    padding: 1rem 0 0 0;
  }
`;

export const StyledProgress = styled(Progress).attrs((props) => ({
  strokeColor: props.theme[props.color],
  strokeWidth: 2,
}))``;

export const StyledProgressBar = styled(Progress).attrs((props) => ({
  strokeColor: props.theme.internationalOrange,
  strokeWidth: 15,
}))``;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.white};
  padding: 0 1rem 0 1rem;

  a {
    color: ${(props) => props.theme.internationalOrange};
  }

  h1 {
    color: ${(props) => props.theme.ebonyClay};
    margin: 1rem 0 1rem 0;
    padding: 0;
  }

  p {
    color: ${(props) => props.theme.doveGray};
    margin: 0 0 1rem 0;
    text-align: right;
  }
`;

export default Wrapper;
