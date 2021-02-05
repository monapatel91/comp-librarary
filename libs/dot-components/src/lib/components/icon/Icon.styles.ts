import { Icon } from '@material-ui/core';
import styled from 'styled-components';

export const rootClassName = 'dot-icon';

export const StyledIcon = styled(Icon)`
  &.dot-icon {
    align-items: center;
    box-sizing: content-box;
    display: flex;
    font-size: 20px;
    height: 24px;
    justify-content: center;
    width: 24px;

    &.MuiIcon-fontSizeSmall {
      font-size: 16px;
      height: 20px;
      width: 20px;
    }
  }
`;
