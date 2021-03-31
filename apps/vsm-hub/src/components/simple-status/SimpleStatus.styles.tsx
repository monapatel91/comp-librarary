import styled, { css } from 'styled-components';

export const rootClassName = 'simple-status-container';

export const StyledSimpleStatus = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      display: flex;
      align-items: center;
      &.ready {
        color: ${theme.palette.success[500]};
      }
      &.pending {
        color: ${theme.palette.warning[500]};
      }
      &.error {
        color: ${theme.palette.error[500]};
      }
      .MuiTypography-body1 {
        margin: ${theme.spacing(0, 0, 0, 0.5)};
      }
    }
  `}
`;
