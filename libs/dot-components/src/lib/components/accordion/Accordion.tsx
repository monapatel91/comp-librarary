import React from 'react';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { DotIcon } from '@digital-ai/dot-components';
import {
  Divider,
  Typography,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import {
  detailClassName,
  rootClassName,
  summaryClassName,
  StyledAccordion,
} from './Accordion.styles';
import { CommonProps } from '../CommonProps';

export interface AccordionProps extends CommonProps {
  actions?: JSX.Element | string;
  children: JSX.Element | string;
  defaultExpanded?: boolean;
  disabled?: boolean;
  startIcon?: JSX.Element;
  summary: JSX.Element | string;
}

export const DotAccordion = ({
  actions,
  children,
  className,
  'data-testid': dataTestId = 'dot-accordion',
  defaultExpanded = false,
  disabled = false,
  startIcon,
  summary,
}: AccordionProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  return (
    <StyledAccordion
      className={rootClasses}
      data-testid={dataTestId}
      defaultExpanded={defaultExpanded}
      disabled={disabled}
    >
      <AccordionSummary
        className={summaryClassName}
        data-testid={`${dataTestId}-summary`}
        expandIcon={<DotIcon iconId="chevron-down" />}
      >
        {startIcon}
        <Typography variant="body1">{summary}</Typography>
      </AccordionSummary>
      <AccordionDetails
        className={detailClassName}
        data-testid={`${dataTestId}-details`}
      >
        {children}
      </AccordionDetails>
      <Divider />
      {actions && <AccordionActions>{actions}</AccordionActions>}
    </StyledAccordion>
  );
};
