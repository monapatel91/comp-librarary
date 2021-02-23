import styled, { css } from 'styled-components';

export const rootClassName = 'dot-progression-swimlane';

export const StyledProgressionSwimlane = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      .swimlane-header {
        background: transparent;
        font-weight: 700;
        font-size: 1.25em;
        position: sticky;
        top: 42px; // stops the swimline header just below the main header
        z-index: 1;
        display: flex;
        flex-flow: row nowrap;
        margin: 0;
        overflow-x: visible;
        color: ${theme.palette.text.primary};

        .icon-button {
          margin-left: ${theme.spacing(0.5)}px;
        }

        .swimlane-column {
          display: flex;
          flex-flow: column wrap;
          flex: 1;
          font-weight: 700;
          margin: 0 3px;
          font-size: 14px;
          text-align: left;
          padding: ${theme.spacing(0.5, 2)};
          word-break: break-word;
          background: ${theme.palette.primary['200']};
          color: ${theme.palette.text.primary};
        }

        .swimlane-subheader {
          font-size: 12px;
        }
      }

      ul.board {
        display: flex;
        flex-flow: row nowrap;
        margin: 0;
        padding: 0;
        background-color: ${theme.palette.background.default};
        overflow-x: visible;

        .board-column {
          background-color: ${theme.palette.primary['100']};
          display: flex;
          flex: 1;
          flex-flow: column wrap;
          margin: 0 3px;
          min-height: 30px;
          min-width: 285px;
          padding: ${theme.spacing(1)}px;

          .card {
            min-width: 110px;
            font-size: 0.857em;
            border: 1px solid ${theme.palette.primary['50']};
            margin: ${theme.spacing(1)}px;
            position: relative;
            border-radius: 4px;
            background: ${theme.palette.background.default};
            box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2);

            a {
              text-decoration: none;
            }

            .identity {
              color: ${theme.palette.text.primary};
              display: flex;
              justify-content: space-between;
              padding: 2px 10px 0 0;

              a.identifier {
                color: ${theme.palette.text.primary};
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
                  background-color: ${theme.palette.primary['500']};
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
                font-size: 18px;
                font-weight: 700;
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
                color: black;
                text-align: right;

                a {
                  color: ${theme.palette.text.primary};
                  margin-left: 2px;
                }
              }
            }

            ul.workitems {
              display: block;
              margin: 0;
              overflow: auto;
              padding: 0 5px;

              li:last-child {
                background: transparent;
                font-size: 12px;
                text-align: center;
                border: 0 solid currentColor;
                font-weight: 700;
                border-radius: 50%;
                line-height: 21px;
                color: ${theme.palette.text.primary};
              }

              & > li {
                display: block;
                float: left;
                margin: 1px;
                height: 20px;
                width: 20px;
                cursor: pointer;
                color: #b7bcc4;
                background-color: currentColor;
                border: 1px solid currentColor;
                border-radius: 50%;
                transition: 0.2s all linear;

                &.hover {
                  color: #bec2c9;
                }

                &.improve {
                  color: ${theme.palette.icon.improve};

                  &.hover {
                    color: darken(${theme.palette.icon.improve});
                  }
                }

                &.maintain {
                  color: ${theme.palette.icon.maintain};

                  &.hover {
                    color: darken(${theme.palette.icon.maintain});
                  }
                }

                &.improve,
                &.maintain {
                  &.emphasized {
                    color: #c6f1ff;

                    &.hover {
                      color: #d1f3ff;
                    }
                  }
                }

                &.split {
                  background: linear-gradient(
                    -45deg,
                    #fff 0%,
                    #fff 50%,
                    currentColor 0%,
                    currentColor 100%
                  );
                }
              }
            }
          }
        }
      }

      .dot-icon i {
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
  `}
`;
