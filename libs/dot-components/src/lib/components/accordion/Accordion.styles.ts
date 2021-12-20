import styled, { css } from 'styled-components';
import { Accordion } from '@mui/material';

export const rootClassName = 'dot-accordion';
export const summaryClassName = 'dot-accordion-summary';
export const detailClassName = 'dot-accordion-details';
export const actionsClassName = 'dot-accordion-actions';

export const StyledAccordion = styled(Accordion)`
  ${({ theme }) => css`
    &.${rootClassName} {
      background: ${theme.palette.product === 'agility' &&
      theme.palette.layer.n50};

      .${summaryClassName} {
        align-items: center;
        display: flex;

        .MuiAccordionSummary-content {
          width: calc(100% - ${theme.spacing(5)});
        }

        .MuiTypography-root {
          margin-bottom: 0;
        }
        .MuiTypography-body1 {
          padding: 2px 0;
        }
      }
    }
  `}
`;
