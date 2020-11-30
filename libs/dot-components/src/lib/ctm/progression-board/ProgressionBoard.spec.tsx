import React from 'react';
import { render } from '@testing-library/react';

import {ProgressionBoard} from './ProgressionBoard';

const data = [
  {
    name: 'Build',
    packageVersions: [],
    code_complete: false
  },
  {
    name: 'Acceptance Test',
    packageVersions: [
      {
        _id: '5f875346f8f7ab047a307041',
        activity_failed: true,
        actual: 1,
        arrival_dt: '2020-10-14T19:36:38.586000',
        change_count: 4,
        control_failed: false,
        fullversion_from: '1.1',
        fullversion_to: '1.2',
        last_update_dt: '2020-10-14T19:44:43.288000',
        package_id: '578d26e129799325c58985b5',
        package_name: 'database',
        pending_activity: false,
        phase_name: 'Acceptance Test',
        progression_id: '591afccd2979935b172328f8',
        rev_from: 1,
        rev_from_id: '5f875346f8f7ab047a307034',
        rev_to: 2,
        rev_to_id: '5f87552bf8f7ab0481fd71fd',
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
        version: '1',
        workitem_count: 1,
        workitems: [
          {
            _id: '5f875342f8f7ab047a30702a',
            change_count: 4,
            external_id: 'Story:1119',
            external_key: 'B-01036',
            title: 'Sample: Multi-View Customer Calendar',
            value_goal: 'improve',
            isEmphazied: false,
            isSelected: false,
            isSplit: false
          }
        ]
      }
    ],
    code_complete: true
  },
  {
    name: 'Regression Test',
    packageVersions: [],
    code_complete: false
  },
  {
    name: 'Performance Test',
    packageVersions: [],
    code_complete: false
  },
  {
    name: 'Ready for Delivery',
    packageVersions: [],
    code_complete: false
  },
  {
    name: 'Canary Release',
    packageVersions: [],
    code_complete: false
  }
];


describe('ProgressionBoard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProgressionBoard phases={data}/>);
    expect(baseElement).toBeTruthy();
  });
});
