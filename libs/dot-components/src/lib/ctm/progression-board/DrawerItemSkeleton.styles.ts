import styled, { css } from 'styled-components';

export const rootClassName = 'drawer-item-skeleton';

export const StyledDrawerItemSkeleton = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      display: flex;
      align-items: center;

      .avatar-skeleton {
        flex-shrink: 0;
        margin: ${theme.spacing(0, 2, 0, 0)};
        width: 40px;
        height: 40px;
      }

      .content-skeleton {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        flex-grow: 1;
        margin: ${theme.spacing(0, 1, 0, 0)};
      }

      .icon-skeleton {
        width: 20px;
        height: 20px;
      }
    }
  `}
`;
