import React, {
  ChangeEvent,
  ReactElement,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { DotIcon } from '../icon/Icon';
import { DotTypography } from '../typography/Typography';
import { DotTooltip } from '../tooltip/Tooltip';
import {
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Divider,
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
  /** DEPRECATED, DO NOT USE */
  defaultExpanded?: boolean;
  /** If true, the accordion will be displayed in a disabled state. */
  disabled?: boolean;
  /** If true, the accordion is expanded. */
  expanded?: boolean;
  /** If true, the Accordion will have elevation. */
  hasElevation?: boolean;
  /** If true, the text will wrap and not be truncated */
  noWrap?: boolean;
  /**
  Callback fired when the expand/collapse state is changed.
  If provided, the accordion will be a controlled component and it will be the responsibility of the consumer to manage the 'expanded' state.
  */
  onChange?: (event: ChangeEvent, expanded: boolean) => void;
  /** If true, rounded corners are disabled. */
  square?: boolean;
  /** Icon placed before the children. */
  startIcon?: ReactNode;
  /** The text within the expanded Accordion */
  summary: ReactElement;
}

export const DotAccordion = ({
  actions,
  ariaLabel,
  children,
  className,
  'data-testid': dataTestId = 'dot-accordion',
  defaultExpanded,
  disabled = false,
  expanded,
  hasElevation = false,
  onChange,
  square = false,
  startIcon,
  summary,
  noWrap = true,
}: AccordionProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  const [elevation, setElevation] = useState<number>();

  useEffect(() => {
    if (defaultExpanded !== undefined) {
      console.warn(
        'The use of `defaultExpanded` is deprecated and will be removed in the next major release, please use `expanded` instead.'
      );
    }
    if (onChange && expanded === undefined) {
      console.warn(
        'The use of an `onChange` callback makes this a controlled component but no `expanded` state has been provided. In effect, this makes the component disabled.'
      );
    }
  }, []);

  useEffect(() => {
    setElevation(hasElevation ? 1 : 0);
  }, [hasElevation]);

  let dftExpanded: boolean = defaultExpanded;
  if (dftExpanded === undefined) {
    dftExpanded = expanded === undefined ? false : expanded;
  }

  return (
    <StyledAccordion
      aria-label={ariaLabel}
      className={rootClasses}
      data-testid={dataTestId}
      defaultExpanded={dftExpanded}
      disabled={disabled}
      elevation={elevation}
      expanded={onChange ? expanded : undefined}
      onChange={onChange}
      square={square}
    >
      <AccordionSummary
        className={summaryClassName}
        data-testid={`${dataTestId}-summary`}
        expandIcon={<DotIcon iconId="chevron-down" />}
      >
        {startIcon}
        <DotTooltip title={noWrap ? summary : ''}>
        <DotTypography noWrap={noWrap} variant="body1">
            {summary}
        </DotTypography>
        </DotTooltip>
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
