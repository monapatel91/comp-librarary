import { Popper } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-menu';

export const StyledPopper = styled(Popper)`
  ${({ theme }) => css`
    ul,
    .list-subheader {
      background: ${
        theme.palette.product === 'agility' &&
        theme.palette.agilityInterface.menuBg
      };
    }

    ul {
      min-width: 112px;
      max-height: calc(100vh - 24px);
      overflow: auto;

      .dot-li {
        &:hover {
          background: ${
            theme.palette.product === 'agility' &&
            theme.palette.agilityInterface.fixedCol
          };

          &:active,
          &:focus {
            background: ${
              theme.palette.product === 'agility' &&
              theme.palette.agilityInterface.activeCardBg
            };
          }
        }

        .dot-link {
          color: ${
            theme.palette.product === 'agility' && theme.palette.layer.n700
          };
        }
      }
    }

    .action-item {
      height: ${theme.spacing(7)}px;
      border-top: 1px solid ${
        theme.palette.product === 'agility'
          ? theme.palette.layer.n50
          : theme.palette.layer.n100
      };
      line-height: inherit;

      &, button {
        border-radius: ${theme.spacing(0, 0, 0.5, 0.5)};
      }

      button {
        justify-content: flex-start;
        height: 100%;
        margin: 0;

        .dot-icon {
          margin: ${theme.spacing(0, 3, 0, 0)};
        }
      }
  `}
`;
