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
        top: 36px; // stops the swimline header just below the main header
        z-index: 1;
        display: flex;
        flex-flow: row nowrap;
        margin: 0;
        overflow-x: visible;
        color: #244451;

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
          background: #c3dbe4;
          color: #244451;
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
          background-color: #e6f0f4;
          display: flex;
          flex: 1;
          flex-flow: column wrap;
          margin: 0 3px;
          min-height: 30px;
          min-width: 285px;
          padding: 10px;

          .card {
            min-width: 110px;
            font-size: 0.857em;
            border: 1px solid #7cb0c5;
            margin: ${theme.spacing(1)}px;
            position: relative;
            border-radius: 4px;
            background: ${theme.palette.background.default};
            box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2);

            a {
              text-decoration: none;
            }

            .identity {
              color: #356679;
              display: flex;
              justify-content: space-between;
              padding: 2px 10px 0 0;

              a.identifier {
                color: #244451;
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
                  background-color: #7cb0c5;
                }
              }

              .actions-container {
                display: flex;
              }
            }

            .content {
              padding: ${theme.spacing(1)}px;

              a.title {
                color: #244451;
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
                  color: #244451;
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
                color: #61666e;
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
                  color: #467f1b;

                  &.hover {
                    color: #5da924;
                  }
                }

                &.maintain {
                  color: #690100;

                  &.hover {
                    color: #bc0100;
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
          color: #d52101;
        }

        &.icon-error-solid {
          color: #005293;
        }

        &.icon-info-solid {
          color: #69be28;
        }

        &.icon-rogue-commits {
          color: #eaab00;
        }

        &.icon-file-dotted {
          color: #005293;
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

        &.icon-lock {
          color: #d52101;
        }
      }
    }
  `}
`;
