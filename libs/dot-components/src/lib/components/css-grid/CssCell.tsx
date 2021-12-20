import React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '@mui/material/styles';
import { Breakpoint } from '@mui/material/styles/createBreakpoints';
import { defaultColumns } from './CssGrid';
import { CommonProps } from '../CommonProps';

export interface CellSize {
  span?: number;
  start?: number;
}

export type Placement =
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'stretch'
  | 'flex-start';

export interface CssCellProps extends CommonProps {
  /** Flexbox align-items for the cell wrapper div */
  alignItems?: Placement;
  /** Shorthand for grid-row-start / grid-column-start / grid-row-end, grid-column-end */
  area?: string;
  /** Text align center */
  center?: boolean;
  /** Cell content */
  children?: React.ReactNode | Array<React.ReactNode>;
  /** Shorthand for grid-column-start / grid-column-end */
  gridColumn?: string;
  /** Cell height */
  height?: number | string;
  /** Flexbox justify-content for the cell wrapper div */
  justifyContent?: Placement;
  /** Large column breakpoint */
  lg?: CellSize;
  /** Large column breakpoint */
  md?: CellSize;
  /** Center align vertically and horizontally with flex, used by default */
  middle?: boolean;
  /** Small column breakpoint */
  sm?: CellSize;
  /** Column start when Cell column breakpoints are not used */
  start?: number | string;
  /** Row start override */
  top?: number | string;
  width?: number;
  /** Extra large column breakpoint */
  xl?: CellSize;
  /** Extra small column breakpoint */
  xs?: CellSize;
}

const breakpointsGetter = (
  value: CellSize,
  theme: Theme,
  breakpoint: Breakpoint
) => {
  return `
  ${theme.breakpoints.up(breakpoint)} {
    ${`grid-column-start: ${value.start ? value.start : 1}`};
    grid-column-end: ${`span ${
      value.span ? value.span : defaultColumns[breakpoint]
    }`};
  }
  `;
};

export const Cell = ({ children, className }: CssCellProps) => {
  return <div className={className}>{children}</div>;
};

export const CssCell = styled(Cell)`
  ${({
    alignItems = 'stretch',
    area,
    center = true,
    gridColumn,
    height,
    justifyContent = 'center',
    lg,
    middle = true,
    md,
    sm,
    start,
    theme,
    top,
    width,
    xl,
    xs,
  }) => css`
    height: ${height ? height : '100%'};
    min-width: 0;
    box-sizing: border-box;
    ${top && `grid-row-start: ${top}`};
    ${center && `text-align: center`};
    ${!start && `grid-column-start: ${start}`};
    ${!width && `grid-column-end: span ${width}`};
    grid-row-end: ${height && `span ${height}`};
    ${area && `grid-area: ${area}`};
    ${
      middle &&
      `
    display: inline-flex;
    flex-flow: column wrap;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    justify-self: stretch;
  `
    };
    ${xs && breakpointsGetter(xs, theme, 'xs')}
    ${sm && breakpointsGetter(sm, theme, 'sm')}
    ${md && breakpointsGetter(md, theme, 'md')}
    ${lg && breakpointsGetter(lg, theme, 'lg')}
    ${lg && breakpointsGetter(lg, theme, 'lg')}
    ${xl && breakpointsGetter(lg, theme, 'xl')}
    grid-column: ${gridColumn};
    }
  `}
`;
