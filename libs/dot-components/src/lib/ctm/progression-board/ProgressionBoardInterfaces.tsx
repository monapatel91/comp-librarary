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
  workitemsDetails?: Array<WorkItemDetailsType>;
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
  allowSelection: boolean;
  hoverWorkItem: (id: string) => void;
  hoveredWorkItem: string;
  selectedWorkItem: SelectedWorkItem;
  selectWorkItem: (workItem: SelectedWorkItem) => void;
  unHoverWorkItem: () => void;
}

export interface WorkItemSelection {
  /* Extended workitem data object */
  selectedWorkItem: SelectedWorkItem;
  /* Callback function which will execute upon workitem change event */
  onWorkItemChange: (workItem: WorkItemType) => void;
  /* Width of the drawer in pixels */
  drawerWidth: number;
  /* Optional value which can be set if drawer is offset from progression board */
  drawerOffsetFromBoard?: number;
}

export interface SelectedWorkItem extends WorkItemType {
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

export interface ProgressionBoardData {
  workItemDetails?: WorkItemDetailsType;
  onWorkItemChange?: (workItemId: string) => void;
}

export interface WorkItemDetailsType {
  /* Workitem's ID */
  id: string;
  /* Workitem's description */
  description: string;
  /* Array of workitem owner's first and last name. Can be one or multiple values inside of array. */
  owner: Array<string>;
  /* Workitem's source system name (ie: Jira, Github, Gitlab, ...) */
  sourceSystemName: string;
  /* Workitem's source system URL */
  sourceSystemUrl: string;
}

export interface ApplicationAPI {
  payloadUrl: string;
  sourceControls: Array<SourceControlAPI>;
  ticketSystems: Array<TicketSystemsAPI>;
}

export interface SourceControlAPI {
  id: string;
  title: string;
  servers: Array<SCServerAPI>;
}

export interface SCServerAPI {
  id: string;
  title: string;
  isdefault?: boolean;
  name: string;
  owner?: string;
  team_id?: string | null;
  token?: string;
  url?: string;
}

export interface TicketSystemsAPI {
  id: string;
  title: string;
  servers: Array<TicketSystemServerAPI>;
}

export interface TicketSystemServerAPI {
  id: string;
  title: string;
  improve_types?: string;
  isdefault?: boolean;
  maintain_types?: string;
  name?: string;
  password?: string;
  team_id?: string | null;
  token?: string;
  url?: string;
  user?: string;
}

export interface PBApplication {
  /* API data needed to populate PB's application controls */
  apiData: ApplicationAPI;
  /* Flag which indicates whether application drawer is opened */
  isDrawerOpened: boolean;
  /* Callback function which will be called when drawer needs to close */
  onDrawerClose: () => void;
  /* Callback function which will be called when form's 'Cancel' button is clicked */
  onFormCancel: () => void;
  /* Callback function which executes upon new application form submission */
  onFormSubmit: (applicationFormData: ApplicationFormOutput) => void;
}

export interface ApplicationFormOutput {
  applicationName: string;
  createAnother: boolean;
  sourceControls: Array<SourceControl>;
  ticketSystem: TicketSystem;
}

export interface ApplicationForm extends ApplicationFormOutput {
  activeSourceControl: SourceControl;
}

export interface AutoCompleteControl {
  id: string;
  title: string;
}

export interface SourceControl extends AutoCompleteControl {
  servers: Array<SCServer>;
}

export interface SCServer extends AutoCompleteControl {
  name: string;
}

export interface TicketSystem extends AutoCompleteControl {
  servers: Array<AutoCompleteControl>;
}
