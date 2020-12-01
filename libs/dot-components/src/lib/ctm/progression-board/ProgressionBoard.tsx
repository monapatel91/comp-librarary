import React, {Component} from 'react';
import Phase from './Phase';
import {BoardHeaders} from './BoardHeaders';

import './ProgressionBoard.scss'
import {hydratePhases} from "./hydrate_phases";

export interface ProgressionBoardProps {
  phases: any
}

export interface SwimLaneProps {
  package: any
}


export class ProgressionBoardHydrator extends Component<ProgressionBoardProps> {
  water = () => {
    const phases = hydratePhases(this.props.phases);
    return phases;
  }

  render() {
    return (
        <ProgressionBoard phases={this.water()}/>
    );
  }
}

export class ProgressionBoard extends Component<ProgressionBoardProps> {

  getPackages = () => {
    return (
      this.props.phases
        // create an array of packages included in each phase
        .flatMap((phase) =>
          phase.packageVersions.map((version) => ({
            package_id: version.package_id,
            package_name: version.package_name,
          }))
        )
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
    return (
      <div id="in-progress" className="columns-wrapper">
        <BoardHeaders headers={phaseNames}/>
        <div className="progression">
          {packages.map((pkg) => (
            <SwimLane key={pkg.package_id} package={pkg}/>
          ))}
        </div>
      </div>
    );
  }
}

class SwimLane extends Component<SwimLaneProps> {

  render() {
    const pkg = this.props.package;

    return (
      <div>
        <div className="swimlane-header">
          {pkg.phases.map((phase, i) => (
            <div className="swimlane-column" key={i}>
              {i === 0 ? pkg.package_name : ''}
            </div>
          ))}
        </div>
        <ul id="phases" className="board phases">
          {pkg.phases.map((phase, i) => (
            <Phase key={i} {...phase} />
          ))}
        </ul>
      </div>
    );
  }
}
