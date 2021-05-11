import styled, { css } from 'styled-components';
import { DotForm } from '../../../components';

export const rootClassName = 'application-form';

export const StyledApplicationForm = styled(DotForm)`
  ${({ theme }) => css`
    &.${rootClassName} {
      display: flex;
      flex: auto;
      flex-direction: column;
      height: 100%;
      margin: 0;

      .form-content {
        margin: ${theme.spacing(0, 0, 0, 2)};
        overflow-y: auto;
        padding: ${theme.spacing(0, 2, 0, 0)};
        word-break: normal;
      }

      .form-action {
        box-shadow: inset 0 1px 0
          ${theme.palette.progressionBoard.boardColumnHeader};
        display: flex;
        justify-content: flex-end;
        padding: ${theme.spacing(2, 3.5, 2, 0)};
      }

      .application-name {
        margin: ${theme.spacing(3, 0, 1)};
      }

      .selected-source-controls,
      .dot-button.add-more-btn {
        display: flex;
        margin: ${theme.spacing(0, 0, 4, 'auto')};
      }

      .dot-form-control-label.add-another-cb {
        display: flex;
        margin: ${theme.spacing(4, 0)};
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
