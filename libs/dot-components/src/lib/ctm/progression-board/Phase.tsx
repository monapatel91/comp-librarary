import React from 'react';
import ValidPackage from './PackageVersion';
import { PhaseProps } from './ProgressionBoardInterfaces';

export const Phase = ({ baseUrl, phase, selectWorkitemProps }: PhaseProps) => {
  return (
    <li className="board-column">
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
