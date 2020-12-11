import React, { Component } from 'react';
import Phase from './Phase';
import { SwimLaneProps } from './ProgressionBoardInterfaces';

export class SwimLane extends Component<SwimLaneProps> {
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
