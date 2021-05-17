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
          color: ${theme.palette.icon.improve};
        }

        &.maintain .dot-icon i {
          color: ${theme.palette.icon.maintain};
        }

        &.unknown .dot-icon i {
          color: #b7bcc4;
        }

        .dot-icon {
          display: inline-block;
          margin-right: 9px;

          i {
            &.icon-rogue-commits {
              color: ${theme.palette.icon.rogueCommits};
            }

            &.icon-file-dotted {
              color: ${theme.palette.icon.fileDotted};
            }
          }
        }
      }
    }
  `}
`;
