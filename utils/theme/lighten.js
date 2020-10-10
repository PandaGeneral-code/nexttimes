import * as colors from "./colors";

export const lighten = (colorName = "white", opacity = 1) =>
  `${colors[colorName]}${Math.ceil(opacity * 255).toString(16)}`;
