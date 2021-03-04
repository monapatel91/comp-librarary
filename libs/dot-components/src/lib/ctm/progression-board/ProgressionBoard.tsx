import React, { useEffect, useState, useRef } from 'react';
import { CommonProps } from '../../components/CommonProps';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { BoardHeaders } from './BoardHeaders';
import {
  rootClassName,
  StyledProgressionBoard,
} from './ProgressionBoard.styles';
import { ProgressionBoardThemeProvider, ThemeOptions } from './ThemeProvider';
import { PhaseType, WorkItemType } from './ProgressionBoardInterfaces';
import { SwimLane } from './SwimLane';
import { ProgressionBoardDrawer } from './ProgressionBoardDrawer';

export interface ProgressionBoardProps extends CommonProps {
  baseUrl?: string;
  phases: Array<PhaseType>;
  theme?: ThemeOptions;
  displayDrawer?: boolean;
  drawerWidth?: number;
}

export const DotProgressionBoard = ({
  baseUrl,
  className,
  'data-testid': dataTestId,
  phases,
  theme,
  displayDrawer = false,
  drawerWidth = 320,
}: ProgressionBoardProps) => {
  const rootClasses = useStylesWithRootClass(
    rootClassName,
    'columns-wrapper',
    className
  );
  const [selectedWorkItem, setSelectedWorkItem] = useState(null);
  const [hoveredWorkItem, setHoveredWorkItem] = useState('');
  const [offsetLeft, setOffsetLeft] = useState(0);

  useEffect(() => {
    if (!displayDrawer) return;
    if (!selectedWorkItem) {
      setOffsetLeft(0);
      return;
    }
    const { wiClientRectRight, boardColumnRectRight } = selectedWorkItem;
    if (wiClientRectRight && boardColumnRectRight && pbRef.current) {
      const pbOffsetX = pbRef.current.offsetWidth;
      const toleranceX = 10;
      const widthTillColumnEnd = boardColumnRectRight - wiClientRectRight;
      const diff = wiClientRectRight + toleranceX - (pbOffsetX - drawerWidth);
      diff >= 0 && setOffsetLeft(diff + widthTillColumnEnd - toleranceX);
    } else {
      setOffsetLeft(0);
    }
  }, [selectedWorkItem]);

  const selectWorkItem = (workItem: WorkItemType) =>
    setSelectedWorkItem(workItem);
  const deSelectWorkItem = () => setSelectedWorkItem('');
  const hoverWorkItem = (id: string) => setHoveredWorkItem(id);
  const unHoverWorkItem = () => setHoveredWorkItem('');

  const phaseNames = phases.map((phase) => phase.name);
  const selectWorkitemProps = {
    displayDrawer,
    selectWorkItem,
    deSelectWorkItem,
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

  const onCloseButtonClick = () => deSelectWorkItem();
  const pbRef = useRef(null);

  const renderProgressionBoardDrawer = () => {
    if (displayDrawer) {
      return (
        <ProgressionBoardDrawer
          onClose={onCloseButtonClick}
          width={drawerWidth}
          workItem={selectedWorkItem}
        />
      );
    }
    return null;
  };

  const renderSwimLanesFromPackages = (packages) => {
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
    <ProgressionBoardThemeProvider theme={theme}>
      <StyledProgressionBoard
        className={rootClasses}
        data-testid={dataTestId}
        id="in-progress"
        offsetLeft={offsetLeft}
        ref={pbRef}
      >
        <BoardHeaders headers={phaseNames} isOffsetLeft={offsetLeft > 0} />
        {renderSwimLanesFromPackages(getPackages())}
        {renderProgressionBoardDrawer()}
      </StyledProgressionBoard>
    </ProgressionBoardThemeProvider>
  );
};

export default DotProgressionBoard;
