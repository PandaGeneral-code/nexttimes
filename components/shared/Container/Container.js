import React from "react";

import Wrapper from "./styled";

export const Container = ({
  animationProps: { enterFrom } = { enterFrom: "top" },
  children,
  customStyle = { heading: { color: { colorName: "white" } } },
  id,
  onClick,
}) => {
  return (
    <Wrapper
      animate={{ opacity: 1, x: 0, y: 0 }}
      customStyle={customStyle}
      initial={{
        opacity: 0,
        x: enterFrom === "left" ? -100 : enterFrom === "right" ? 100 : 0,
        y: enterFrom === "top" ? -100 : enterFrom === "bottom" ? 100 : 0,
      }}
      layoutId={id}
      onClick={() => onClick()}
      transition={{ duration: 1, ease: "backIn" }}
    >
      {children}
    </Wrapper>
  );
};
