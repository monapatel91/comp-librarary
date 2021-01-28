import { Icon, Theme } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-icon';

export const StyledIcon = styled(Icon)`
  ${({ theme }: { theme: Theme }) => css`
    &.dot-icon {
      align-items: center;
      box-sizing: content-box;
      display: flex;
      font-size: 18px;
      height: 24px;
      justify-content: center;
      padding: ${theme.spacing(1)}px;
      width: 24px;

      &.MuiIcon-fontSizeLarge {
        font-size: 28px;
        height: 35px;
        width: 35px;
      }
      &.MuiIcon-fontSizeSmall {
        font-size: 16px;
        height: 20px;
        width: 20px;
      }
    }
  `}
`;
