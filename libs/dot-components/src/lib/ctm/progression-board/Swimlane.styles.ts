import styled, { css } from 'styled-components';

export const rootClassName = 'dot-progression-swimlane';

export const StyledProgressionSwimlane = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      &.progression {
        ul.board .board-column {
          min-height: 30px;
          padding: 10px;
        }
      }

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
          display: flex;
          flex-flow: column wrap;
          flex: 1;
          margin: 0 3px;
          min-width: 285px;
          background-color: #e6f0f4;

          .card-container {
            padding: ${theme.spacing(1)}px;

            .card {
              min-width: 110px;
              font-size: 0.857em;
              border: 1px solid #7cb0c5;
              position: relative;
              border-radius: 4px;
              background: ${theme.palette.background.default};
              box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2);

              a {
                text-decoration: none;
              }

              .identity {
                width: 100%;
                position: relative;
                display: table;
                border: none;

                .identity-left,
                .identity-right {
                  display: table-cell;
                  white-space: nowrap;
                  position: relative;

                  * {
                    vertical-align: middle;
                  }

                  span {
                    display: inline-block;
                  }
                }

                .identity-left {
                  padding-right: 14px;

                  .identifier {
                    display: inline-block;
                    padding: 0 10px;
                    height: 14px;
                    line-height: 14px;
                    position: relative;
                    margin-left: 20px;
                    margin-top: -6px;
                    border-bottom-left-radius: 14px 12px;
                    border-bottom-right-radius: 14px 12px;
                    max-width: 125px;
                    top: 1px;
                    overflow: visible;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: #356679;

                    .environments & {
                      display: none;
                    }

                    a {
                      color: #244451;
                    }
                  }

                  &::before {
                    content: '';
                    width: 24px;
                    height: 24px;
                    position: absolute;
                    border-radius: 4px 0 100% 0;
                    top: -1px;
                    background-color: #7cb0c5;
                  }
                }

                .identity-right {
                  text-align: right;
                  border-radius: 0 0 0 24px;
                  position: relative;

                  .actions-container {
                    margin: auto;
                    text-align: left;
                    display: flex;
                    justify-content: flex-end;
                    min-width: 20px;
                    height: 20px;
                    padding-right: 10px;

                    .action {
                      height: 100%;
                      width: 16px;
                      display: flex;
                      align-items: center;
                      justify-items: center;

                      .svg-icon,
                      span {
                        height: 100%;
                        width: 100%;
                        display: block;

                        svg {
                          width: 12px;
                          height: 12px;
                        }
                      }

                      .action-menu {
                        position: absolute;
                        top: 20px;
                        right: 0;
                        border: 1px solid #5d9eb7;
                        min-width: 100px;
                        background: #9ac2d2;

                        .action-menu-item {
                          cursor: pointer;
                          padding: 5px;
                          color: #356679;

                          &:hover {
                            background: #31363e;
                            color: ${theme.palette.background.default};
                          }
                        }
                      }
                    }
                  }
                }
              }

              .content {
                padding: 1em;

                .title {
                  margin: 5px;
                  overflow: hidden;
                  padding-bottom: 0.5em;
                  text-overflow: ellipsis;
                  font-size: 18px;
                  font-weight: 700;
                  word-break: break-word;
                  color: #356679;

                  a {
                    font-size: 18px;
                    font-weight: 700;
                    color: #244451;
                  }
                }
              }

              .bottom-content {
                width: 100%;
                display: table;
                vertical-align: bottom;
                padding: 8px 0;

                .bottom-content-left {
                  padding: 0 5px;
                  margin-bottom: 5px;
                  width: 30%;
                  display: table-cell;
                  vertical-align: bottom;

                  .quality-corner {
                    margin: auto;
                    text-align: center;
                    display: flex;
                    justify-content: flex-start;
                    min-width: 20px;
                    height: 24px;

                    .qcicon {
                      height: 100%;
                      width: 20px;
                      display: flex;
                      align-items: center;
                      justify-items: center;

                      .svg-icon,
                      span {
                        height: 100%;
                        width: 100%;
                        display: block;
                        vertical-align: baseline;

                        svg {
                          width: 16px;
                          height: 24px;
                        }

                        &.drip-chevron svg {
                          cursor: pointer;
                          position: relative;
                          transform: rotate(90deg);
                        }
                      }
                    }
                  }
                }

                .bottom-content-right {
                  padding: 0 5px;
                  margin-bottom: 5px;
                  width: 70%;
                  display: table-cell;
                  vertical-align: bottom;
                  text-align: right;

                  > span {
                    color: black;
                  }

                  a {
                    color: #244451;
                  }
                }
              }
            }
          }

          .card .workitems,
          .progression .workitems {
            display: block;
            margin: 0;
            overflow: auto;

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
          }

          .progression .workitems li,
          .card .workitems > li {
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

          .workitems {
            display: flex;
            flex-direction: row-reverse;
            justify-content: flex-end;
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
      }
    }
  `}
`;
