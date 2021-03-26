import styled, { css } from 'styled-components';
import { Accordion } from '@material-ui/core';

export const rootClassName = 'dot-accordion';
export const summaryClassName = 'dot-accordion-summary';
export const detailClassName = 'dot-accordion-details';
export const actionsClassName = 'dot-accordion-actions';

export const StyledAccordion = styled(Accordion)`
  ${({ theme }) => css`
    &.${rootClassName} {
      .${summaryClassName} {
        display: flex;
        align-items: center;
        .MuiTypography-root {
          margin-bottom: 0;
        }
        .dot-icon {
          margin-right: ${theme.spacing(0.5)}px;
        }
      }
    }
  `}
`;
