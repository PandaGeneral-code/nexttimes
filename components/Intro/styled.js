import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem 1rem 0 1rem;

  button {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.internationalOrange};
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    line-height: 1.8rem;
    padding: 0.5rem;
    margin: 0 0 1rem 0;
  }

  h1 {
    color: ${(props) => props.theme.white};
    margin: 0 0 1rem 0;
    padding: 0;
  }

  h4 {
    color: ${(props) => props.theme.white};
    margin: 0 0 1rem 0;
    padding: 0;
  }

  p {
    color: ${(props) => props.theme.white};
    margin: 0 0 1rem 0;
    padding: 0;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default Wrapper;
