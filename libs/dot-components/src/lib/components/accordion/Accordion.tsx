import React, { ReactNode, useState, useEffect } from 'react';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { DotIcon } from '../icon/Icon';
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
  /** actionable components (ex: checkbox, button) that can be nested within the expanded Accordion component */
  actions?: ReactNode;
  /** The content for the Accordion.*/
  children: ReactNode;
  /** If true, expands the accordion by default. */
  defaultExpanded?: boolean;
  /** If true, the accordion will be displayed in a disabled state. */
  disabled?: boolean;
  /** If true, the Accordion will have elevation. */
  hasElevation?: boolean;
  /** If true, rounded corners are disabled. */
  square?: boolean;
  /** Icon placed before the children. */
  startIcon?: ReactNode;
  /** The text within the expanded Accordion */
  summary: ReactNode;
}

export const DotAccordion = ({
  actions,
  children,
  className,
  'data-testid': dataTestId = 'dot-accordion',
  defaultExpanded = false,
  disabled = false,
  hasElevation = false,
  square = false,
  startIcon,
  summary,
}: AccordionProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const [elevation, setElevation] = useState<number>();

  useEffect(() => {
    setElevation(hasElevation ? 1 : 0);
  }, [hasElevation]);

  return (
    <StyledAccordion
      className={rootClasses}
      data-testid={dataTestId}
      defaultExpanded={defaultExpanded}
      disabled={disabled}
      elevation={elevation}
      square={square}
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
