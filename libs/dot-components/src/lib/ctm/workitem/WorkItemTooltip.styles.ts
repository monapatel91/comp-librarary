import styled from 'styled-components';

export const rootClassName = 'wi-tooltip';

export const StyledTooltipTitle = styled.div`
  &.${rootClassName} {
    .tooltip-header {
      display: flex;
      align-items: center;

      .dot-icon.unknown i {
        color: #b7bcc4;
      }
      .dot-icon.improve i {
        color: #467f1b;
      }
      .dot-icon.maintain i {
        color: #690100;
      }
    }
  }
`;
