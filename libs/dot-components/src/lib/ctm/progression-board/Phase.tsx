import React from 'react';
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
  return (
    <li className={rootClasses} data-testid={dataTestId}>
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
