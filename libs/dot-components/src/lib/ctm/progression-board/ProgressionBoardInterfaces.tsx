export interface WorkItemType {
  _id: string;
  change_count: number | null;
  external_id: string;
  external_key: string;
  isEmphasized: boolean;
  isSelected: boolean;
  isSplit: boolean;
  title: string;
  value_goal: string;
}

export interface CardIndicatorType {
  activity_start_count: number | null;
  estimated_time_remaining: number | null;
  total_activity_count: number | null;
}

export interface PackageType {
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
  riskyFileCount: number | null; // this wasn't previously here?
  risk_coverage_percentage: number | null;
  risk_coverage_report_url: string | null;
  risk_dashboard_url: string | null;
  risk_failed_tests_count: number | null;
  risk_failed_tests_report_url: string | null;
  risk_has_failed_tests: boolean;
  risk_has_high_risk_file: boolean;
  risk_has_low_coverage: boolean;
  risk_has_severity1_violations: boolean;
  risk_severity1_report_url: string | null;
  risk_severity1_violation_count: number | null;
  risk_show_dashboard_link: boolean;
  team_id: string;
  unmanaged_change_count: number | null;
  version: string;
  workitem_count: number | null;
  workitems: Array<WorkItemType>;
}

export interface PhaseType {
  code_complete: boolean;
  delivery_category?: string;
  description?: string;
  name: string;
  packageVersions: Array<PackageType>;
}

export interface SwimLanepkg {
  package_id: string;
  package_name: string;
  phases: Array<PhaseType>;
}

export interface ProgressionBoardProps {
  baseUrl?: string;
  phases: Array<PhaseType>;
}

export interface SwimLaneProps {
  baseUrl: string;
  className: string;
  progressionPackage: SwimLanepkg;
  selectWorkitemProps: {
    selectWorkitem: (id) => void;
    deSelectWorkitem: (id) => void;
    selectedWorkitem: string;
  };
}
