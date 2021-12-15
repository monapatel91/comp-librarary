import { useTheme } from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { levelBottom } from '../../theme-provider/common/variables';
import { CssCell } from './CssCell';
import { CssGrid, defaultColumns } from './CssGrid';

const gridClassName = 'debug-grid';
const gridClassContainer = 'debug-grid-container';
const cellClassName = 'debug-cell';

const StyledGridOverlay = styled(CssGrid)`
  ${() => css`
    &.${gridClassName} {
      position: absolute;
      z-index: ${levelBottom};
      width: 100%;
      .${cellClassName} {
        background: rgba(255, 192, 203, 0.4);
        height: 100vh;
      }
    }
  `}
`;

const StyledInfo = styled.div`
  &.breakpoint-info {
    border-radius: 4px 0 0 4px;
    padding: 8px;
    position: fixed;
    background: rgba(255, 255, 255, 0.8);
    right: -1px;
    bottom: 10px;
    box-shadow: 2px 2px 2px #9c9c9c;
    font-family: sans-serif;
    font-size: 11px;
    width: 100px;
    border: 1px solid red;
    ul {
      list-style: none;
      padding-left: 4px;
      margin: 0;
    }
    .list {
      padding-top: 4px;
    }
    .header {
      font-weight: bold;
    }
    .message {
      padding-top: 8px;
      color: red;
    }
  }
`;
const StyledDivContainer = styled.div`
  &.${gridClassContainer} {
    position: relative;
  }
`;

export interface CssGridDebugProps {
  showInfo?: boolean;
}

export const CssGridDebug = ({ showInfo = false }: CssGridDebugProps) => {
  const theme = useTheme();

  const getWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const [width, setWidth] = useState(getWidth());
  const [columns, setColumns] = useState(12);

  const resizeListener = () => {
    getColumns();
  };

  useEffect(() => {
    window.addEventListener('resize', resizeListener);
    getColumns();
    console.warn(
      `You are using the "CssGridDebug" component, please remove before going to production.`
    );
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  const getColumns = () => {
    setWidth(getWidth());
    if (getWidth() > theme.breakpoints.values.xs) {
      setColumns(defaultColumns.sm);
    }
    if (getWidth() > theme.breakpoints.values.md) {
      setColumns(defaultColumns.md);
    }
    if (getWidth() > theme.breakpoints.values.lg) {
      setColumns(defaultColumns.lg);
    }
    if (getWidth() > theme.breakpoints.values.xl) {
      setColumns(defaultColumns.xl);
    }
    if (getWidth() < theme.breakpoints.values.sm) {
      setColumns(defaultColumns.xs);
    }
  };

  return (
    <StyledDivContainer className={gridClassContainer}>
      {showInfo && (
        <StyledInfo className="breakpoint-info">
          <div className="close-container">
            <div className="header">Debug info</div>
          </div>
          <div>
            <ul>
              <li>Columns: {columns}</li>
              <li>Width: {width}</li>
            </ul>
            <div className="header list">Breakpoints</div>
            <ul className="breakpoints">
              {Object.keys(theme.breakpoints.values).map(
                (value: Breakpoint) => {
                  return (
                    <li key={value}>
                      {value}: {theme.breakpoints.values[value]}, col:
                      {defaultColumns[value]}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div className="message">NOT FOR PRODUCTION</div>
        </StyledInfo>
      )}
      <StyledGridOverlay className={gridClassName} rows="minmax(100vh, 100%)">
        {[...Array(columns)].map((item, i) => {
          return (
            <CssCell
              className={`${cellClassName}`}
              key={i}
              start={i + 1}
              width={1}
            ></CssCell>
          );
        })}
      </StyledGridOverlay>
    </StyledDivContainer>
  );
};
