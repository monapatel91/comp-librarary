import React, { useState } from 'react';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { BoardHeaders } from './BoardHeaders';
import {
  rootClassName,
  StyledProgressionBoard,
} from './ProgressionBoard.styles';
import { ProgressionBoardProps } from './ProgressionBoardInterfaces';
import { SwimLane } from './SwimLane';

export const DotProgressionBoard = ({
  baseUrl,
  phases,
}: ProgressionBoardProps) => {
  return <ProgressionBoard baseUrl={baseUrl} phases={phases} />;
};

export const ProgressionBoard = ({
  baseUrl,
  phases,
}: ProgressionBoardProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, 'columns-wrapper');
  const [selectedWI, updateSelectedWorkitem] = useState('');

  const selectWorkitem = (id: string) => {
    updateSelectedWorkitem(id);
  };

  const deSelectWorkitem = () => {
    updateSelectedWorkitem('');
  };

  const phaseNames = phases.map((phase) => phase.name);
  const selectWorkitemProps = {
    selectWorkitem: selectWorkitem,
    deSelectWorkitem: deSelectWorkitem,
    selectedWorkitem: selectedWI,
  };

  const getPackages = () => {
    return (
      phases
        // create an array of packages included in each phase
        .map((phase) =>
          phase.packageVersions.map((version) => ({
            package_id: version.package_id,
            package_name: version.package_name,
          }))
        )
        .reduce((prev, next) => prev.concat(next), [])
        // filter out all but one unique representation of each package
        .filter((item, index, arr) => {
          return (
            arr.map((mapObj) => mapObj.package_id).indexOf(item.package_id) ===
            index
          );
        })
        // sort alphabetically in ascending order
        // TO-DO this can be cleaned up to...
        // phases.sort((a, b) => a.package_name.toUpperCase() - b.package_name.toUpperCase()));
        .sort((packageA, packageB) => {
          const nameA = packageA.package_name.toUpperCase();
          const nameB = packageB.package_name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        })
        // add phases to each package containing only packageVersions related to the package
        .map((pkg) => {
          const packagePhases = phases.map((phase) => ({
            ...phase,
            packageVersions: phase.packageVersions.filter(
              (version) => version.package_id === pkg.package_id
            ),
          }));

          return {
            ...pkg,
            phases: packagePhases,
          };
        })
    );
  };

  return (
    <StyledProgressionBoard id="in-progress" className={rootClasses}>
      <BoardHeaders headers={phaseNames} />
      <div className="progression">
        {getPackages().map((pkg) => (
          <SwimLane
            baseUrl={baseUrl}
            className="progression"
            key={pkg.package_id}
            progressionPackage={pkg}
            selectWorkitemProps={selectWorkitemProps}
          />
        ))}
      </div>
    </StyledProgressionBoard>
  );
};
