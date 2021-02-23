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
            &.icon-error-outlines {
              color: ${theme.palette.icon.errorOutlines};
            }

            &.icon-error-solid {
              color: ${theme.palette.icon.errorSolid};
            }

            &.icon-info-solid {
              color: ${theme.palette.icon.infoSolid};
            }

            &.icon-rogue-commits {
              color: ${theme.palette.icon.rogueCommits};
            }

            &.icon-file-dotted {
              color: ${theme.palette.icon.fileDotted};
            }

            &.icon-pending-clock {
              color: ${theme.palette.text.primary};
            }

            &.icon-check-solid {
              color: ${theme.palette.icon.checkSolid};
            }

            &.icon-thumbs-down {
              color: ${theme.palette.icon.thumbsDown};
            }

            &.icon-lock {
              color: ${theme.palette.icon.lock};
            }
          }
        }
      }
    }
  `}
`;
