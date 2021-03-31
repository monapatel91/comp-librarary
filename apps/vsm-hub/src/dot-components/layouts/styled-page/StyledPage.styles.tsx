import styled, { css } from 'styled-components';

export const rootClassName = 'vsm-hub-section';

export const StyledPageSection = styled.section`
  ${({ theme }) => css`
    &.${rootClassName} {
      margin: ${theme.spacing(3)}px;
    }
  `}
`;
