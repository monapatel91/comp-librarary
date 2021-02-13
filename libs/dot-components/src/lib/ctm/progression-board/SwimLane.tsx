import React from 'react';
import { rootClassName, StyledProgressionSwimlane } from './Swimlane.styles';
import Phase from './Phase';
import { SelectWorkItem, SwimLanepkg } from './ProgressionBoardInterfaces';

export interface SwimLaneProps {
  baseUrl: string;
  progressionPackage: SwimLanepkg;
  selectWorkitemProps: SelectWorkItem;
}

export const SwimLane = ({
  baseUrl,
  progressionPackage,
  selectWorkitemProps,
}: SwimLaneProps) => {
  const phases = progressionPackage.phases;

  return (
    <StyledProgressionSwimlane className={rootClassName}>
      <div className="swimlane-header">
        {/* TO-DO: better way to evaluate this */}
        {phases.map((phase, i) => (
          <div className="swimlane-column" key={i}>
            {i === 0 ? progressionPackage.package_name : ''}
          </div>
        ))}
      </div>
      <ul data-testid="board-phases" id="phases" className="board phases">
        {phases.map((phase, i) => (
          <Phase
            baseUrl={baseUrl}
            key={i}
            phase={phase}
            selectWorkitemProps={selectWorkitemProps}
          />
        ))}
      </ul>
    </StyledProgressionSwimlane>
  );
};
