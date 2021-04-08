import React, { MutableRefObject, useState } from 'react';
import { Typography } from '@material-ui/core';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { CommonProps } from '../../components/CommonProps';
import { RevisionRangeLabel } from '../ctm-card/RevisionRangeLabel';
import { QCIconProps, QualityCorner } from '../ctm-card/QualityCorner';
import { PackageVersionLabel } from './PackageVersionLabel';
import { WorkItem } from '../workitem/WorkItem';
import { Card, CardIndicators } from '../ctm-card/Card';
import { getMostSignificantLabel } from './duration';
import {
  PackageType,
  SelectWorkItem,
  WorkItemType,
} from './ProgressionBoardInterfaces';
import { parseRevURL } from './parseRevURL';

export interface PackageDetailProps extends CommonProps {
  baseUrl: string;
  packageVer: PackageType;
  selectWorkitemProps: SelectWorkItem;
}

export const ValidPackage = React.forwardRef(
  (
    {
      baseUrl,
      className,
      'data-testid': dataTestId,
      packageVer,
      selectWorkitemProps,
    }: PackageDetailProps,
    ref: MutableRefObject<HTMLElement>
  ) => {
    const {
      activity_failed,
      cardIndicatorStatus,
      control_failed,
      package_id,
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
    const rootClasses = useStylesWithRootClass(className);

    const [timeEstLabel, updateTimeEstLabel] = useState('');
    const { selectedWorkItem } = selectWorkitemProps;
    const isCardSelected = !!workitems.find(
      (item) => item._id === selectedWorkItem?._id
    );
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
    ].filter((x) => !!x);

    const qcicons: Array<QCIconProps> = [
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
    ].filter((x) => !!x);

    const renderWorkItems = (items: WorkItemType[]) => {
      return items.map((item, i) => {
        const isSelected = item._id === selectedWorkItem?._id;
        const isFaded = isCardSelected && !isSelected;

        return (
          <WorkItem
            baseUrl={baseUrl}
            key={i}
            selectWorkItem={selectWorkitemProps}
            workitem={item}
            isSelected={isSelected}
            isFaded={isFaded}
            ref={ref}
          />
        );
      });
    };

    return (
      <Card
        bottomLeft={qcicons ? <QualityCorner qcicons={qcicons} /> : null}
        bottomRight={
          <RevisionRangeLabel
            baseUrl={baseUrl}
            revFrom={rev_from}
            revTo={rev_to}
            revToId={rev_to_id}
          />
        }
        className={rootClasses}
        data-testid={dataTestId}
        indicators={
          <CardIndicators indicators={indicators} baseUrl={baseUrl} />
        }
        isSelected={isCardSelected}
        url={baseUrl + parseRevURL(rev_from, rev_to_id)}
        fullversion_from={packageVer.fullversion_from}
        fullversion_to={packageVer.fullversion_to}
        rev_from={packageVer.rev_from}
        rev_to={packageVer.rev_to}
      >
        <Typography variant="h3">
          <PackageVersionLabel
            baseUrl={baseUrl}
            package_id={package_id}
            version={version}
          />
        </Typography>
        <div className="workitems">
          {renderWorkItems(workitems)}
          {workitems.length > 0 && (
            <Typography variant="body1">{workitems.length}</Typography>
          )}
        </div>
      </Card>
    );
  }
);
