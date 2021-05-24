import styled, { css } from 'styled-components';
import { darken } from '@material-ui/core';

export const rootClassName = 'dot-progression-swimlane';

export const StyledProgressionSwimlane = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      .swimlane-header {
        background: ${theme.palette.progressionBoard.board};
        position: sticky;
        top: 42px; // stops the swimline header just below the main header
        z-index: 1;
        display: flex;
        flex-flow: row nowrap;
        margin: 0;
        overflow-x: visible;

        .icon-button {
          margin-left: ${theme.spacing(0.5)}px;
        }

        .swimlane-column {
          display: flex;
          flex-flow: column wrap;
          flex: 1;
          margin: 0 3px;
          text-align: left;
          padding: ${theme.spacing(0.5, 2)};
          word-break: break-word;
          background: ${theme.palette.progressionBoard.swimlaneColumnHeader};
        }
      }

      ul.board {
        display: flex;
        flex-flow: row nowrap;
        margin: 0;
        padding: 0;
        background-color: ${theme.palette.progressionBoard.board};
        overflow-x: visible;

        .board-column {
          background-color: ${theme.palette.progressionBoard.boardColumn};
          display: flex;
          flex: 1;
          flex-flow: column wrap;
          margin: 0 3px;
          min-height: 30px;
          min-width: 285px;
          padding: ${theme.spacing(1)}px;

          .card {
            min-width: 110px;
            border: 1px solid ${theme.palette.progressionBoard.cardBorder};
            margin: ${theme.spacing(1)}px;
            position: relative;
            border-radius: 4px;
            background: ${theme.palette.progressionBoard.card};
            /* light theme = no box-shadow */
            box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2);

            a {
              text-decoration: none;
            }

            &.selected {
              border: 1px solid
                ${theme.palette.progressionBoard.cardSelectedBorder};
              box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.5);
            }

            .identity {
              display: flex;
              justify-content: space-between;
              padding: 2px 10px 0 0;

              a.identifier {
                position: relative;
                padding-left: 30px;
                overflow: visible;
                text-overflow: ellipsis;
                white-space: nowrap;
                &::before {
                  content: '';
                  width: 24px;
                  height: 24px;
                  margin-left: -30px;
                  margin-top: -2px;
                  position: absolute;
                  border-radius: 4px 0 100% 0;
                  background-color: ${theme.palette.progressionBoard
                    .cardCorner};
                }
              }

              .actions-container {
                display: flex;
              }
            }

            .content {
              padding: ${theme.spacing(1)}px;

              a.title {
                color: ${theme.palette.text.primary};
                display: block;
                margin: 5px;
                overflow: hidden;
                padding-bottom: 0.5em;
                text-overflow: ellipsis;
                word-break: break-word;
              }
            }

            .bottom-content {
              display: flex;
              justify-content: space-between;
              padding: ${theme.spacing(1)}px;

              .quality-corner {
                display: flex;
              }

              .revision-range-label {
                text-align: right;

                a {
                  color: ${theme.palette.text.primary};
                  margin-left: 2px;
                }
              }
            }

            .workitems {
              display: flex;
              flex-wrap: wrap;
              overflow: auto;
              padding: 0 5px;

              p {
                text-align: center;
                line-height: 24px;
                margin: 0;
                min-width: 24px;
              }

              & > span {
                cursor: pointer;
                display: flex;

                .dot-icon {
                  font-size: 28px;

                  i.dot-i {
                    height: 100%;
                    position: relative;
                    top: -2px;
                    transition: 0.2s all linear;
                  }
                }

                &:hover {
                  color: ${theme.palette.icon.unknownHover};

                  .dot-icon {
                    font-size: 26px;

                    i.dot-i {
                      top: -1px;
                    }
                  }
                }

                &.selected {
                  border-radius: 50%;
                  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2);
                }

                &.fade {
                  opacity: 0.5;
                }

                &.improve {
                  color: ${theme.palette.icon.improve};

                  &:hover {
                    color: ${theme.palette.icon.improveHover};
                  }

                  &.selected {
                    color: ${darken(theme.palette.icon.improve, 0.1)};
                  }
                }

                &.maintain {
                  color: ${theme.palette.icon.maintain};

                  &:hover {
                    color: ${theme.palette.icon.maintainHover};
                  }

                  &.selected {
                    color: ${darken(theme.palette.icon.maintain, 0.1)};
                  }
                }

                &.improve,
                &.maintain {
                  &.emphasized {
                    color: #c6f1ff;

                    &:hover {
                      color: #d1f3ff;
                    }
                  }
                }
              }
            }
          }
        }
      }

      .dot-icon i {
        &.icon-rogue-commits {
          color: ${theme.palette.icon.rogueCommits};
        }

        &.icon-file-dotted {
          color: ${theme.palette.icon.fileDotted};
        }
      }
    }
  `}
`;
