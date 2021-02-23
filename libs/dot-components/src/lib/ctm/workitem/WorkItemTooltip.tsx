import React from 'react';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { CommonProps } from '../../components/CommonProps';
import { DotIcon } from '../../components';
import { rootClassName, StyledTooltipTitle } from './WorkItemTooltip.styles';
import { Tooltip } from '@material-ui/core';

export interface WorkItemTooltipProps extends CommonProps {
  isSplit: boolean;
  value_goal: string;
  title: string;
  external_key: string;
  child: JSX.Element;
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
    return str.length > 20 ? str.substring(0, 17) + '...' : str;
  };

  const populateTooltip = (isSplit: boolean) => {
    const truncated_title = truncate(title);
    return (
      <StyledTooltipTitle className={rootClassName}>
        <div className="tooltip-header">
          <DotIcon
            className={value_goal}
            iconId={isSplit ? 'circle-half-full' : 'circle'}
            fontSize="small"
          />
          {external_key}
        </div>
        {truncated_title}
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

export default WorkItemTooltip;
