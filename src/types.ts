import React from "react";

export type GridProps = {
  columns?: string | number;
  rows?: string | number;
  columnGap?: string | number;
  rowGap?: string | number;
  justifyContent?: string;
  alignItems?: string;
  areas?: string;
  autoRows?: string;
  autoColumns?: string;
  autoFlow?: string;
  grid?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
