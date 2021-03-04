export interface CardIndicatorType {
  activity_start_count: number;
  estimated_time_remaining: number;
  total_activity_count: number;
}

export interface PackageType {
  _id: string;
  activity_failed: boolean;
  actual: number;
  arrival_dt: string;
  cardIndicatorStatus?: CardIndicatorType;
  change_count: number;
  control_failed: boolean;
  fullversion_from: string;
  fullversion_to: string;
  last_update_dt: string;
  package_id: string;
  package_name: string;
  pending_activity: boolean;
  phase_name: string;
  progression_id: string;
  rev_from: number;
  rev_from_id: string;
  rev_to: number;
  rev_to_id: string;
  riskyFileCount?: number;
  risk_coverage_percentage: number;
  risk_coverage_report_url: string;
  risk_dashboard_url: string;
  risk_failed_tests_count: number;
  risk_failed_tests_report_url: string;
  risk_has_failed_tests: boolean;
  risk_has_high_risk_file: boolean;
  risk_has_low_coverage: boolean;
  risk_has_severity1_violations: boolean;
  risk_severity1_report_url: string;
  risk_severity1_violation_count: number;
  risk_show_dashboard_link: boolean;
  team_id: string;
  unmanaged_change_count: number;
  version: string;
  workitem_count: number;
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

export interface SelectWorkItem {
  deSelectWorkItem: () => void;
  displayDrawer: boolean;
  hoverWorkItem: (id: string) => void;
  hoveredWorkItem: string;
  selectedWorkItem: SelectedWorkItem;
  selectWorkItem: (workItem: SelectedWorkItem) => void;
  unHoverWorkItem: () => void;
}

export interface SelectedWorkItem extends WorkItemType {
  wiClientRectRight: number;
  boardColumnRectRight: number;
}

export interface WorkItemType {
  _id: string;
  change_count: number;
  external_id: string;
  external_key: string;
  isEmphasized?: boolean;
  isSelected?: boolean;
  isSplit?: boolean;
  title: string;
  value_goal: string;
}
