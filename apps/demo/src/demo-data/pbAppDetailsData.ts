import { ApplicationDetails } from '@digital-ai/dot-components';

export const pbAppDetailsData: Array<ApplicationDetails> = [
  {
    applicationName: 'api',
    basePayloadUrl:
      'https://pl.com/api/submit_change?token=<api-token>&toproject=',
    sourceControls: [
      {
        id: 'gitlab',
        title: 'API GitLab',
        servers: [
          {
            id: 'f5252bb091ee11eb9dd9d94066832c2c',
            title: 'Gitlab - Server 3',
            name: 'Configuration/Custom/Configuration113',
          },
        ],
      },
      {
        id: 'github',
        title: 'API GitHub',
        servers: [
          {
            id: '3554e72091ef11eb9dd9d94066832c2c',
            title: 'GitHub - Server 4',
            name: 'Configuration/Custom/Configuration124',
          },
        ],
      },
      {
        id: 'bitbucket',
        title: 'API Bitbucket',
        servers: [
          {
            id: '3554e72091ef33eb9dd9d94066832c2c',
            title: 'Bitbucket - Server 1',
            name: 'Configuration/Custom/Configuration126',
          },
        ],
      },
    ],
    ticketSystem: {
      id: 'jiraplugin',
      title: 'API Jiraplugin',
      servers: [
        {
          id: '3d5dc9a091ef11eb9dd9d94066832c2c',
          title: 'Jira Server API-1',
        },
      ],
    },
  },
  {
    applicationName: 'database',
    basePayloadUrl:
      'https://pl.com/api/submit_change?token=<api-token>&toproject=',
    sourceControls: [
      {
        id: 'gitlab',
        title: 'Database GitLab',
        servers: [
          {
            id: 'f5252bb091ee11eb9dd9d94066832c2c',
            title: 'Gitlab - Server Details-1',
            name: 'Configuration/Custom/Configuration113',
          },
        ],
      },
      {
        id: 'github',
        title: 'Details GitHub',
        servers: [
          {
            id: '3554e72091ef11eb9dd9d94066832c2c',
            title: 'Gitlab - Server Details-2',
            name: 'Configuration/Custom/Configuration124',
          },
        ],
      },
      {
        id: 'sourceforge',
        title: 'SourceForge',
        servers: [
          {
            id: '3554e72091ef11eb9dd9d94066832333',
            title: 'Sourceforge - Server Details-2',
            name: 'Configuration/Custom/Configuration125',
          },
        ],
      },
    ],
    ticketSystem: {
      id: 'clickone',
      title: 'ClickOne',
      servers: [
        {
          id: '3d5dc9a091ef11eb9dd9d94066832c2c',
          title: 'ClickOne Server Details-1',
        },
      ],
    },
  },
  {
    applicationName: 'webstore',
    basePayloadUrl:
      'https://pl.com/api/submit_change?token=<api-token>&toproject=',
    sourceControls: [
      {
        id: 'gitlab',
        title: 'GitLab',
        servers: [
          {
            id: 'f5252bb091ee11eb9dd9d94066832c2c',
            title: 'Gitlab - Server Webstore-1',
            name: 'Configuration/Custom/Configuration113',
          },
        ],
      },
      {
        id: 'github',
        title: 'GitHub',
        servers: [
          {
            id: '3554e72091ef11eb9dd9d94066832c2c',
            title: 'GitHub - Server Webstore-2',
            name: 'Configuration/Custom/Configuration124',
          },
        ],
      },
    ],
    ticketSystem: {
      id: 'v1plugin',
      title: 'V1plugin',
      servers: [
        {
          id: '3d5dc9a091ef11eb9dd9d94066832c2c',
          title: 'Jira Server Webstore-3',
        },
      ],
    },
  },
];
