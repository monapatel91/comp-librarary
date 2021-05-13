import React from 'react';
import { CssGrid, CssCell, CssGridDebug } from '@digital-ai/dot-components';
import { useTheme } from '@material-ui/core/styles';
import styled, { css } from 'styled-components';

const gridClassName = 'demo-cell';

const StyledGrid = styled(CssGrid)`
  ${() => css`
    &.${gridClassName} {
      font-family: sans-serif;
      width: 100%;
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
  }
`;

export const DemoCssGrid = () => {
  const theme = useTheme();

  return (
    <StyledSection className="section">
      <CssGridDebug showInfo />
      <StyledGrid
        rows="minmax(100px, auto) 400px 100px"
        className={gridClassName}
      >
        <CssCell
          justifyContent="center"
          xs={{ start: 1, span: 2 }}
          sm={{ start: 1, span: 4 }}
          md={{ start: 1, span: 4 }}
        >
          <div>Content 1</div>
        </CssCell>
        <CssCell
          xs={{ start: 3, span: 2 }}
          sm={{ start: 5, span: 8 }}
          md={{ start: 5, span: 8 }}
        >
          <div>Content 2</div>
        </CssCell>
        <CssCell
          alignItems="flex-end"
          xs={{ start: 1, span: 4 }}
          sm={{ start: 1, span: 12 }}
          md={{ start: 1, span: 12 }}
        >
          <div>Content 3</div>
        </CssCell>
        <CssCell
          xs={{ start: 1, span: 4 }}
          sm={{ start: 1, span: 4 }}
          md={{ start: 1, span: 6 }}
        >
          <div>Content 4</div>
        </CssCell>
        <CssCell
          justifyContent="flex-end"
          alignItems="flex-start"
          xs={{ start: 1, span: 4 }}
          sm={{ start: 5, span: 7 }}
          md={{ start: 7, span: 6 }}
        >
          <div>Content 5</div>
        </CssCell>
      </StyledGrid>
    </StyledSection>
  );
};
