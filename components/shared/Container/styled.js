import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  align-items: center;
  background-color: ${({
    customStyle: {
      backgroundColor: { colorName },
    },
    theme,
  }) => theme[colorName]};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;

  h4 {
    color: ${(props) => props.theme[props.customStyle.heading.color.colorName]};
    font-weight: 900;
    letter-spacing: 5px;
    text-align: center;
  }
`;

export default Wrapper;
