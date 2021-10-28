import { Popper } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-menu';
export const popperClassName = 'dot-popper';

export const StyledPopper = styled(Popper)`
  ${({ theme }) => css`
    &.${rootClassName}, &.${popperClassName} {
      &.loading .MuiPaper-root {
        align-items: center;
        display: flex;
        justify-content: center;
        min-height: 200px;
        min-width: 200px;
      }

      ul,
      .dot-action-item {
        background: ${theme.palette.product === 'agility' &&
        theme.palette.agilityInterface.menuBg};
      }

      ul {
        box-sizing: content-box;
        min-width: 112px;
        max-height: calc(100vh - 24px);
        overflow: auto;

        .dot-li {
          &:hover {
            background: ${theme.palette.product === 'agility' &&
            theme.palette.agilityInterface.fixedCol};
          }

          &:active,
          &:focus {
            background: ${theme.palette.product === 'agility' &&
            theme.palette.agilityInterface.activeCardBg};
          }
        }

        .dot-link {
          color: ${theme.palette.product === 'agility' &&
          theme.palette.layer.n700};
        }
      }

      .dot-action-item {
        height: ${theme.spacing(7)}px;
        border-top: 1px solid ${theme.palette.grey[100]};
        line-height: inherit;

        button.dot-button {
          border-radius: ${theme.spacing(0, 0, 0.5, 0.5)};
          justify-content: flex-start;
          height: 100%;
          margin: 0;

          &:focus-visible {
            background-color: ${theme.palette.product === 'agility' &&
            theme.palette.type === 'dark'
              ? theme.palette.layer.n200
              : theme.palette.layer.n100};
          }

          .MuiButton-label {
            gap: ${theme.spacing(3)}px;

            .MuiButton-startIcon {
              margin-left: 0;

              .dot-icon {
                flex-shrink: 0;
              }
            }
          }
        }
      }
    }
  `}
`;
