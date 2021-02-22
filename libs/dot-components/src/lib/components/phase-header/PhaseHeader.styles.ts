import styled, { css } from 'styled-components';

export const rootClassName = 'dot-phase-header';

export const StyledPhaseHeader = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      background: ${theme.palette.grey[600]};
      border-radius: 4px;
      color: ${theme.palette.background.default};
      display: flex;
      flex-wrap: nowrap;
      height: 44px;
      padding-right: ${theme.spacing(1)}px;
      width: 300px;

      &:hover,
      &:focus {
        .delete-btn {
          display: flex;
        }
      }

      &.editing {
        .delete-btn {
          display: none;
        }
      }

      .clickable {
        cursor: pointer;
      }

      .phase-color {
        background: rgba(255, 158, 73, 1);
        height: 44px;
        width: ${theme.spacing(2)}px;
        min-width: ${theme.spacing(2)}px;
        padding: 0;
        border-radius: 4px 0 0 4px;
      }

      .phase-content {
        display: flex;
        flex-grow: 2;

        .phase-label {
          padding: 3px ${theme.spacing(0.5)}px 0;

          .dot-inline-edit {
            .editing-actions {
              margin-top: ${theme.spacing(1)}px;
            }

            .MuiFormControl-root {
              margin: 0;

              .MuiInputBase-root {
                color: ${theme.palette.background.default};

                .MuiInputBase-input {
                  font-size: 14px;
                }
                .MuiOutlinedInput-notchedOutline {
                  border: none;
                }
              }
            }

            &:hover,
            &:focus {
              .MuiInputBase-root {
                background: ${theme.palette.grey[900]};
              }
            }

            &.editing {
              width: 275px;
              z-index: 10;

              .MuiInputBase-root {
                background: ${theme.palette.grey[0]};
                color: ${theme.palette.background.default};
              }
            }
          }
        }
      }

      .delete-btn {
        align-self: center;
        background: transparent;
        color: ${theme.palette.background.default};
        cursor: pointer;
        display: none;

        &:hover,
        &:focus {
          background: ${theme.palette.grey[900]};
        }
      }
    }

    ul.phase-color-picker {
      width: 200px;

      li.phase-color-option {
        text-transform: capitalize;
        font-size: 14px;
        color: ${theme.palette.background.default};

        i {
          border-radius: 50%;
          display: inline-block;
          height: 20px;
          margin-right: ${theme.spacing(1.5)}px;
          width: 20px;

          &.build {
            background: rgb(153, 28, 113);
          }
          &.code {
            background: ${theme.palette.primary.main};
          }
          &.deploy {
            background: ${theme.palette.success.main};
          }
          &.monitor {
            background: ${theme.palette.grey[300]};
          }
          &.plan {
            background: ${theme.palette.grey[100]};
          }
          &.test {
            background: rgba(255, 158, 73, 1);
          }
        }
      }
    }
  `}
`;
