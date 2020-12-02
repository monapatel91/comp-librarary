import React, { useEffect, useState } from 'react';

import './app.scss';

import {DotButton, DotIcon, ProgressionBoardHydrator} from '@digital-ai/dot-components';

const data = [{
  name: "Build",
  packageVersions: [],
  code_complete: false,
},
  {
    name: "Acceptance Test",
    packageVersions: [
      {
        _id: "59c683b62979936aa8b9ab52",
        activity_failed: false,
        actual: 43,
        arrival_dt: "2017-09-23T15:54:30.566000",
        change_count: 44,
        control_failed: true,
        fullversion_from: "3.1.83",
        fullversion_to: "3.1.100",
        last_update_dt: "2017-11-01T16:54:32.030000",
        package_id: "578fc04f29799325c589a729",
        package_name: "api",
        pending_activity: false,
        phase_name: "Acceptance Test",
        progression_id: "591afccd2979935b172328f8",
        rev_from: 83,
        rev_from_id: "59eb71b129799366ffb9ab50",
        rev_to: 100,
        rev_to_id: "59f4ee832979931690b9ab50",
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
        team_id: "5bc507d029799317d49517fb",
        unmanaged_change_count: 24,
        version: "3.1",
        workitem_count: 8,
        workitems: [
          {
            _id: "59f196572979930319b9ab50",
            change_count: 3,
            external_id: "10299",
            external_key: "API-100",
            title:
              "Install scripts and documentation cleanup",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: true,
          },
          {
            _id: "59f248b3297993061cb9ab50",
            change_count: 3,
            external_id: "10298",
            external_key: "API-99",
            title:
              "UI - Cloud 'Test' button only supports AWS, hide for other providers",
            value_goal: "maintain",
            isEmphazied: false,
            isSelected: false,
            isSplit: true,
          },
          {
            _id: "59f2bda72979930921b9ab50",
            change_count: 3,
            external_id: "10297",
            external_key: "API-98",
            title:
              "3rd party javascript installs to the wrong location",
            value_goal: "maintain",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59f34e7f2979930c0eb9ab4e",
            change_count: 1,
            external_id: "10296",
            external_key: "API-97",
            title:
              "task engine - new connection and sql exec sybase support",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59f3d8132979930eb2b9ab50",
            change_count: 3,
            external_id: "10295",
            external_key: "API-96",
            title:
              "task engine - new connection and sql exec informix support",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59f405132979931157b9ab50",
            change_count: 3,
            external_id: "10294",
            external_key: "API-95",
            title:
              "Remove remnants of deprecated Sybase and Informix connection types.",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59f42d6329799313f8b9ab4f",
            change_count: 2,
            external_id: "10293",
            external_key: "API-94",
            title:
              "UI - User edit dialog able to issue/refresh an API auth token",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59f4ee832979931690b9ab4f",
            change_count: 2,
            external_id: "10292",
            external_key: "API-93",
            title:
              "task engine - increase ssh command timeout to 60 seconds",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
        ],
      },
    ],
    code_complete: true,
  },
  {
    name: "Regression Test",
    packageVersions: [
      {
        _id: "59fcd04a29799335e22ae843",
        activity_failed: false,
        actual: 68,
        arrival_dt: "2017-11-03T20:23:37.984000",
        change_count: 24,
        control_failed: true,
        fullversion_from: "3.1.69",
        fullversion_to: "3.1.82",
        last_update_dt: "2017-11-01T16:54:32.030000",
        package_id: "578fc04f29799325c589a729",
        package_name: "api",
        pending_activity: false,
        phase_name: "Regression Test",
        progression_id: "591afccd2979935b172328f8",
        rev_from: 69,
        rev_from_id: "59d638a32979933824b9ab4f",
        rev_to: 82,
        rev_to_id: "59df2e002979935bfbb9ab50",
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
        team_id: "5bc507d029799317d49517fb",
        unmanaged_change_count: 0,
        version: "3.1",
        workitem_count: 14,
        workitems: [
          {
            _id: "59d638a32979933824b9ab4e",
            change_count: 1,
            external_id: "10286",
            external_key: "API-87",
            title: "Cato Vcenter Integration",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59d71a932979933b53b9ab4e",
            change_count: 1,
            external_id: "10291",
            external_key: "API-92",
            title: "Datastore update large data",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59d805e32979933e4bb9ab4e",
            change_count: 1,
            external_id: "10290",
            external_key: "API-91",
            title:
              "tak engine - vcloud api commands extended to include vapp management commands",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59d8daef29799340d8b9ab4f",
            change_count: 2,
            external_id: "10289",
            external_key: "API-90",
            title:
              "task engine - http command should support cookie use",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59d9c51329799343b6b9ab4e",
            change_count: 1,
            external_id: "10288",
            external_key: "API-89",
            title: "System Requirements for Cato",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59da969b297993464ab9ab4f",
            change_count: 2,
            external_id: "10287",
            external_key: "API-88",
            title: "Cato Dashboard Login Issue",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59db916329799348e0b9ab4e",
            change_count: 1,
            external_id: "10285",
            external_key: "API-86",
            title: "Cato Aws Integration",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59dc45632979934b7eb9ab4f",
            change_count: 2,
            external_id: "10284",
            external_key: "API-85",
            title:
              "datastore - group, aggregate, and function capabilities",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59dc89d32979934e74b9ab4f",
            change_count: 2,
            external_id: "10283",
            external_key: "API-84",
            title:
              "task engine - new connection error when using an asset with a shared credential that uses a private key",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59dcc3f32979935148b9ab4f",
            change_count: 2,
            external_id: "10282",
            external_key: "API-83",
            title:
              "Task engine - update winrm code to use latest pywinrm library",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59dd8eeb29799353e4b9ab50",
            change_count: 3,
            external_id: "10281",
            external_key: "API-82",
            title: "Cato Uninstallation",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59de68e32979935689b9ab4f",
            change_count: 2,
            external_id: "10280",
            external_key: "API-81",
            title:
              "shared credential page - attempting to delete a shared credential that is in use on asset displays no message",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59dee06b297993591fb9ab4f",
            change_count: 2,
            external_id: "10279",
            external_key: "API-80",
            title:
              "Task engine - new connection ssh fails with must be string or buffer, not None is a password is prompted but no password is defined",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59df2e002979935bfbb9ab4f",
            change_count: 2,
            external_id: "10278",
            external_key: "API-79",
            title:
              "task engine - new connection ssh sometimes does not delete the temp private key if command errors",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
        ],
      },
    ],
    code_complete: false,
  },
  {
    name: "Performance Test",
    packageVersions: [
      {
        _id: "59f9fc4829799335e22ae905",
        activity_failed: false,
        actual: 68,
        arrival_dt: "2017-11-01T16:54:32.030000",
        change_count: 50,
        control_failed: true,
        fullversion_from: "3.1.43",
        fullversion_to: "3.1.68",
        last_update_dt: "2017-11-01T16:54:32.030000",
        package_id: "578fc04f29799325c589a729",
        package_name: "api",
        pending_activity: false,
        phase_name: "Performance Test",
        progression_id: "591afccd2979935b172328f8",
        rev_from: 43,
        rev_from_id: "59c683b62979936aa8b9ab50",
        rev_to: 68,
        rev_to_id: "59d37d072979932ffdb9ab4f",
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
        team_id: "5bc507d029799317d49517fb",
        unmanaged_change_count: 0,
        version: "3.1",
        workitem_count: 26,
        workitems: [
          {
            _id: "59c683b62979936aa8b9ab4f",
            change_count: 2,
            external_id: "10267",
            external_key: "API-68",
            title: "Ssh Into instance failed",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59c6fd1b2979936d43b9ab50",
            change_count: 3,
            external_id: "10277",
            external_key: "API-78",
            title:
              "Commands with field arrays crash the task editor.",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59c7c813297993707fb9ab4e",
            change_count: 1,
            external_id: "10276",
            external_key: "API-77",
            title:
              "task engine, create an s3 copy file command",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59c86af72979937375b9ab4f",
            change_count: 2,
            external_id: "10275",
            external_key: "API-76",
            title:
              "Step Templates - better handling of changes to the xml",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59c8c263297993764cb9ab50",
            change_count: 3,
            external_id: "10274",
            external_key: "API-75",
            title:
              "Test Cloud Connection - sometimes shows a misleading error",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59c9b31729799378efb9ab4f",
            change_count: 2,
            external_id: "10273",
            external_key: "API-74",
            title: "PLACEHOLDER - reuse",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59ca3a172979937b8bb9ab4e",
            change_count: 1,
            external_id: "10272",
            external_key: "API-73",
            title: "Cato Cloud Discovery BAD request",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59cb0aeb2979937e19b9ab4f",
            change_count: 2,
            external_id: "10271",
            external_key: "API-72",
            title:
              "Launch an Instance in a subnet in a VPC with a particular Security Group in AWS",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59cb2bf729799301e0b9ab50",
            change_count: 3,
            external_id: "10270",
            external_key: "API-71",
            title: "AWS Cloud Formation",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59cba127297993051ab9ab50",
            change_count: 3,
            external_id: "10269",
            external_key: "API-70",
            title:
              "default ports - change all default ports to live in the 808x range instead of the 400x range",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59cc27eb2979930855b9ab4f",
            change_count: 2,
            external_id: "10268",
            external_key: "API-69",
            title: "VPC Creation Failed",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59ccccaf2979930ae5b9ab4e",
            change_count: 1,
            external_id: "10266",
            external_key: "API-67",
            title:
              "Sql Exec - results as dictionary (oracle, sqlserver)",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59cd1f6b2979930d7ab9ab4f",
            change_count: 2,
            external_id: "10265",
            external_key: "API-66",
            title:
              "Ability to disable 'legacy' variable replacement on a per-task basis.",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59cd4a4f2979931011b9ab4e",
            change_count: 1,
            external_id: "10264",
            external_key: "API-65",
            title:
              "Task Engine - log file show codeblock/step instead of useless step_id",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59ce24bf29799312e3b9ab4f",
            change_count: 2,
            external_id: "10263",
            external_key: "API-64",
            title:
              "task editor, send email command fields are too narrow, widen",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59ceab472979931585b9ab4f",
            change_count: 2,
            external_id: "10262",
            external_key: "API-63",
            title:
              "command line tools - should accept -T<token> as an argument in lieu of key/secretkey",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59cf16272979931819b9ab4f",
            change_count: 2,
            external_id: "10261",
            external_key: "API-62",
            title:
              "asset edit, local credentials not saving to asest",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59cfa0e72979931aabb9ab50",
            change_count: 3,
            external_id: "10260",
            external_key: "API-61",
            title:
              "admin security log overlays settings page but is transparent",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59d069ff2979931d5eb9ab4f",
            change_count: 2,
            external_id: "10259",
            external_key: "API-60",
            title:
              "Set Variable - make Value box wider, below the value and modifier",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59d0d1d32979932039b9ab4e",
            change_count: 1,
            external_id: "10258",
            external_key: "API-59",
            title:
              "API Call command - make user optional, support 'token' auth",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59d13b8729799322c8b9ab4f",
            change_count: 2,
            external_id: "10257",
            external_key: "API-58",
            title: "HTTP Command - result variable",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59d210572979932563b9ab4f",
            change_count: 2,
            external_id: "10256",
            external_key: "API-57",
            title:
              "API - command to export ALL tasks, not just one",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59d238e329799327f8b9ab4e",
            change_count: 1,
            external_id: "10255",
            external_key: "API-56",
            title:
              "Task Loop command - counter variables now case sensitive",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59d25f8f2979932a85b9ab50",
            change_count: 3,
            external_id: "10254",
            external_key: "API-55",
            title:
              "Task Engine - 'telnet' support for connections",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59d348c32979932d68b9ab4e",
            change_count: 1,
            external_id: "10253",
            external_key: "API-54",
            title:
              "SqlAnywhere connections - port parameter",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59d37d072979932ffdb9ab4e",
            change_count: 1,
            external_id: "10252",
            external_key: "API-53",
            title:
              "Task codeblock naming now case sensitive",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
        ],
      },
    ],
    code_complete: false,
  },
  {
    name: "Ready for Delivery",
    packageVersions: [
      {
        _id: "59eb202429799335e22ae887",
        activity_failed: false,
        actual: 19,
        arrival_dt: "2017-10-21T10:23:32.033000",
        change_count: 43,
        control_failed: true,
        fullversion_from: "3.0.1",
        fullversion_to: "3.0.42",
        last_update_dt: "2017-11-02T03:35:32.029000",
        package_id: "578fc04f29799325c589a729",
        package_name: "api",
        pending_activity: false,
        phase_name: "Ready for Delivery",
        progression_id: "591afccd2979935b172328f8",
        rev_from: 21,
        rev_from_id: "59b512db297993306cb9ab50",
        rev_to: 42,
        rev_to_id: "59fccee02979936459b9ab50",
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
        team_id: "5bc507d029799317d49517fb",
        unmanaged_change_count: 0,
        version: "3.0",
        workitem_count: 22,
        workitems: [
          {
            _id: "59b512db297993306cb9ab4f",
            change_count: 2,
            external_id: "10231",
            external_key: "API-32",
            title:
              "Move task editor flow control commands under control category to distinguish them from Flow task commands",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59b5d3472979933303b9ab50",
            change_count: 3,
            external_id: "10230",
            external_key: "API-31",
            title:
              "winrm new connection, test for initial connection and sleep and retry multiple times on timeout",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59b65123297993354eb9ab4e",
            change_count: 1,
            external_id: "10229",
            external_key: "API-30",
            title:
              "winrm command should issue a message to the log prior to execution for long running commands",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59b6cfb329799337b0b9ab4e",
            change_count: 1,
            external_id: "10228",
            external_key: "API-29",
            title:
              "Change task command documentation label from Cato docs to ClearCode docs",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59fcce6829799339f1b9ab4f",
            change_count: 2,
            external_id: "10227",
            external_key: "API-28",
            title:
              "task engine, create a new random integer generator function with floor and ceiling parameters",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59b826972979933c83b9ab4e",
            change_count: 1,
            external_id: "10226",
            external_key: "API-27",
            title:
              "Messenger isn't honoring the 'off' setting.",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59b8ecdf2979933eccb9ab4e",
            change_count: 1,
            external_id: "10225",
            external_key: "API-26",
            title:
              "Change Log on Cloud and Cloud Account edit pages.",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59b90b93297993411db9ab4f",
            change_count: 2,
            external_id: "10224",
            external_key: "API-25",
            title:
              "Add cloud account edit support for Azure cloud services",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59b9309b2979934364b9ab50",
            change_count: 3,
            external_id: "10223",
            external_key: "API-24",
            title:
              "New task command to support starting and stopping vms in Azure cloud",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59ba10e729799345b6b9ab4f",
            change_count: 2,
            external_id: "10222",
            external_key: "API-23",
            title:
              "Task Run Log isn't updating dynamically on messaging, or doesn't always display the last message.",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59baa1852979934845b9ab50",
            change_count: 3,
            external_id: "10221",
            external_key: "API-22",
            title:
              "Task engine variable processing enters an infinite loop when attempting to replace variable with certain bad syntax",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59bb759f2979934a39b9ab50",
            change_count: 3,
            external_id: "10220",
            external_key: "API-21",
            title:
              "VersionOne Extension - Implement API connect, query, get, and post commands.",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59bc225b2979934cecb9ab50",
            change_count: 3,
            external_id: "10219",
            external_key: "API-20",
            title:
              "Scheduler setting CleanAppRegistry is implemented and doesn't do anything.  Fix, or remove the setting.",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59bd05b32979934f6db9ab4f",
            change_count: 2,
            external_id: "10218",
            external_key: "API-19",
            title:
              "Scheduler 'MaxDays' setting is not implemented",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59bd512b29799351d8b9ab50",
            change_count: 3,
            external_id: "10217",
            external_key: "API-18",
            title:
              "Task  SQL Exec As Dictionary option does not work for SQL Server/Oracle.",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59bd9d572979935491b9ab4f",
            change_count: 2,
            external_id: "10216",
            external_key: "API-17",
            title:
              "Ability to add the variable stack to the task run log.",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59be68132979935736b9ab4f",
            change_count: 2,
            external_id: "10215",
            external_key: "API-16",
            title:
              "Flow extension to Initiate a Pipeline instead of an HTTP command",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59be87f329799359c5b9ab4e",
            change_count: 1,
            external_id: "10214",
            external_key: "API-15",
            title:
              "New Flow extension to read values from a PI Group's globals.",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59bed05f2979935c52b9ab4e",
            change_count: 1,
            external_id: "10213",
            external_key: "API-14",
            title:
              "Winrm error on vm startup, connection refused error should be retried",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59bf3a8b2979935ed7b9ab4e",
            change_count: 1,
            external_id: "10212",
            external_key: "API-13",
            title:
              "Exporting certain tasks as json then importing back in fouls up structure of task",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59bfaacf29799361c2b9ab4f",
            change_count: 2,
            external_id: "10211",
            external_key: "API-12",
            title:
              "Task Activity Log page enabled for websockets messaging.",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
          {
            _id: "59fccee02979936459b9ab4f",
            change_count: 2,
            external_id: "10210",
            external_key: "API-11",
            title:
              "Automate Facelift - update pages to feel like the rest of the UI",
            value_goal: "improve",
            isEmphazied: false,
            isSelected: false,
            isSplit: false,
          },
        ],
      },
    ],
    code_complete: false,
  },
  {
    name: "Canary Release",
    packageVersions: [],
    code_complete: false,
  },
];

export const App = () => {
  const [phases, setPhases] = useState();

  useEffect(() => {
    if (!phases) {
      getData();
    }
  });

  const getData = async () => {
    const response = await fetch('http://localhost:8080/api/get_progression_details?progression=Ecommerce%20App&output_format=json', {
    method:'GET',
    headers: {
      'Authorization': 'Token 559589e35fb284021f6aa2ca'
    }
    })

    const json = await response.json()
    setPhases(json.Response.phases);
  }

  return (
    <div>
      <DotButton
        label="Click"
        onClick={() => alert('Button clicked!')}
        type="primary"
      />
      <DotIcon icon="script"/>
      <div>
        <ProgressionBoardHydrator phases={phases}/>
      </div>
    </div>

  );
};

export default App;
