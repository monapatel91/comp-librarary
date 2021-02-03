import { Chip } from '@material-ui/core';
import styled from 'styled-components';

export const rootClassName = 'dot-chip';

export const StyledChip = styled(Chip)`
  &.dot-chip {
    &.MuiChip-sizeSmall {
      .dot-icon,
      .dot-avatar {
        width: 18px !important;
        height: 18px !important;
      }
    }

    .dot-icon {
      height: 24px;
      margin: 0 -5px 0 4px;
      padding: 0;
      width: 24px;
    }

    .dot-avatar .dot-icon {
      margin: 0;
    }
  }
`;
