import styled, { css } from 'styled-components';

export const rootClassName = 'dot-progression-swimlane';

export const StyledProgressionSwimlane = styled.div`
  ${({ theme }) => css`
    &.dot-progression-swimlane {
      .swimlane-header {
        background: transparent;
        font-weight: 700;
        font-size: 1.25em;
        position: sticky;
        top: 36px; // stops the swimline header just below the main header
        z-index: 1;
        display: flex;
        flex-flow: row nowrap;
        margin: 0;
        overflow-x: visible;
        color: darken(#438098, 20%);

        .icon-button {
          margin-left: ${theme.spacing(0.5)}px;
        }

        .swimlane-column {
          display: flex;
          flex-flow: column wrap;
          flex: 1;
          font-weight: 700;
          margin: 0 3px;
          font-size: 1.25em;
          text-align: left;
          padding: 8px 20px 5px 20px;
          word-break: break-word;
          background: lighten(#438098, 40%);
          color: darken(#438098, 20%);
        }

        .swimlane-subheader {
          font-size: 12px;
        }
      }
    }
  `}
`;
