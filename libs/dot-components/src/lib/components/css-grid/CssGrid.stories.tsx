import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { CssCell } from './CssCell';
import { CssGrid, CssGridProps } from './CssGrid';
import { CssGridDebug } from './CssGridDebug';
import styled, { css } from 'styled-components';

const gridClassName = 'demo-cell';

export default {
  title: 'Experimental/CssGrid',
  component: CssGrid,
  argTypes: {
    className: { defaultValue: gridClassName },
    gap: { defaultValue: '24px' },
    height: { defaultValue: '600px' },
    rows: { defaultValue: '80px 200px 100px' },
  },
} as Meta;

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

export const Default: Story<CssGridProps> = (args) => (
  <StyledGrid {...args}>
    {Array.from(Array(24).keys()).map((item) => (
      <div>Content {item + 1}</div>
    ))}
  </StyledGrid>
);

export const DebugCssGrid: Story<CssGridProps> = (args) => (
  <CssGridDebug showInfo />
);

export const CssGridCell: Story<CssGridProps> = (args) => (
  <>
    <CssGridDebug showInfo />
    <StyledGrid {...args} rows="minmax(100px, auto) 400px 100px">
      <CssCell
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
        middle
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
  </>
);
