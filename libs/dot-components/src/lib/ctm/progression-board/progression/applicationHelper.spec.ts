import { checkIfApplicationHasAnyVersion } from './applicationHelper';
import { SwimLanepkg } from '../ProgressionBoardInterfaces';

describe('applicationHelper', () => {
  const incorrectObjectStructure = {
    name: 'test',
  };

  const application: SwimLanepkg = {
    package_id: '578fc04f29799325c589a729',
    package_name: 'api',
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
            _id: '59c683b62979936aa8b9ab52',
            activity_failed: false,
            actual: 43,
            arrival_dt: '2017-09-23T15:54:30.566000',
            change_count: 44,
            control_failed: true,
            fullversion_from: '3.1.83',
            fullversion_to: '3.1.100',
            last_update_dt: '2017-11-01T16:54:32.030000',
            package_id: '578fc04f29799325c589a729',
            package_name: 'api',
            pending_activity: false,
            phase_name: 'Acceptance Test',
            progression_id: '591afccd2979935b172328f8',
            rev_from: 83,
            rev_from_id: '59eb71b129799366ffb9ab50',
            rev_to: 100,
            rev_to_id: '59f4ee832979931690b9ab50',
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
            team_id: '5bc507d029799317d49517fb',
            unmanaged_change_count: 24,
            version: '3.1',
            workitem_count: 8,
            workitems: [
              {
                _id: '59f196572979930319b9ab50',
                change_count: 3,
                external_id: '10299',
                external_key: 'API-100',
                title: 'Install scripts and documentation cleanup',
                value_goal: 'improve',
                isSplit: false,
              },
            ],
          },
          {
            activity_failed: false,
            actual: 68,
            arrival_dt: '2017-11-03T20:23:37.984000',
            change_count: 24,
            control_failed: true,
            fullversion_from: '3.1.69',
            fullversion_to: '3.1.82',
            last_update_dt: '2017-11-01T16:54:32.030000',
            package_id: '578fc04f29799325c589a729',
            package_name: 'api',
            pending_activity: false,
            phase_name: 'Regression Test',
            progression_id: '591afccd2979935b172328f8',
            rev_from: 69,
            rev_from_id: '59d638a32979933824b9ab4f',
            rev_to: 82,
            rev_to_id: '59df2e002979935bfbb9ab50',
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
            team_id: '5bc507d029799317d49517fb',
            unmanaged_change_count: 0,
            version: '3.1',
            workitem_count: 14,
            workitems: [
              {
                _id: '59d638a32979933824b9ab4e',
                change_count: 1,
                external_id: '10286',
                external_key: 'API-87',
                title: 'Cato Vcenter Integration',
                value_goal: 'improve',
                isSplit: false,
              },
            ],
          },
        ],
      },
      {
        code_complete: false,
        delivery_category: 'Packaged',
        description: '',
        name: 'Performance Test',
        packageVersions: [
          {
            _id: '59f9fc4829799335e22ae905',
            activity_failed: false,
            actual: 68,
            arrival_dt: '2017-11-01T16:54:32.030000',
            cardIndicatorStatus: {
              activity_start_count: 9,
              estimated_time_remaining: 1158539,
              total_activity_count: 11,
            },
            change_count: 50,
            control_failed: true,
            fullversion_from: '3.1.43',
            fullversion_to: '3.1.68',
            last_update_dt: '2017-11-01T16:54:32.030000',
            package_id: '578fc04f29799325c589a729',
            package_name: 'api',
            pending_activity: false,
            phase_name: 'Performance Test',
            progression_id: '591afccd2979935b172328f8',
            rev_from: 43,
            rev_from_id: '59c683b62979936aa8b9ab50',
            rev_to: 68,
            rev_to_id: '59d37d072979932ffdb9ab4f',
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
            team_id: '5bc507d029799317d49517fb',
            unmanaged_change_count: 0,
            version: '3.1',
            workitem_count: 26,
            workitems: [
              {
                _id: '59c683b62979936aa8b9ab4f',
                change_count: 2,
                external_id: '10267',
                external_key: 'API-68',
                title: 'Ssh Into instance failed',
                value_goal: 'improve',
              },
              {
                _id: '59c6fd1b2979936d43b9ab50',
                change_count: 3,
                external_id: '10277',
                external_key: 'API-78',
                title: 'Commands with field arrays crash the task editor.',
                value_goal: 'improve',
              },
            ],
          },
        ],
      },
    ],
  };

  const emptyAppSample: SwimLanepkg = {
    package_id: '578fc04f29799325c589a729',
    package_name: 'api',
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
            package_name: 'empty-app',
          },
        ],
      },
    ],
  };

  describe('checkIfApplicationHasWorkItems function', () => {
    it('should return false if null value passed as argument', () => {
      expect(checkIfApplicationHasAnyVersion(null)).toBe(false);
    });
    it('should return false if undefined value passed as argument', () => {
      expect(checkIfApplicationHasAnyVersion(undefined)).toBe(false);
    });
    it('should return false if incorrect data structure is passed in', () => {
      expect(
        checkIfApplicationHasAnyVersion(incorrectObjectStructure as never)
      ).toBe(false);
    });
    it('should return false if application has no workitems', () => {
      expect(checkIfApplicationHasAnyVersion(emptyAppSample)).toBe(false);
    });
    it('should return true if application has at least one workitem', () => {
      expect(checkIfApplicationHasAnyVersion(application)).toBe(true);
    });
  });
});
