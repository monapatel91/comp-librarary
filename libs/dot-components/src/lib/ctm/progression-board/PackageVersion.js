import React, { Component } from 'react';
import RevisionRangeLabel from '../ctm-card/RevisionRangeLabel';
import QualityCorner from '../ctm-card/QualityCorner';
import PackageVersionLabel from './PackageVersionLabel';
import { WorkItem } from '../workitem/WorkItem';
import { Card, CardIndicators } from '../ctm-card/Card';
import { getMostSignificantLabel } from './duration';

const isTruthy = (x) => !!x;

export const parseRevURL = (revFrom, revToId) => {
  return `/flow/package_revision?id=${revToId}&from_revision=${revFrom}`;
};

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
      estimated_time_remaining,
      activity_start_count,
      total_activity_count,
    } = this.props.cardIndicatorStatus;

    let activityCompletionPercentage =
      Math.floor((activity_start_count / total_activity_count) * 100) || 0;
    this.setState(() => {
      return {
        timeEstimateLabel: `Delivery forecast:  ${getMostSignificantLabel(
          estimated_time_remaining || 0
        )}`,
        activityCompletionPercentageLabel: `${activityCompletionPercentage}% Activities complete.`,
      };
    });
  }

  render() {
    const {
      risk_show_dashboard_link,
      risk_dashboard_url,
      risk_has_severity1_violations,
      severity1Label = `${this.props.risk_severity1_violation_count} Severity One Violations`,
      risk_severity1_report_url,
      risk_has_failed_tests,
      failedTestsLabel = `${this.props.risk_failed_tests_count} Failed Tests`,
      risk_failed_tests_report_url,
      risk_has_low_coverage,
      coverageLabel = `${this.props.risk_coverage_percentage}% Coverage`,
      risk_coverage_report_url,
      hasUnmanaged = this.props.unmanaged_change_count > 0,
      hasRisky = this.props.riskyFileCount > 0,
      riskyFileLabel = `${this.props.riskyFileCount} Risky Files.`,
      unManagedCommitLabel = `${this.props.unmanaged_change_count} Rogue Commits.`,
      revurl = parseRevURL(this.props.rev_from, this.props.rev_to_id),
      revisionRangeLabel = `${this.props.rev_from} - ${this.props.rev_to}`,
      version,
      package_id,
      package_name,
      pending_activity,
      control_failed,
      activity_failed,
    } = this.props;
    const { timeEstimateLabel, activityCompletionPercentageLabel } = this.state;

    const indicators = [
      control_failed || activity_failed
        ? {
            id: 'error-outlines',
            label: 'Acitivity or Control failed',
            url: parseRevURL(this.props.rev_from, this.props.rev_to_id),
          }
        : null,
      hasRisky ? { id: 'error-outlines', label: riskyFileLabel } : null,
      pending_activity
        ? {
            id: 'pending-clock',
            label: 'Pending Manual Activity',
            url: parseRevURL(this.props.rev_from, this.props.rev_to_id),
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
      risk_show_dashboard_link
        ? {
            id: 'info-solid',
            label: 'Jump to Dashboard',
            url: risk_dashboard_url,
          }
        : null,
      hasUnmanaged
        ? { id: 'rogue-commits', label: unManagedCommitLabel }
        : null,
      risk_has_severity1_violations
        ? {
            id: 'lock',
            label: severity1Label,
            url: risk_severity1_report_url,
          }
        : null,
      risk_has_failed_tests
        ? {
            id: 'thumbs-down',
            label: failedTestsLabel,
            url: risk_failed_tests_report_url,
          }
        : null,
      risk_has_low_coverage
        ? {
            id: 'error-solid',
            label: coverageLabel,
            url: risk_coverage_report_url,
          }
        : null,
    ].filter(isTruthy);
    return (
      <Card
        url={
          this.props.baseUrl +
          parseRevURL(this.props.rev_from, this.props.rev_to_id)
        }
        indicators={
          <CardIndicators
            indicators={indicators}
            baseUrl={this.props.baseUrl}
          />
        }
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
          <PackageVersionLabel
            version={version}
            package_id={package_id}
            baseUrl={this.props.baseUrl}
          />
        </div>
        <ul className="workitems">
          {this.props.workitems.map((workitem, i) => (
            <WorkItem
              key={i}
              {...workitem}
              {...this.props.selectWorkitemProps}
              baseUrl={this.props.baseUrl}
            />
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
