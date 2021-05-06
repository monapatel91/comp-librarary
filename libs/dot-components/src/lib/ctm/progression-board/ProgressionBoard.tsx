import React, { useEffect, useState, useRef, ReactNode } from 'react';
import { CommonProps } from '../../components/CommonProps';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { BoardHeaders } from './BoardHeaders';
import {
  rootClassName,
  StyledProgressionBoard,
} from './ProgressionBoard.styles';
import { calculateProgressionBoardOffset } from './progressionBoardHelper';
import {
  PackageType,
  PBApplication,
  PBApplications,
  PhaseType,
  SelectedWorkItem,
  SwimLanepkg,
  WorkItemSelection,
} from './ProgressionBoardInterfaces';
import { SwimLane } from './SwimLane';
import { EmptyPhases } from './phase/EmptyPhases';

export interface ProgressionBoardProps extends CommonProps {
  /* Base URL on which user will be redirected when item selection is made */
  baseUrl?: string;
  /* Optional callback function which gets executed upon application name click event */
  onAppNameClick?: (appName: string) => void;
  /* Object of key-value pairs for each application */
  pbApplications?: PBApplications;
  /* Array of progression phases */
  phases: Array<PhaseType>;
  /* Object which can be used when custom work-item selection is implemented */
  workItemSelection?: WorkItemSelection;
}

export const DotProgressionBoard = ({
  baseUrl,
  className,
  'data-testid': dataTestId,
  onAppNameClick,
  pbApplications = null,
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

  interface WorkitemMapType {
    [key: string]: number;
  }

  const getPackages = () => {
    // build a map of workitem ids to the count of packageVersions
    // in which those workitems appear.
    const workitemMap: WorkitemMapType = {};
    phases.forEach((phase) => {
      phase.packageVersions.forEach((packageVersion: PackageType) => {
        packageVersion.workitems?.forEach((workitem) => {
          const currentCount = workitemMap[workitem._id] || 0;
          workitemMap[workitem._id] = currentCount + 1;
        });
      });
    });
    return (
      phases
        // create an array of packages included in each phase.
        // while here, use the map we built above to determine
        // if workitems are split.
        .map((phase) => {
          phase.packageVersions.forEach((packageVersion: PackageType) => {
            packageVersion.workitems?.forEach((workitem) => {
              workitem.isSplit = workitemMap[workitem._id] > 1;
            });
          });
          return phase.packageVersions.map((version: PackageType) => ({
            package_id: version.package_id,
            package_name: version.package_name,
          }));
        })
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
              (version: PackageType) => version.package_id === pkg.package_id
            ),
          }));

          return {
            ...pkg,
            phases: packagePhases,
          };
        })
    );
  };

  const allPackages = getPackages();

  const pbRef = useRef(null);

  const getPBApplicationForPackage = (
    allPBApplications: PBApplications,
    packageId: string
  ): PBApplication =>
    packageId in allPBApplications ? allPBApplications[packageId] : null;

  const renderSwimLanesFromPackages = (packages: Array<SwimLanepkg>) => {
    return packages?.map((pkg, i) => (
      <SwimLane
        pbApplication={
          pbApplications &&
          getPBApplicationForPackage(pbApplications, pkg.package_id)
        }
        baseUrl={baseUrl}
        key={i}
        onAppNameClick={onAppNameClick}
        progressionPackage={pkg}
        selectWorkitemProps={selectWorkitemProps}
        isOffsetLeft={offsetLeft > 0}
      />
    ));
  };

  const renderProgressionBoard = (): ReactNode => {
    if (allPackages && allPackages.length > 0) {
      return (
        <>
          <BoardHeaders headers={phaseNames} isOffsetLeft={offsetLeft > 0} />
          {renderSwimLanesFromPackages(allPackages)}
        </>
      );
    }
    return (
      <EmptyPhases
        data-testid={`${dataTestId}-empty-phases`}
        phaseNames={phaseNames}
      />
    );
  };

  return (
    <StyledProgressionBoard
      className={rootClasses}
      data-testid={dataTestId}
      id="in-progress"
      offsetLeft={offsetLeft}
      ref={pbRef}
    >
      {renderProgressionBoard()}
    </StyledProgressionBoard>
  );
};
