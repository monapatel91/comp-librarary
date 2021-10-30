import styled, { css } from 'styled-components';

export const rootClassName = 'demo-json-schema-form';

export const StyledDemoJsonSchemaForm = styled.div`
  ${() => css`
    &.${rootClassName} {
      margin: 20px;
    }
  `}
`;
