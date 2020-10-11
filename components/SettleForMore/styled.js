import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.lighten("shuttleGray", 0.7)};
  color: white;
  margin: 0 1rem 1rem 1rem;
  padding: 1rem 1rem 1rem 1rem;

  h2 {
  }

  p {
    font-size: 18px;
  }
`;

export default Wrapper;
