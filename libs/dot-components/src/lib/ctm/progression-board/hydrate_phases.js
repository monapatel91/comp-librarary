const clamp = (string, length) =>
  string.length >= length ? string.substring(0, length) + "..." : string;

const forceNewState = phases =>
  phases.map(phase => ({
    ...phase,
    packageVersions: phase.packageVersions.map(packageVersion => ({
      ...packageVersion,
      workitems: packageVersion.workitems.map(workitem => ({
        ...workitem,
      })),
    })),
  }));

export const determineSplitWorkitems = phases => {
  const workitemMap = {};

  phases.forEach(phase => {
    phase.packageVersions.forEach(packageVersion => {
      packageVersion.workitems.forEach(workitem => {
        const currentCount = workitemMap[workitem._id] || 0;
        workitemMap[workitem._id] = currentCount + 1;
      });
    });
  });

  return workitemMap;
};

export const hydratePhases = (
  phases = [],
  workitemMap = null,
  selectedWorkitem = null,
  emphasizedWorkitem = null,
) => {
  phases.forEach(phase => {
    phase.packageVersions.forEach(packageVersion => {
      packageVersion.workitems.forEach(workitem => {
        const isEmphasized =
          emphasizedWorkitem && workitem._id === emphasizedWorkitem;
        const isSelected =
          selectedWorkitem && workitem._id === selectedWorkitem;
        const isSplit = workitemMap && workitemMap[workitem._id] > 1;
        workitem.isEmphazied = isEmphasized;
        workitem.isSelected = isSelected;
        workitem.isSplit = isSplit;
      });
      packageVersion.showDashboardLink =
        packageVersion.risk_show_dashboard_link;
      packageVersion.dashboardUrl = packageVersion.risk_dashboard_url;
      packageVersion.hasSeverity1 =
        packageVersion.risk_has_severity1_violations;
      packageVersion.severity1Label = `${
        packageVersion.risk_severity1_violation_count
      } Severity One Violations`;
      packageVersion.severity1Url =
        packageVersion.risk_severity1_report_url;
      packageVersion.hasFailedTests =
        packageVersion.risk_has_failed_tests;
      packageVersion.failedTestsLabel = `${
        packageVersion.risk_failed_tests_count
      } Failed Tests`;
      packageVersion.failedTestsUrl =
        packageVersion.risk_failed_tests_report_url;
      packageVersion.hasLowCoverage =
        packageVersion.risk_has_low_coverage;
      packageVersion.coverageLabel = `${
        packageVersion.risk_coverage_percentage
      }% Coverage`;
      packageVersion.coverageUrl =
        packageVersion.risk_coverage_report_url;

      packageVersion.hasUnmanaged =
        packageVersion.unmanaged_change_count > 0;
      packageVersion.hasRisky = packageVersion.riskyFileCount > 0;
      packageVersion.riskyFileLabel = `${
        packageVersion.riskyFileCount
      } Risky Files.`;
      packageVersion.unManagedCommitLabel = `${
        packageVersion.unmanaged_change_count
      } Rogue Commits.`;
      packageVersion.rangeIsInvalid =
        packageVersion.rev_from > packageVersion.rev_to;
      packageVersion.revurl = `/flow/package_revision?id=${
        packageVersion.rev_to_id
      }&from_revision=${packageVersion.rev_from}`;
      packageVersion.revisionRangeLabel =
        packageVersion.rev_from + " - " + packageVersion.rev_to;
      const fromlbl =
        packageVersion.fullversion_from || packageVersion.rev_from;
      const tolbl =
        packageVersion.fullversion_to || packageVersion.rev_to;
      const title = fromlbl + " - " + tolbl;
      packageVersion.titleTooltip = title;
      packageVersion.title = clamp(title, 18);
    });
  });
  const newState = forceNewState(phases);
  return newState;
};

const decoratePackageVersion = selectedPackageVersion => packageVersion => {
  const key = packageVersion.package_name + packageVersion.version;
  const isSelected = key === selectedPackageVersion;
  return {...packageVersion, key, isSelected};
};

const getNewPackageVersions = (phases, getNewPackageVersion) => {
  return phases.map(phase => {
    const packageVersions = phase.packageVersions.map(getNewPackageVersion);
    return {
      ...phase,
      packageVersions: packageVersions,
    };
  });
};

const calcaulateActivityCompletion = packageVersion => {
  const activityCompletionPercentage =
    Math.floor(
      (packageVersion.activity_start_count /
        packageVersion.total_activity_count) *
      100,
    ) || 0;
  return {
    ...packageVersion,
    activityCompletionPercentage,
  };
};

export const calculateActivityCompletions = phases =>
  getNewPackageVersions(phases, calcaulateActivityCompletion);

export const identifySelectedPackageVersions = (
  phases,
  selectedPackageVersion,
) =>
  getNewPackageVersions(
    phases,
    decoratePackageVersion(selectedPackageVersion),
  );

export const getWorkitemDetailLabel = (selectedWorkitem, phases) => {
  let foundWorkitem = {external_key: "", title: ""};
  phases.forEach(phase =>
    phase.packageVersions.forEach(packageVersion =>
      packageVersion.workitems.forEach(workitem => {
        if (workitem._id === selectedWorkitem) foundWorkitem = workitem;
      }),
    ),
  );
  return selectedWorkitem
    ? `${foundWorkitem.external_key} - ${foundWorkitem.title}`
    : "";
};
