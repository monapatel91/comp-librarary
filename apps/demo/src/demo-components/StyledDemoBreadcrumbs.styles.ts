import styled, { css } from 'styled-components';

export const rootClassName = 'styled-demo-breadcrumbs';

export const StyledDemoBreadcrumbs = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      .action-toolbar {
        justify-content: space-between;

        .breadcrumbs {
          flex-grow: 1;
          min-width: ${theme.spacing(25)};
        }

        .actions {
          min-width: 450px;
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  `}
`;
