import React from 'react';
import { rootClassName, StyledProgressionSwimlane } from './Swimlane.styles';
import Phase from './Phase';
import { SwimLaneProps } from './ProgressionBoardInterfaces';

export const SwimLane = ({
  baseUrl,
  className,
  progressionPackage,
  selectWorkitemProps,
}: SwimLaneProps) => {
  return (
    <StyledProgressionSwimlane className={`${rootClassName} ${className}`}>
      <div className="swimlane-header">
        {/* TO-DO: phase isn't used below... */}
        {progressionPackage.phases.map((phase, i) => (
          <div className="swimlane-column" key={i}>
            {i === 0 ? progressionPackage.package_name : ''}
          </div>
        ))}
      </div>
      <ul id="phases" className="board phases">
        {progressionPackage.phases.map((phase, i) => (
          <Phase
            key={i}
            {...phase}
            selectWorkitemProps={selectWorkitemProps}
            baseUrl={baseUrl}
          />
        ))}
      </ul>
    </StyledProgressionSwimlane>
  );
};
