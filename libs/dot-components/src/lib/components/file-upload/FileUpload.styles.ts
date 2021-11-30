import styled, { css } from 'styled-components';

export const rootClassName = 'dot-file-upload';
export const containerClassName = `${rootClassName}-upload-container`;

export const StyledFileUploadContainer = styled.div`
  ${({ theme }) => css`
    &.${containerClassName} {
      .dot-list-item {
        &.file-success {
          .dot-list-item-end-icon .dot-icon i:before {
            color: ${theme.palette.secondary.main};
          }
        }

        &.file-error {
          .MuiListItemText-secondary,
          .dot-list-item-end-icon .dot-icon i:before {
            color: ${theme.palette.error.main};
          }
        }
      }
    }
  `}
`;

export const StyledFileUpload = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      align-items: center;
      background: ${theme.palette.layer.n50};
      border: 2px dashed ${theme.palette.layer.n300};
      border-radius: 4px;
      color: ${theme.palette.layer.n500};
      display: flex;
      flex-direction: column;
      flex-wrap: wrap
      justify-content: center;
      padding: ${theme.spacing(3, 0)};
      margin-bottom: ${theme.spacing(1)}px;

      .dot-icon {
        color: ${theme.palette.layer.n100};
        font-size: 100px;

        i.dot-i {
          height: 100px;
        }
      }
    }
  `}
`;
