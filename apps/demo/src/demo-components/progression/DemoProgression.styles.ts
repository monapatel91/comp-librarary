import styled from 'styled-components';

export const rootClassName = 'demo-progression';

export const StyledDemoProgression = styled.div`
  &.${rootClassName} {
    height: 100%;
    display: flex;
    flex-direction: column;

    .progression {
      display: flex;
      height: 100%;
    }

    .progression-action {
      margin: 8px 0 8px 0;
    }

    .form-child-list {
      margin: 0 0 0 16px;
    }
  }
`;
