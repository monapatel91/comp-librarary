import styled, { css } from 'styled-components';

export const rootClassName = 'dot-inline-edit';

export const StyledInlineEdit = styled.div`
  ${({ theme }) => css`
    &.dot-inline-edit {
      color: ${theme.palette.grey[700]};

      &:not(.disabled):not(.editing) {
        &:hover,
        &:focus {
          .MuiInputAdornment-root {
            display: flex;
          }
        }
      }

      .MuiInputAdornment-root {
        display: none;
      }

      .editing-actions {
        display: flex;
        justify-content: flex-end;
        margin-top: ${theme.spacing(0.5)};

        .dot-icon-btn {
          background: ${theme.palette.grey[0]};
          border: 1px solid ${theme.palette.grey[300]};
          color: ${theme.palette.grey[700]};
          margin-left: ${theme.spacing(1)};
          padding: ${theme.spacing(0.25)};

          &:hover {
            background: ${theme.palette.grey[50]};
          }
        }
      }

      .inline-edit {
        &:hover,
        &:focus,
        &:active {
          cursor: pointer;
        }
      }

      // icon already has spacing, strip the extra
      .MuiOutlinedInput-adornedEnd {
        padding-right: 0;
        margin-left: 0;

        .dot-icon {
          height: auto;
          width: auto;
        }
      }
    }
  `}
`;
