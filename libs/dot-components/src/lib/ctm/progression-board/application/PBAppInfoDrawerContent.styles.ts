import styled, { css } from 'styled-components';

export const rootClassName = 'pb-app-info-drawer-content';

export const StyledPBAppInfoDrawerContent = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      .application-edit {
        padding: ${theme.spacing(3, 2)};
      }
    }
  `}
`;
