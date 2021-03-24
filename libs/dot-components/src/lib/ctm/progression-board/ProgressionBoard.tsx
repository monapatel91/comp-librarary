import React, { useEffect, useState, useRef } from 'react';
import { CommonProps } from '../../components/CommonProps';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { BoardHeaders } from './BoardHeaders';
import {
  rootClassName,
  StyledProgressionBoard,
} from './ProgressionBoard.styles';
import { calculateProgressionBoardOffset } from './progressionBoardHelper';
import {
  PhaseType,
  SelectedWorkItem,
  SwimLanepkg,
  WorkItemSelection,
} from './ProgressionBoardInterfaces';
import { SwimLane } from './SwimLane';

export interface ProgressionBoardProps extends CommonProps {
  /* Base URL on which user will be redirected when item selection is made */
  baseUrl?: string;
  /* Array of progression phases */
  phases: Array<PhaseType>;
  /* Object which can be used when custom work-item selection is implemented */
  workItemSelection?: WorkItemSelection;
}

export const DotProgressionBoard = ({
  baseUrl,
  className,
  'data-testid': dataTestId,
  phases,
  workItemSelection = null,
}: ProgressionBoardProps) => {
  const rootClasses = useStylesWithRootClass(
    rootClassName,
    'columns-wrapper',
    className
  );

  const [hoveredWorkItem, setHoveredWorkItem] = useState('');
  const [offsetLeft, setOffsetLeft] = useState(0);

  const { selectedWorkItem, drawerWidth, drawerOffsetFromBoard = 0 } =
    workItemSelection || {};
  const { boardColumnRectRight } = selectedWorkItem || {};

  /* Used for PB's data offset calculation when used in combination with drawer */
  useEffect(() => {
    if (!drawerWidth) return;
    if (!selectedWorkItem) {
      setOffsetLeft(0);
      return;
    }
    if (boardColumnRectRight && pbRef.current) {
      const offset = calculateProgressionBoardOffset({
        progressionBoardElement: pbRef.current,
        boardColumnRectRight,
        drawerWidth,
        drawerOffsetFromBoard,
      });
      offset > 0 && setOffsetLeft(offset);
    } else {
      setOffsetLeft(0);
    }
  }, [selectedWorkItem]);

  const selectWorkItem = (workItem: SelectedWorkItem) => {
    workItemSelection?.onWorkItemChange(workItem);
  };

  const hoverWorkItem = (id: string) => setHoveredWorkItem(id);
  const unHoverWorkItem = () => setHoveredWorkItem('');

  const phaseNames = phases.map((phase) => phase.name);
  const selectWorkitemProps = {
    allowSelection: !!workItemSelection,
    selectWorkItem,
    hoverWorkItem,
    hoveredWorkItem,
    unHoverWorkItem,
    selectedWorkItem,
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
        .sort((a, b) => {
          const nameA = a.package_name.toUpperCase();
          const nameB = b.package_name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
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

  const pbRef = useRef(null);

  const renderSwimLanesFromPackages = (packages: Array<SwimLanepkg>) => {
    return packages?.map((pkg, i) => (
      <SwimLane
        baseUrl={baseUrl}
        key={i}
        progressionPackage={pkg}
        selectWorkitemProps={selectWorkitemProps}
        isOffsetLeft={offsetLeft > 0}
      />
    ));
  };

  return (
    <StyledProgressionBoard
      className={rootClasses}
      data-testid={dataTestId}
      id="in-progress"
      offsetLeft={offsetLeft}
      ref={pbRef}
    >
      <BoardHeaders headers={phaseNames} isOffsetLeft={offsetLeft > 0} />
      {renderSwimLanesFromPackages(getPackages())}
    </StyledProgressionBoard>
  );
};
