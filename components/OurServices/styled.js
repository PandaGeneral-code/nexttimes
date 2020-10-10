import { motion } from "framer-motion";
import styled from "styled-components";

export const SmallTile = styled(motion.div).attrs(
  ({ animationProps: { direction, id } }) => ({
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    initial: {
      opacity: 0,
      x: direction === "left" ? -200 : direction === "right" ? 200 : 0,
      y: direction === "top" ? -200 : direction === "bottom" ? 200 : 0,
    },
    layoutId: id,
    transition: { duration: 0.5, ease: "easeInOut" },
  })
)`
  align-items: center;
  background-color: ${(props) =>
    props.theme[props.customStyle.background.colorName]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column-start: span
    ${(props) =>
      props.animationProps.id === props.animationProps.selected ? "2" : "1"};
  padding: 1rem;

  h4 {
    color: ${(props) =>
      props.theme[props.customStyle.heading.color.color.colorName]};
    font-weight: 900;
    letter-spacing: 5px;
    line-height: 1.4rem;
    margin: 0.25rem 0 0.5rem 0;
    text-align: center;
  }

  p {
    color: ${(props) => {
      props.theme.lighten();
      return props.theme.lighten(props.customStyle.text.color, 0.7);
    }};
    margin: 0;
    padding: 0;
    text-align: center;
  }
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1rem;
  margin: 0 1rem 1rem 1rem;
`;

export default Wrapper;
