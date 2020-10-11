import styled from "styled-components";

const RootWrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden auto;

  button {
    border: 0px solid;
    cursor: pointer;
    outline: none;
    text-transform: uppercase;
  }

  h1 {
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: 0.5rem;
    line-height: 3rem;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 900;
    letter-spacing: 0.4rem;
    line-height: 1.7em;
  }

  h4 {
    font-size: 1.4rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    line-height: 2.1rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8rem;
  }
`;

export const ContainerWrapper = styled.div``;

export default RootWrapper;
