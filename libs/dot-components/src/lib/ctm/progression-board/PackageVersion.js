import React, {Component} from 'react';
import RevisionRangeLabel from '../ctm-card/RevisionRangeLabel';
import QualityCorner from '../ctm-card/QualityCorner';
import PackageVersionLabel from './PackageVersionLabel';
import {WorkItem} from '../workitem/WorkItem';
import {Card, CardIndicators} from '../ctm-card/Card';
import {getMostSignificantLabel} from './duration';

// this is temporary code.
// #TODO use new api
// hover data?  continuum uiMethods.py
const getProgressionCardIndicatorData = (params) => {
  const result = new Promise((resolve, reject) => {
      resolve({
        "progression_id": "591afccd2979935b172328f8",
        "package_id": "578fc04f29799325c589a729",
        "revision": 100,
        "phase_name": "Acceptance Test",
        "arrival_dt": "2017-09-23T15:54:30.566000"
      });
    }
  );
  return result;
};

const isTruthy = (x) => !!x;

class ValidPackage extends Component {
  constructor(props, context) {
    super(props, context);
    this.hoverHandler = this.hoverHandler.bind(this);
    this.state = {
      timeEstimateLabel: '',
      activityCompletionPercentageLabel: '',
      severityOneLabel: '',
      failedTestsLabel: '',
      coverageLabel: '',
    };
  }

  hoverHandler() {
    const {
      progression_id,
      package_id,
      rev_to,
      phase_name,
      arrival_dt,
    } = this.props;

    getProgressionCardIndicatorData({
      progression_id,
      package_id,
      revision: rev_to,
      phase_name,
      arrival_dt,
    }).then((indicatorData) => {
      let activityCompletionPercentage =
        Math.floor(
          (indicatorData.activity_start_count /
            indicatorData.total_activity_count) *
          100
        ) || 0;
      this.setState(() => {
        return {
          timeEstimateLabel: `Delivery forecast:  ${getMostSignificantLabel(
            indicatorData.estimated_time_remaining || 0
          )}`,
          activityCompletionPercentageLabel: `${activityCompletionPercentage}% Activities complete.`,
        };
      });
    });
  }

  render() {
    const {
      showDashboardLink,
      dashboardUrl,
      hasSeverity1,
      severity1Label,
      severity1Url,
      hasFailedTests,
      failedTestsLabel,
      failedTestsUrl,
      hasLowCoverage,
      coverageLabel,
      coverageUrl,
      hasUnmanaged,
      hasRisky,
      riskyFileLabel,
      unManagedCommitLabel,
      revurl,
      revisionRangeLabel = `${this.props.rev_from} - ${this.props.rev_to}`,
      version,
      package_id,
      package_name,
      pending_activity,
      control_failed,
      activity_failed,
    } = this.props;
    const {timeEstimateLabel, activityCompletionPercentageLabel} = this.state;

    const indicators = [
      control_failed || activity_failed
        ? {
          id: 'error-outlines',
          label: 'Acitivity or Control failed',
          url: this.props.revurl,
        }
        : null,
      hasRisky ? {id: 'error-outlines', label: riskyFileLabel} : null,
      pending_activity
        ? {
          id: 'pending-clock',
          label: 'Pending Manual Activity',
          url: this.props.revurl,
        }
        : null,
      {
        id: 'file-dotted',
        label: timeEstimateLabel,
        onHover: this.hoverHandler,
      },
      {
        id: 'check-solid',
        label: activityCompletionPercentageLabel,
        onHover: this.hoverHandler,
      },
    ].filter(isTruthy);

    const qcicons = [
      showDashboardLink
        ? {
          id: 'info-solid',
          label: 'Jump to Dashboard',
          url: dashboardUrl,
        }
        : null,
      hasUnmanaged
        ? {id: 'rogue-commits', label: unManagedCommitLabel}
        : null,
      hasSeverity1
        ? {
          id: 'lock',
          label: severity1Label,
          url: severity1Url,
        }
        : null,
      hasFailedTests
        ? {
          id: 'thumbs-down',
          label: failedTestsLabel,
          url: failedTestsUrl,
        }
        : null,
      hasLowCoverage
        ? {
          id: 'error-solid',
          label: coverageLabel,
          url: coverageUrl,
        }
        : null,
    ].filter(isTruthy);
    return (
      <Card
        url={this.props.baseUrl + this.props.revurl}
        indicators={<CardIndicators indicators={indicators} baseUrl={this.props.baseUrl}/>}
        bottomLeft={
          <QualityCorner
            qcicons={qcicons}
            version={version}
            package_name={package_name}
            package_id={package_id}
          />
        }
        bottomRight={
          <RevisionRangeLabel
            baseUrl={this.props.baseUrl}
            revurl={revurl}
            revisionRangeLabel={revisionRangeLabel}
          />
        }
        {...this.props}
      >
        <div className="title">
          <PackageVersionLabel version={version} package_id={package_id} baseUrl={this.props.baseUrl}/>
        </div>
        <ul className="workitems">
          {this.props.workitems.map((workitem, i) => (
            <WorkItem key={i} {...workitem} {...this.props.selectWorkitemProps} baseUrl={this.props.baseUrl}/>
          ))}
          {this.props.workitems.length > 0 ? (
            <li>{this.props.workitems.length}</li>
          ) : null}
        </ul>
      </Card>
    );
  }
}

export default ValidPackage;
