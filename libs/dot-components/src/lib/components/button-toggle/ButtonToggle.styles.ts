import { ToggleButtonGroup } from '@mui/material';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-button-toggle';

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  ${({ theme }) => css`
    &.${rootClassName} {
      .dot-icon {
        + p {
          margin-left: ${theme.spacing(1)}px;
        }
        i {
          height: auto;
        }
      }
      .MuiToggleButton-label {
        color: ${theme.palette.layer.n700};
        p {
          margin-bottom: 0;
        }
      }
      .MuiToggleButtonGroup-groupedHorizontal {
        border: 1px solid ${theme.palette.layer.n300};
        border-radius: 0px;

        :first-child {
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
          margin-left: 0;
        }
        :last-child {
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          margin-right: 0;
        }
      }
    }

    .MuiButtonBase-root {
      &.Mui-disabled p,
      &.Mui-disabled .dot-icon {
        color: ${theme.palette.grey[200]};
      }
    }
  `}
`;
