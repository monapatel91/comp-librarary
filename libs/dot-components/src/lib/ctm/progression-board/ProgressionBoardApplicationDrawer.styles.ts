import styled, { css } from 'styled-components';

export const rootClassName = 'dot-pb-application-drawer';

export const StyledProgressionBoardApplicationDrawer = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      .drawer-header {
        padding: 0 10px 0 16px;
        display: flex;
        align-items: center;
        height: 90px;
        border-bottom: 1px solid ${theme.palette.grey[200]};

        .application-icon {
          flex-shrink: 0;
          margin: ${theme.spacing(0, 2, 0, 0)};
        }

        .header-title {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          flex-grow: 1;
        }
      }

      .drawer-content {
        height: 100%;
        overflow-y: auto;
        padding: ${theme.spacing(3, 2)};

        .dot-text-field.application-name,
        .dot-autocomplete.source-control,
        .dot-autocomplete.source-control-server,
        .dot-autocomplete.ticket-system,
        .dot-autocomplete.ticket-system-server,
        .dot-form-control-label.add-another-cb,
        .selected-source-controls {
          padding: ${theme.spacing(0, 0, 2)};
        }

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
    }
  `}
`;
