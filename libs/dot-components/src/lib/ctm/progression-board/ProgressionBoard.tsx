import React, { Component } from 'react';
import Phase from './Phase';
import { BoardHeaders } from './BoardHeaders';

import './ProgressionBoard.scss';
import { hydratePhases } from './hydrate_phases';

type WorkItemType = {
  _id: string;
  change_count: number | null;
  external_id: string;
  external_key: string;
  title: string;
  value_goal: string;
};

type CardIndicatorType = {
  activity_start_count: number | null;
  estimated_time_remaining: number | null;
  total_activity_count: number | null;
};

type PackageType = {
  _id: string;
  activity_failed: boolean;
  actual: number | null;
  arrival_dt: string;
  cardIndicatorStatus?: CardIndicatorType;
  change_count: number | null;
  control_failed: boolean;
  fullversion_from: string;
  fullversion_to: string;
  last_update_dt: string;
  package_id: string;
  package_name: string;
  pending_activity: boolean;
  phase_name: string;
  progression_id: string;
  rev_from: number | null;
  rev_from_id: string;
  rev_to: number | null;
  rev_to_id: string;
  risk_coverage_percentage: number | null;
  risk_coverage_report_url: number | null;
  risk_dashboard_url: number | null;
  risk_failed_tests_count: number | null;
  risk_failed_tests_report_url: number | null;
  risk_has_failed_tests: boolean;
  risk_has_high_risk_file: boolean;
  risk_has_low_coverage: boolean;
  risk_has_severity1_violations: boolean;
  risk_severity1_report_url: number | null;
  risk_severity1_violation_count: number | null;
  risk_show_dashboard_link: boolean;
  team_id: string;
  unmanaged_change_count: number | null;
  version: string;
  workitem_count: number | null;
  workitems: Array<WorkItemType>;
};

type PhaseType = {
  code_complete: boolean;
  delivery_category: string;
  description: string;
  name: string;
  packageVersions: Array<PackageType>;
};

type SwimLanepkg = {
  package_id: string;
  package_name: string;
  phases:{
       packageVersions: PackageType[];
        code_complete: boolean;
        delivery_category: string;
        description: string;
        name: string;
  }[];
};

export interface ProgressionBoardProps {
  phases: Array<PhaseType>;
  baseUrl: string;
}

export interface SwimLaneProps {
  package: SwimLanepkg;
  selectWorkitemProps: {
    selectWorkitem: (id) => void;
    deSelectWorkitem: (id) => void;
    selectedWorkitem: string;
  };
  baseUrl: string;
}
export interface pbState {
  selectedWorkitem: '';
}

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
    const selectWorkitemProps = {
      selectWorkitem: this.selectWorkitem,
      deSelectWorkitem: this.deSelectWorkitem,
      selectedWorkitem: this.state.selectedWorkitem,
    };
    const baseUrl = this.props.baseUrl;
    return (
      <div id="in-progress" className="columns-wrapper">
        <BoardHeaders headers={phaseNames} />
        <div className="progression">
          {packages.map((pkg) => (
            <SwimLane
              key={pkg.package_id}
              package={pkg}
              selectWorkitemProps={selectWorkitemProps}
              baseUrl={baseUrl}
            />
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
            <Phase
              key={i}
              {...phase}
              selectWorkitemProps={this.props.selectWorkitemProps}
              baseUrl={this.props.baseUrl}
            />
          ))}
        </ul>
      </div>
    );
  }
}
