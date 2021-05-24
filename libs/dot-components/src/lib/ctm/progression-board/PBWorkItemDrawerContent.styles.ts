import styled, { css } from 'styled-components';
import { lighten } from '@material-ui/core';
import { DotTypography } from '../../components/typography/Typography';

export const rootClassName = 'pb-workitem-drawer';

export const StyledTooltipContent = styled(DotTypography)`
  ${({ theme }) => css`
    color: ${theme.palette.layer.n0};
  `}
`;

export const StyledPBWorkItemDrawerContent = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      .drawer-header {
        padding: 0 10px 0 16px;
        display: flex;
        align-items: center;
        height: 90px;
        box-shadow: inset 0px -1px 0px ${
          theme.palette.progressionBoard.boardColumnHeader
        };

        .wi-external-key {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          flex-grow: 1;
        }

        .work-item-type-circle {
          flex-shrink: 0;
          margin: ${theme.spacing(0, 2, 0, 0)};

          &.improve {
            background-color: ${lighten(theme.palette.icon.improve, 0.8)};
            i {
              color: ${theme.palette.icon.improve}
            }
          }

          &.maintain {
            background-color: ${lighten(theme.palette.icon.maintain, 0.8)};
            i {
              color: ${theme.palette.icon.maintain}
            }

            &.emphasized {
              background-color: ${lighten(theme.palette.icon.emphasized, 0.8)};
              i {
                color: ${theme.palette.icon.emphasized}
              }
            }
          }
        }
      }

      .drawer-content {
        overflow-y: auto;
        height: 100%;
        padding: ${theme.spacing(2, 2)};

        .owner-name, .source-body {
          margin: ${theme.spacing(0, 0, 0, 2)};
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .drawer-content-title {
          margin: ${theme.spacing(0, 0, 3)};
        }

        .drawer-content-description {
          margin: ${theme.spacing(2, 0, 0)};
          padding: ${theme.spacing(0, 2, 3)};
        }

        .content-divider {
          box-shadow: inset 0px -1px 0px ${
            theme.palette.progressionBoard.boardColumnHeader
          };
          margin: ${theme.spacing(0, -2)};
        }

        .drawer-content-owner-title {
          margin: ${theme.spacing(3, 0, 0)};
        }

        .drawer-content-owner {
          padding: ${theme.spacing(2, 0, 0)};
          display: flex;
          align-items: center;

          .owner-avatar {
            background-color: ${theme.palette.layer['50']};
          }
        }

        .drawer-content-source-title {
          margin: ${theme.spacing(3, 0, 0)};
        }

        .drawer-content-source {
          margin: ${theme.spacing(2, 0, 3)};
          display: flex;
          align-items: center;

          .source-avatar-icon {
            background-color: ${theme.palette.layer['50']};
          }

          .source-body {
            flex-grow: 1;
          }

          .source-open-btn {
            flex-shrink: 0;
          }
        }
      }
  `}
`;
