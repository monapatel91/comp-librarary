import styled, { css } from 'styled-components';

export const rootClassName = '<%=className%>';

// If using MUI component, replace `styled.div` with `styled(MUIComponent)`
export const <%=styledName%> = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      /* styles go here */
    }
  `}
`;
