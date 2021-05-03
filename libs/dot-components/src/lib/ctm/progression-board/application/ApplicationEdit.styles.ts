import styled, { css } from 'styled-components';

export const rootClassName = 'application-edit';

export const StyledApplicationEdit = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      .app-name,
      .source-control-label {
        padding: ${theme.spacing(2, 0)};
      }

      .app-name-skeleton {
        margin: ${theme.spacing(2, 0)};
      }

      .source-control,
      .source-control-skeleton {
        padding: ${theme.spacing(0.5, 0)};
      }

      .ticket-system-label {
        padding: ${theme.spacing(3, 0)};
      }
    }
  `}
`;
