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
          margin-right: 16px;

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
        padding: 0 10px 0 16px;

        .drawer-content-title {
          font-size: 17px;
          line-height: 24px;
        }

        .drawer-content-description {
          font-size: 15px;
          line-height: 22px;
        }
      }
  `}
`;
