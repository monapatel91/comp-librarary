import styled from 'styled-components';

export const rootClassName = 'pb-app-form-drawer-content';

export const StyledPBAppFormDrawerContent = styled.div`
  &.${rootClassName} {
    display: flex;
    flex-direction: column;
    overflow-y: hidden;

    .drawer-content {
      overflow-y: auto;
    }
  }
`;
