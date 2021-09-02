import React, { ReactNode, useState, useEffect } from 'react';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { DotIcon } from '../icon/Icon';
import { DotTypography } from '../typography/Typography';
import {
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Tooltip,
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
  /** If true, the text will wrap and not be truncated */
  noWrap?: boolean;
  /** If true, rounded corners are disabled. */
  square?: boolean;
  /** Icon placed before the children. */
  startIcon?: ReactNode;
  /** The text within the expanded Accordion */
  summary: ReactNode;
}

export const DotAccordion = ({
  actions,
  ariaLabel,
  children,
  className,
  'data-testid': dataTestId = 'dot-accordion',
  defaultExpanded = false,
  disabled = false,
  hasElevation = false,
  square = false,
  startIcon,
  summary,
  noWrap = true,
}: AccordionProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  const [elevation, setElevation] = useState<number>();

  useEffect(() => {
    setElevation(hasElevation ? 1 : 0);
  }, [hasElevation]);

  return (
    <StyledAccordion
      aria-label={ariaLabel}
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
        <DotTypography variant="body1" noWrap={noWrap}>
          <Tooltip
            className="dot-tooltip"
            placement="top-start"
            title={noWrap ? summary : ''}
          >
            <span>{summary}</span>
          </Tooltip>
        </DotTypography>
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
