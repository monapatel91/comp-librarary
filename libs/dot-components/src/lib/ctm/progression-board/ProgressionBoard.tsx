import React, { useState } from 'react';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import { CommonProps } from '../../components/CommonProps';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { BoardHeaders } from './BoardHeaders';
import {
  rootClassName,
  StyledProgressionBoard,
} from './ProgressionBoard.styles';
import { PhaseType } from './ProgressionBoardInterfaces';
import { SwimLane } from './SwimLane';

const progressionBoardTheme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      default: '#fff',
    },
    primary: {
      '50': '#E6F0F4',
      '100': '#C3DBE4',
      '200': '#9FC5D5',
      '300': '#589BB6',
    },
    error: {
      main: '#EA1C0D',
    },
    success: {
      main: '#3D8B40',
    },
    text: {
      primary: '#244451',
    },
  },
});

export interface ProgressionBoardProps extends CommonProps {
  baseUrl?: string;
  phases: Array<PhaseType>;
}

export const DotProgressionBoard = ({
  baseUrl,
  className,
  'data-testid': dataTestId,
  phases,
}: ProgressionBoardProps) => {
  const rootClasses = useStylesWithRootClass(
    rootClassName,
    'columns-wrapper',
    className
  );
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

  return (
    <ThemeProvider theme={progressionBoardTheme}>
      <StyledProgressionBoard
        className={rootClasses}
        data-testid={dataTestId}
        id="in-progress"
      >
        <BoardHeaders headers={phaseNames} />
        {getPackages().map((pkg, i) => (
          <SwimLane
            baseUrl={baseUrl}
            key={i}
            progressionPackage={pkg}
            selectWorkitemProps={selectWorkitemProps}
          />
        ))}
      </StyledProgressionBoard>
    </ThemeProvider>
  );
};

export default DotProgressionBoard;
