import React, { useRef } from 'react';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { CommonProps } from '../../components/CommonProps';
import ValidPackage from './PackageVersion';
import { PhaseType, SelectWorkItem } from './ProgressionBoardInterfaces';

export interface PhaseProps extends CommonProps {
  baseUrl: string;
  phase: PhaseType;
  selectWorkitemProps: SelectWorkItem;
}

export const Phase = ({
  baseUrl,
  className,
  'data-testid': dataTestId,
  phase,
  selectWorkitemProps,
}: PhaseProps) => {
  const rootClasses = useStylesWithRootClass('board-column', className);
  const boardColumnRef = useRef(null);
  return (
    <li className={rootClasses} data-testid={dataTestId} ref={boardColumnRef}>
      {phase.packageVersions.map((packageVer, i) =>
        packageVer.rev_from <= packageVer.rev_to ? (
          <ValidPackage
            baseUrl={baseUrl}
            data-testid="card"
            key={i}
            packageVer={packageVer}
            selectWorkitemProps={selectWorkitemProps}
            ref={boardColumnRef}
          />
        ) : null
      )}
    </li>
  );
};

export default Phase;
