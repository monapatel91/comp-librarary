import styled from 'styled-components';
import { DotDialog } from '@digital-ai/dot-components';

export const rootClassName = 'form-result-dialog';

export const StyledDotDialog = styled(DotDialog)`
  &.${rootClassName} {
    .form-child-list {
      margin: 0 0 0 16px;
    }

    .dot-dialog-content {
      min-width: 500px;
    }
  }
`;
