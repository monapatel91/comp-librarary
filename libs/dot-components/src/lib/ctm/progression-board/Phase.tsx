import React from 'react';
import ValidPackage from './PackageVersion';
import { PhaseType, SelectWorkItem } from './ProgressionBoardInterfaces';

export interface PhaseProps {
  baseUrl: string;
  phase: PhaseType;
  selectWorkitemProps: SelectWorkItem;
}

export const Phase = ({ baseUrl, phase, selectWorkitemProps }: PhaseProps) => {
  return (
    <li className="board-column" data-testid="phase-columns">
      {phase.packageVersions.map((packageVer, i) =>
        packageVer.rev_from <= packageVer.rev_to ? (
          <ValidPackage
            baseUrl={baseUrl}
            key={i}
            packageVer={packageVer}
            selectWorkitemProps={selectWorkitemProps}
          />
        ) : null
      )}
    </li>
  );
};

export default Phase;
