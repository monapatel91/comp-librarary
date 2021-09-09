import React from 'react';
import { CssGrid, CssGridDebug } from '@digital-ai/dot-components';
import { useTheme } from '@material-ui/core/styles';
import styled, { css } from 'styled-components';

const gridClassName = 'demo-cell';

const StyledGrid = styled(CssGrid)`
  ${() => css`
    &.${gridClassName} {
      font-family: sans-serif;
      & > * {
        background-color: rgba(0, 0, 255, 0.2);
        border: 2px dashed rgba(0, 0, 255, 0.2);
      }
    }
  `}
`;

const StyledSection = styled.div`
  &.section {
    position: relative;
    height: 100%;
    width: 100%;
    .header {
      grid-area: header;
    }
    .sidebar {
      grid-area: sidebar;
      grid-row: 2 / 5;
    }
    .content-1 {
      grid-area: content-1;
    }
    .content-2 {
      grid-area: content-2;
    }
    .content-3 {
      grid-area: content-3;
    }
    .footer {
      grid-area: footer;
      grid-column: 2 / 4;
    }
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const gridTemplateAreas = `
"header header header"
"sidebar content-1 content-1"
"sidebar content-2 content-3"
"footer footer footer"`;

export const DemoCssGridTemplate = () => {
  const theme = useTheme();

  return (
    <StyledSection className="section">
      <CssGridDebug showInfo />
      <StyledGrid
        gridTemplateAreas={gridTemplateAreas}
        columns="200px 1fr 1fr"
        gap="24px"
        height="600px"
        rows="80px 1fr 1fr 100px"
        width="750px"
        className={gridClassName}
      >
        <div className="item header">header</div>
        <div className="item sidebar">sidebar</div>
        <div className="item content-1">Content-1</div>
        <div className="item content-2">Content-2</div>
        <div className="item content-3">Content-3</div>
        <div className="item footer">footer</div>
      </StyledGrid>
    </StyledSection>
  );
};
