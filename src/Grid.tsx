import React, { FC } from "react";
import { GridProps } from "./types";

const Grid: FC<GridProps> = ({
  columns,
  rows,
  areas,
  columnGap,
  rowGap,
  justifyContent,
  alignItems,
  autoRows,
  autoColumns,
  autoFlow,
  grid,
  children,
  style: overriddenStyle,
  ...rest
}) => {
  const style = {
    display: "grid",
    gridTemplateColumns: columns,
    gridTemplateRows: rows,
    gridTemplateAreas: areas,
    columnGap,
    rowGap,
    justifyContent,
    alignItems,
    gridAutoRows: autoRows,
    gridAutoColumns: autoColumns,
    gridAutoFlow: autoFlow,
    grid,
    ...overriddenStyle,
  };

  return (
    <div style={style} {...rest}>
      {children}
    </div>
  );
};

export default Grid;
