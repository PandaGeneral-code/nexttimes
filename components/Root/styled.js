import styled from "styled-components";

const RootWrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden auto;
  padding: 1rem 0 0 0;

  button {
    background-color: ${(props) => props.theme.internationalOrange};
    border: 0px;
    color: white;
    cursor: pointer;
    display: flex;
    font-weight: 700;
    letter-spacing: 3px;
    margin: 0 0 1rem 1rem;
    outline: none;
    padding: 0.5rem;
    text-transform: uppercase;
  }

  h1 {
    color: ${({ theme: { white } }) => white};
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 7px;
    line-height: 1.4em;
    margin: 0 1rem 1rem 1rem;
  }

  h2 {
    color: ${({ theme: { white } }) => white};
    font-size: 16px;
    font-weight: 900;
    letter-spacing: 5px;
    line-height: 1.4em;
    margin: 0 1rem 1rem 1rem;
  }

  p {
    color: white;
    font-weight: 400;
    line-height: 1.8rem;
    margin: 0 1rem 1rem 1rem;
  }
`;

export const ContainerWrapper = styled.div``;

export default RootWrapper;
