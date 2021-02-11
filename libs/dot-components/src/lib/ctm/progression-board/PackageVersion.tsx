import React, { useState } from 'react';
import RevisionRangeLabel from '../ctm-card/RevisionRangeLabel';
import QualityCorner from '../ctm-card/QualityCorner';
import PackageVersionLabel from './PackageVersionLabel';
import { WorkItem } from '../workitem/WorkItem';
import { Card, CardIndicators } from '../ctm-card/Card';
import { getMostSignificantLabel } from './duration';
import { PackageDetailProps } from './ProgressionBoardInterfaces';

export const parseRevURL = (revFrom: number | null, revToId: string) => {
  return `/flow/package_revision?id=${revToId}&from_revision=${revFrom}`;
};

export const ValidPackage = ({
  baseUrl,
  packageVer,
  selectWorkitemProps,
}: PackageDetailProps) => {
  const {
    activity_failed,
    cardIndicatorStatus,
    control_failed,
    package_id,
    package_name,
    pending_activity,
    rev_from,
    rev_to,
    rev_to_id,
    risk_coverage_percentage,
    risk_coverage_report_url,
    risk_dashboard_url,
    risk_failed_tests_count,
    risk_failed_tests_report_url,
    risk_has_failed_tests,
    risk_has_low_coverage,
    risk_has_severity1_violations,
    risk_severity1_report_url,
    risk_severity1_violation_count,
    risk_show_dashboard_link,
    riskyFileCount,
    unmanaged_change_count,
    version,
    workitems,
  } = packageVer;

  const [timeEstLabel, updateTimeEstLabel] = useState('');
  const [
    activityCompletionPercentLabel,
    updateActivityCompletionPercentLabel,
  ] = useState('');

  const hoverHandler = () => {
    const {
      estimated_time_remaining,
      activity_start_count,
      total_activity_count,
    } = cardIndicatorStatus;

    const activityCompletionPercentage =
      Math.floor((activity_start_count / total_activity_count) * 100) || 0;
    updateTimeEstLabel(
      `Delivery forecast: ${getMostSignificantLabel(
        estimated_time_remaining || 0
      )}`
    );
    updateActivityCompletionPercentLabel(
      `${activityCompletionPercentage}% Activities complete.`
    );
  };

  const isTruthy = (x) => !!x;

  const indicators = [
    control_failed || activity_failed
      ? {
          id: 'error-outlines',
          label: 'Acitivity or Control failed',
          url: parseRevURL(rev_from, rev_to_id),
        }
      : null,
    riskyFileCount > 0
      ? { id: 'error-outlines', label: `${riskyFileCount} Risky Files.` }
      : null,
    pending_activity
      ? {
          id: 'pending-clock',
          label: 'Pending Manual Activity',
          url: parseRevURL(rev_from, rev_to_id),
        }
      : null,
    {
      id: 'file-dotted',
      label: timeEstLabel,
      onHover: hoverHandler,
    },
    {
      id: 'check-solid',
      label: activityCompletionPercentLabel,
      onHover: hoverHandler,
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
    unmanaged_change_count > 0
      ? {
          id: 'rogue-commits',
          label: `${unmanaged_change_count} Rogue Commits.`,
        }
      : null,
    risk_has_severity1_violations
      ? {
          id: 'lock',
          label: `${risk_severity1_violation_count} Severity One Violations`,
          url: risk_severity1_report_url,
        }
      : null,
    risk_has_failed_tests
      ? {
          id: 'thumbs-down',
          label: `${risk_failed_tests_count} Failed Tests`,
          url: risk_failed_tests_report_url,
        }
      : null,
    risk_has_low_coverage
      ? {
          id: 'error-solid',
          label: `${risk_coverage_percentage}% Coverage`,
          url: risk_coverage_report_url,
        }
      : null,
  ].filter(isTruthy);

  return (
    <Card
      url={baseUrl + parseRevURL(rev_from, rev_to_id)}
      indicators={<CardIndicators indicators={indicators} baseUrl={baseUrl} />}
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
          baseUrl={baseUrl}
          revurl={parseRevURL(rev_from, rev_to_id)}
          revisionRangeLabel={`${rev_from} - ${rev_to}`}
        />
      }
      {...packageVer}
    >
      <div className="title">
        <PackageVersionLabel
          baseUrl={baseUrl}
          package_id={package_id}
          version={version}
        />
      </div>
      <ul className="workitems">
        {workitems.map((workitem, i) => (
          <WorkItem
            baseUrl={baseUrl}
            key={i}
            selectWorkItem={selectWorkitemProps}
            workitem={workitem}
          />
        ))}
        {workitems.length > 0 ? <li>{workitems.length}</li> : null}
      </ul>
    </Card>
  );
};

export default ValidPackage;
