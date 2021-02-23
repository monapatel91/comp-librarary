import styled, { css } from 'styled-components';

export const rootClassName = 'dot-progression-board-legend';

export const StyledProgressionLegend = styled.ul`
  ${({ theme }) => css`
    &.${rootClassName} {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
      width: 516px;

      li {
        box-sizing: border-box;
        display: flex;
        line-height: 20px;
        list-style-type: none;
        margin: 4px;
        width: 48%;

        &.improve .dot-icon i {
          color: ${theme.palette.success.main};
        }

        &.maintain .dot-icon i {
          color: ${theme.palette.error.main};
        }

        &.unknown .dot-icon i {
          color: #b7bcc4;
        }

        .dot-icon {
          display: inline-block;
          margin-right: 9px;

          i {
            &.icon-error-outlines,
            &.icon-lock {
              color: #d52101;
            }

            &.icon-error-solid,
            &.icon-file-dotted {
              color: #005293;
            }

            &.icon-info-solid {
              color: #69be28;
            }

            &.icon-rogue-commits {
              color: #eaab00;
            }

            &.icon-pending-clock {
              color: #244451;
            }

            &.icon-check-solid {
              color: #00a9e0;
            }

            &.icon-thumbs-down {
              color: #6d09a8;
            }
          }
        }
      }
    }
  `}
`;
