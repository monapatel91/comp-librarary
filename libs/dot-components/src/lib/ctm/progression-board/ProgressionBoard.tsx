import React, { Component } from 'react';
import { BoardHeaders } from './BoardHeaders';
import {
  rootClassName,
  StyledProgressionBoard,
} from './ProgressionBoard.styles';
import { hydratePhases } from './hydrate_phases';
import { pbState, ProgressionBoardProps } from './ProgressionBoardInterfaces';
import { SwimLane } from './SwimLane';

export class DotProgressionBoard extends Component<ProgressionBoardProps> {
  water = () => {
    const phases = hydratePhases(this.props.phases);
    return phases;
  };

  render() {
    return (
      <ProgressionBoard phases={this.water()} baseUrl={this.props.baseUrl} />
    );
  }
}

export class ProgressionBoard extends Component<
  ProgressionBoardProps,
  pbState
> {
  constructor(props, state) {
    super(props, state);
    this.state = { selectedWorkitem: '' };
  }

  selectWorkitem = (id) => {
    this.setState({ selectedWorkitem: id });
  };

  deSelectWorkitem = () => {
    this.setState({ selectedWorkitem: '' });
  };

  getPackages = () => {
    return (
      this.props.phases
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
          const phases = this.props.phases.map((phase) => ({
            ...phase,
            packageVersions: phase.packageVersions.filter(
              (version) => version.package_id === pkg.package_id
            ),
          }));

          return {
            ...pkg,
            phases,
          };
        })
    );
  };

  render() {
    const packages = this.getPackages();
    const phaseNames = this.props.phases.map((phase) => phase.name);
    const selectWorkitemProps = {
      selectWorkitem: this.selectWorkitem,
      deSelectWorkitem: this.deSelectWorkitem,
      selectedWorkitem: this.state.selectedWorkitem,
    };
    const baseUrl = this.props.baseUrl;
    return (
      <StyledProgressionBoard
        id="in-progress"
        className={`${rootClassName} columns-wrapper`}
      >
        <BoardHeaders headers={phaseNames} />
        <div className="progression">
          {packages.map((pkg) => (
            <SwimLane
              className="progression"
              key={pkg.package_id}
              package={pkg}
              selectWorkitemProps={selectWorkitemProps}
              baseUrl={baseUrl}
            />
          ))}
        </div>
      </StyledProgressionBoard>
    );
  }
}
