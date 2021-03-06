import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.lighten("shuttleGray", 0.7)};
  color: white;
  margin: 0 1rem 1rem 1rem;
  padding: 1rem 1rem 1rem 1rem;

  button {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.shadow};
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    line-height: 1.8rem;
    padding: 0.5rem;
    margin: 0;
  }

  h1 {
    color: ${(props) => props.theme.white};
    margin: 0 0 1rem 0;
  }

  h4 {
    color: ${(props) => props.theme.white};
  }

  img {
    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme.white};
    margin: 0 0 1rem 0;
  }
`;

export default Wrapper;
