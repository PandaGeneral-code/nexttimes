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
  padding: 1.5rem 1rem 1.5rem 1rem;

  &:last-child {
    margin: 0;
  }

  h4 {
    color: ${(props) => props.theme[props.customStyle.title.color.colorName]};
    margin: 0.5rem 0 0.5rem 0;
    text-align: center;
  }

  p {
    color: ${({
      customStyle: {
        text: {
          color: { colorName, opacity },
        },
      },
      theme: { lighten },
    }) => lighten(colorName, opacity)};
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
