import React, { MouseEvent, ReactNode } from 'react';
import { Tooltip } from '@material-ui/core';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { CommonProps } from '../../components/CommonProps';
import { rootClassName, StyledProgressionSwimlane } from './Swimlane.styles';
import { Phase } from './Phase';
import { SelectWorkItem, SwimLanepkg } from './ProgressionBoardInterfaces';
import { DotLink, DotTypography } from '../../components';
import { StyledTooltipContent } from './ProgressionBoard.styles';

export interface SwimLaneProps extends CommonProps {
  baseUrl: string;
  onAppNameClick?: (appName: string) => void;
  progressionPackage: SwimLanepkg;
  selectWorkitemProps: SelectWorkItem;
  isOffsetLeft?: boolean;
}

export const SwimLane = ({
  baseUrl,
  className,
  'data-testid': dataTestId,
  onAppNameClick,
  progressionPackage,
  selectWorkitemProps,
  isOffsetLeft = false,
}: SwimLaneProps) => {
  const phases = progressionPackage.phases;
  const rootClasses = useStylesWithRootClass(
    rootClassName,
    className,
    isOffsetLeft ? 'translate-left' : ''
  );

  const onNameClick = (
    appName: string
  ): ((_: MouseEvent<HTMLAnchorElement>) => void) => (
    _: MouseEvent<HTMLAnchorElement>
  ) => onAppNameClick(appName);

  const renderAppName = (appName: string): ReactNode => {
    const elem = <DotTypography variant="subtitle2">{appName}</DotTypography>;
    if (onAppNameClick) {
      return (
        <DotTypography variant="subtitle2">
          <Tooltip
            placement="bottom-start"
            title={
              <StyledTooltipContent variant="body2">
                View application details
              </StyledTooltipContent>
            }
          >
            <span>
              <DotLink
                onClick={onNameClick(appName)}
                underline="none"
                color="inherit"
              >
                {appName}
              </DotLink>
            </span>
          </Tooltip>
        </DotTypography>
      );
    }
    return elem;
  };

  return (
    <StyledProgressionSwimlane className={rootClasses} data-testid={dataTestId}>
      <div className="swimlane-header">
        {/* TO-DO: better way to evaluate this */}
        {phases.map((phase, i) => (
          <div className="swimlane-column" key={i}>
            {i === 0 && renderAppName(progressionPackage.package_name)}
          </div>
        ))}
      </div>
      <ul data-testid="board-phases" id="phases" className="board phases">
        {phases.map((phase, i) => (
          <Phase
            baseUrl={baseUrl}
            data-testid="phase-columns"
            key={i}
            phase={phase}
            selectWorkitemProps={selectWorkitemProps}
          />
        ))}
      </ul>
    </StyledProgressionSwimlane>
  );
};
