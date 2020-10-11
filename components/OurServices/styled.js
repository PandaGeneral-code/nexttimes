import { motion } from "framer-motion";
import styled from "styled-components";

export const AnimatedListItem = styled(motion.li)`
  align-items: center;
  background-color: ${(props) =>
    props.theme[props.customStyle.backgroundColor.colorName]};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  overflow: hidden;
  padding: 3rem;

  &:last-child {
    margin: 0;
  }

  h4 {
    color: ${(props) => props.theme[props.customStyle.title.color.colorName]};
    font-size: 18px;
    font-weight: 900;
    letter-spacing: 5px;
    margin: 2rem 0 0 0;
    text-align: center;
  }

  p {
    color: ${(props) =>
      props.theme.lighten(
        props.customStyle.text.color.colorName,
        props.customStyle.text.color.opacity
      )};
    font-size: 18px;
    line-height: 1.7rem;
    margin: 1rem 0 0 0;
    padding: 0;
    text-align: center;
  }
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;

  ul,
  AnimatedListItem {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    background: black;
    padding: 1rem;
  }
`;

export default Wrapper;
