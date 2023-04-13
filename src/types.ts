import React from "react";

export type GridProps = {
  width?: string;
  height?: string;
  templateColumns?: string;
  templateRows?: string;
  columnGap?: string;
  rowGap?: string;
  justifyContent?: string;
  alignItems?: string;
  areas?: string;
  autoRows?: string;
  autoColumns?: string;
  autoFlow?: string;
  grid?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export type FlexProps = {
  width?: string;
  height?: string;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  grow?: number;
  shrink?: number;
  basis?: string | number;
  flex?: string | number;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
