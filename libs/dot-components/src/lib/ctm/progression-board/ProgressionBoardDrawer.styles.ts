import styled, { css } from 'styled-components';
import { lighten } from '@material-ui/core';
import { DotDrawer } from '../../components/drawer/Drawer';

export const rootClassName = 'pb-drawer';

export const StyledDotDrawer = styled(DotDrawer)`
  ${({ theme }) => css`
      .dot-drawer-paper {
        padding: 0;
        border: none;
        box-shadow: inset 1px 0 ${theme.palette.grey[200]};
        transition: width 0.2s;
      }
    }
  `}
`;

export const StyledProgressionBoardDrawer = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      height: 100%;

      .drawer-header {
        padding: 0 10px 0 16px;
        display: flex;
        align-items: center;
        height: 90px;
        border-bottom: 1px solid ${theme.palette.grey[200]};

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
              background-color: ${lighten('#c6f1ff', 0.8)};
              i {
                color: #c6f1ff
              }
            }
          }
        }
      }

      .drawer-content {
        overflow-y: auto;
        height: 100%;
        padding: ${theme.spacing(2, 2)};
        word-break: break-word;

        .drawer-content-title {
          margin: ${theme.spacing(0, 0, 3)};
        }

        .drawer-content-description {
          margin: ${theme.spacing(2, 0, 0)};
          padding: ${theme.spacing(0, 2, 3)};
        }

        .content-divider {
          background-color: ${theme.palette.grey[200]};
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

          .owner-name {
            margin: ${theme.spacing(0, 0, 0, 2)};
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
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
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            margin: ${theme.spacing(0, 0, 0, 2)};
            flex-grow: 1;
          }

          .source-open-btn {
            flex-shrink: 0;
          }
        }
      }
  `}
`;
