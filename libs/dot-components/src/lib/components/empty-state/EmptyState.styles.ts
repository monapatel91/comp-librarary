import styled from 'styled-components';

export const rootClassName = 'dot-empty-state';

export const StyledEmptyState = styled.div`
  &.dot-empty-state {
    margin: 0 auto;
    max-width: 600px;
    text-align: center;

    .empty-state-image {
      min-height: 239px;
    }
  }
`;
