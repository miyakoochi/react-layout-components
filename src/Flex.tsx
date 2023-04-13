import React, { FC } from "react";
import { FlexProps } from "./types";

const Flex: FC<FlexProps> = ({
  width,
  height,
  direction,
  justifyContent,
  alignItems,
  wrap,
  grow,
  shrink,
  basis,
  flex,
  children,
  style: overriddenStyle,
  ...rest
}) => {
  const style = {
    display: "flex",
    width,
    height,
    flexDirection: direction,
    justifyContent,
    alignItems,
    flexWrap: wrap,
    flexGrow: grow,
    flexShrink: shrink,
    flexBasis: basis,
    flex,
    ...overriddenStyle,
  };

  return (
    <div style={style} {...rest}>
      {children}
    </div>
  );
};

export default Flex;
