import {
  PhaseType,
  SelectWorkItem,
  SwimLanepkg,
  WorkItemType,
} from '../ProgressionBoardInterfaces';

export const sampleWorkItemTest1: WorkItemType = {
  _id: '5b9c4fc12979930dbb0f13c5',
  change_count: 1,
  external_id: 'Story:1243',
  external_key: 'S-01031',
  title: 'Accounting Integration - Spike',
  value_goal: 'improve',
  isSplit: false,
};

export const sampleWorkItemTest2: WorkItemType = {
  _id: '5b9d258129799313db0f13cc',
  change_count: 2,
  external_id: 'Story:1244',
  external_key: 'S-01032',
  title: 'Accounting Integration - main',
  value_goal: 'improve',
  isSplit: false,
};

export const sampleProgressionPackageTest: SwimLanepkg = {
  package_id: '11111111111111111',
  package_name: 'app1',
  phases: [
    {
      name: 'Build',
      packageVersions: [],
      code_complete: false,
      delivery_category: 'Developing',
      description: '',
    },
    {
      code_complete: true,
      delivery_category: 'Packaged',
      description: '',
      name: 'Acceptance Test',
      packageVersions: [
        {
          _id: '5b60b39a2979935da30f13e1',
          activity_failed: false,
          actual: 62,
          arrival_dt: '2018-07-31T19:08:10.434000',
          cardIndicatorStatus: {
            activity_start_count: 3,
            estimated_time_remaining: 20034751,
            total_activity_count: 11,
          },
          change_count: 45,
          control_failed: false,
          fullversion_from: '5.0.122',
          fullversion_to: '5.0.146',
          last_update_dt: '2018-09-30T05:37:08.084000',
          package_id: '578d26d729799325c58985b4',
          package_name: 'webstore',
          pending_activity: true,
          phase_name: 'Acceptance Test',
          progression_id: '591afccd2979935b172328f8',
          rev_from: 122,
          rev_from_id: '5b9c4fc12979930dbb0f13cd',
          rev_to: 146,
          rev_to_id: '5ba79d5929799324b10f13cf',
          risk_coverage_percentage: null,
          risk_coverage_report_url: null,
          risk_dashboard_url: null,
          risk_failed_tests_count: null,
          risk_failed_tests_report_url: null,
          risk_has_failed_tests: false,
          risk_has_high_risk_file: false,
          risk_has_low_coverage: false,
          risk_has_severity1_violations: false,
          risk_severity1_report_url: null,
          risk_severity1_violation_count: null,
          risk_show_dashboard_link: false,
          team_id: '5bc508902979931838de6218',
          unmanaged_change_count: 0,
          version: '5.0',
          workitem_count: 25,
          workitems: [sampleWorkItemTest1, sampleWorkItemTest2],
        },
      ],
    },
  ],
};

export const sampleEmptyPhasesTest: Array<PhaseType> = [
  {
    name: 'Build',
    packageVersions: [],
    code_complete: false,
    delivery_category: 'Developing',
    description: '',
  },
  {
    name: 'Build',
    packageVersions: [],
    code_complete: false,
    delivery_category: 'Developing',
    description: '',
  },
];

export const selectedWorkItemProps: SelectWorkItem = {
  allowSelection: true,
  selectWorkItem: jest.fn(),
  hoverWorkItem: jest.fn(),
  hoveredWorkItem: '111',
  unHoverWorkItem: jest.fn(),
  selectedWorkItem: {
    _id: '111',
    change_count: 2,
    external_id: 'Story:2345',
    external_key: 'S-01540',
    title: 'Test WI',
    value_goal: 'improve',
    boardColumnRectRight: 55,
  },
};
