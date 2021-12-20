import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '@mui/material/styles';
// import { BreakpointValues } from '@mui/material/styles/createBreakpoints';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';

export interface CssGridProps extends CommonProps {
  /** Cells for Grid */
  children?: ReactNode | ReactNode[];
  /** Columns gap */
  columnGap?: any;
  /** Columns, overrides columnsBreakpoints */
  columns?: number | string;
  /** Breakpoints for columns */
  columnsBreakpoints?: any;
  /** Overall gap column and row */
  gap?: string;
  /** Template to create layout */
  gridTemplateAreas?: string;
  /** Height of the grid */
  height?: string;
  /** Row, overrides columnsBreakpoints */
  rowGap?: any;
  /** Row, configuration */
  rows?: number | string;
  /** Width of the grid */
  width?: string;
}

export const rootClassName = 'dot-grid';

const frGetter = (value: string | number) =>
  typeof value === 'number' ? `repeat(${value}, 1fr)` : value;

const breakpointsGetter = (
  theme: Theme,
  columnsBreakpoints: any,
  columnGap: any,
  rowGap: any
) =>
  `${theme.breakpoints.up('xs')} {
    column-gap: ${`${columnGap.xs}px`};
    grid-template-columns: ${frGetter(columnsBreakpoints.xs)};
    row-gap: ${`${rowGap.xs}px`};
  }
  ${theme.breakpoints.up('sm')} {
    column-gap: ${`${columnGap.sm}px`};
    grid-template-columns: ${frGetter(columnsBreakpoints.sm)};
    row-gap: ${`${rowGap.sm}px`};
  }
  ${theme.breakpoints.up('md')} {
    column-gap: ${`${columnGap.md}px`};
    grid-template-columns: ${frGetter(columnsBreakpoints.md)};
    row-gap: ${`${rowGap.md}px`};
  }
  ${theme.breakpoints.up('lg')} {
    column-gap: ${`${columnGap.lg}px`};
    grid-template-columns: ${frGetter(columnsBreakpoints.lg)};
    row-gap: ${`${rowGap.lg}px`};
  }
  ${theme.breakpoints.up('xl')} {
    column-gap: ${`${columnGap.xl}px`};
    grid-template-columns: ${frGetter(columnsBreakpoints.lg)};
    row-gap: ${`${rowGap.xl}px`};
  }`;

export const defaultGutter: any = {
  xs: 16,
  sm: 16,
  md: 24,
  lg: 24,
  xl: 24,
};

export const defaultColumns: any = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 12,
  xl: 12,
};

export const Grid = ({ className, children }: CssGridProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  return <div className={rootClasses}>{children}</div>;
};

export const StyledGrid = styled(Grid)`
  ${({
    columns,
    columnsBreakpoints = { ...defaultColumns },
    columnGap = { ...defaultGutter },
    gap,
    gridTemplateAreas,
    height,
    rowGap = { ...defaultGutter },
    rows,
    theme,
    width,
  }) => css`
    &.${rootClassName} {
      display: grid;
      grid-template-rows: ${frGetter(rows)};
      ${
        columns
          ? `${columns && `grid-template-columns: ${frGetter(columns)}`};`
          : breakpointsGetter(theme, columnsBreakpoints, columnGap, rowGap)
      }
      ${gridTemplateAreas && `grid-template-areas: ${gridTemplateAreas};`}
      ${gap && `grid-gap: ${gap};`}
      ${width && `width: ${width};`}
      ${height && `height: ${height};`}
  `}
`;

export const CssGrid = (props: CssGridProps) => {
  return <StyledGrid {...props} />;
};
