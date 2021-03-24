import React from 'react';
import { Typography } from '@material-ui/core';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { CommonProps } from '../../components/CommonProps';
import { rootClassName, StyledProgressionSwimlane } from './Swimlane.styles';
import { Phase } from './Phase';
import { SelectWorkItem, SwimLanepkg } from './ProgressionBoardInterfaces';

export interface SwimLaneProps extends CommonProps {
  baseUrl: string;
  progressionPackage: SwimLanepkg;
  selectWorkitemProps: SelectWorkItem;
  isOffsetLeft?: boolean;
}

export const SwimLane = ({
  baseUrl,
  className,
  'data-testid': dataTestId,
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

  return (
    <StyledProgressionSwimlane className={rootClasses} data-testid={dataTestId}>
      <div className="swimlane-header">
        {/* TO-DO: better way to evaluate this */}
        {phases.map((phase, i) => (
          <div className="swimlane-column" key={i}>
            {i === 0 ? (
              <Typography variant="subtitle2">
                {progressionPackage.package_name}
              </Typography>
            ) : (
              ''
            )}
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
