import styled, { css } from 'styled-components';

export const rootClassName = 'application-form';

export const StyledApplicationForm = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      .dot-form-control-label.add-another-cb,
      .selected-source-controls,
      .dot-button.add-more-btn {
        display: flex;
        margin: ${theme.spacing(0, 0, 4, 'auto')};
      }

      .content-divider {
        background-color: ${theme.palette.grey[200]};
        margin: ${theme.spacing(4, -2, 2)};
      }

      .form-action-group {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
      }

      .active-payload-url-line {
        display: flex;
        align-items: center;

        .payload-url-help-btn {
          margin: ${theme.spacing(0, 0, 0, 1)};
        }
      }

      .selected-source-control {
        display: flex;
        align-items: center;
        padding: ${theme.spacing(0, 0, 1)};

        .source-avatar-icon {
          flex-shrink: 0;
          margin: ${theme.spacing(0, 2, 0, 0)};
        }

        .server-name {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          flex-grow: 1;
        }
      }
    }
  `}
`;
