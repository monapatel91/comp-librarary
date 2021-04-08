import React, { ReactElement } from 'react';
import { Tooltip } from '@material-ui/core';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { CommonProps } from '../../components/CommonProps';
import { DotIcon } from '../../components';
import {
  rootClassName,
  StyledTooltipTitle,
  StyledTypography,
} from './WorkItemTooltip.styles';

export interface WorkItemTooltipProps extends CommonProps {
  isSplit: boolean;
  value_goal: string;
  title: string;
  external_key: string;
  child: ReactElement;
}

export const WorkItemTooltip = ({
  className,
  'data-testid': dataTestId,
  isSplit,
  value_goal,
  title,
  external_key,
  child,
}: WorkItemTooltipProps) => {
  const rootClasses = useStylesWithRootClass(className);
  const truncate = (str: string) => {
    return str.length > 30 ? str.substring(0, 27) + '...' : str;
  };

  const populateTooltip = (isSplit: boolean) => {
    const truncated_title = truncate(title);
    return (
      <StyledTooltipTitle className={rootClassName}>
        <div className="tooltip-header">
          <DotIcon
            className={value_goal}
            iconId={isSplit ? 'circle-half-full' : 'circle'}
          />
          <StyledTypography variant="body2">{external_key}</StyledTypography>
        </div>
        <StyledTypography variant="body2">{truncated_title}</StyledTypography>
      </StyledTooltipTitle>
    );
  };

  return (
    <Tooltip
      data-testid={dataTestId}
      className={rootClasses}
      title={populateTooltip(isSplit)}
    >
      {child}
    </Tooltip>
  );
};
