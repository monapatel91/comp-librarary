import styled, { css } from 'styled-components';

export const rootClassName = 'drawer-item';

export const StyledDrawerItem = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      display: flex;
      align-items: center;

      .dot-avatar {
        flex-shrink: 0;
        margin: ${theme.spacing(0, 2, 0, 0)};

        img {
          width: 20px;
          height: 20px;
        }
      }

      .content {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        flex-grow: 1;
      }
    }
  `}
`;
