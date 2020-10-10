import styled from "styled-components";

const RootWrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden auto;
  padding: 1rem 0 0 0;

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
`;

export const ContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1rem;
  margin: 0 1rem 1rem; 1rem;

`;

export default RootWrapper;
