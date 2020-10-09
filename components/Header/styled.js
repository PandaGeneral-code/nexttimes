import styled from "styled-components";

export const StyledImage = styled.img`
  transition: all 0.3s ease;
  width: ${(props) => (props.collapsed ? "5rem" : "10rem")};
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
