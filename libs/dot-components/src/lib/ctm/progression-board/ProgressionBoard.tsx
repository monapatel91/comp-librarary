import React, { Component } from 'react';
import Phase from './Phase';
import { BoardHeaders } from './BoardHeaders';

export interface  ProgressionBoardProps {
  phases: any
}

export interface SwimLaneProps {
  package: any
}

export class ProgressionBoard extends Component<ProgressionBoardProps> {

  constructor(props, context) {
    super(props, context);
  }

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
          var nameA = packageA.package_name.toUpperCase();
          var nameB = packageB.package_name.toUpperCase();
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
          var phases = this.props.phases.map((phase) => ({
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
    var packages = this.getPackages();
    var phaseNames = this.props.phases.map((phase) => phase.name);
    return (
      <div id="in-progress" className="columns-wrapper">
        <BoardHeaders headers={phaseNames} />
        <div className="progression">
          {packages.map((pkg) => (
            <SwimLane key={pkg.package_id} package={pkg} />
          ))}
        </div>
      </div>
    );
  }
}

class SwimLane extends Component<SwimLaneProps> {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    var pkg = this.props.package;

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
