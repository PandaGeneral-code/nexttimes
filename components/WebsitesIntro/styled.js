import styled from "styled-components";

export const OurServicesContainer = styled.div`
  background-color: ${(props) => props.theme.ebonyClay};

  button {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.gulfStream};
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    line-height: 1.8rem;
    padding: 0.5rem;
    margin: 0 0 1rem 1rem;
    border: 0px solid;
    cursor: pointer;
    outline: none;
    text-transform: uppercase;
  }

  p {
    color: ${(props) => props.theme.white};
    font-size: 1.2rem;
    line-height: 1.8rem;
    padding: 0 1rem 0 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Wrapper = styled.div`
  background-color: black;

  h1 {
    color: ${(props) => props.theme.white};
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: 0.5rem;
    line-height: 3rem;
    margin: 1rem;
    padding: 0;
  }
`;

export default Wrapper;
