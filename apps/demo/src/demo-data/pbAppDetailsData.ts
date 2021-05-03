import { ApplicationDetails } from '@digital-ai/dot-components';

export const pbAppDetailsData: Array<ApplicationDetails> = [
  {
    applicationName: 'api',
    basePayloadUrl:
      'https://pl.com/api/submit_change?token=<api-token>&toproject=',
    sourceControls: [
      {
        id: 'e35f9c3091ee11eb81fd0b485fd3e296',
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
        id: '250f67f091ef11eb9dd9d94066832c2c',
        title: 'API GitHub',
        servers: [
          {
            id: '3554e72091ef11eb9dd9d94066832c2c',
            title: 'GitHub - Server 4',
            name: 'Configuration/Custom/Configuration124',
          },
        ],
      },
    ],
    ticketSystem: {
      id: '3847733091ef11eb9dd9d94066832c2c',
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
        id: 'e35f9c3091ee11eb81fd0b485fd3e296',
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
        id: '250f67f091ef11eb9dd9d94066832c2c',
        title: 'Details GitHub',
        servers: [
          {
            id: '3554e72091ef11eb9dd9d94066832c2c',
            title: 'Gitlab - Server Details-2',
            name: 'Configuration/Custom/Configuration124',
          },
        ],
      },
    ],
    ticketSystem: {
      id: '3847733091ef11eb9dd9d94066832c2c',
      title: 'Jiraplugin',
      servers: [
        {
          id: '3d5dc9a091ef11eb9dd9d94066832c2c',
          title: 'Jira Server Details-1',
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
        id: 'e35f9c3091ee11eb81fd0b485fd3e296',
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
        id: '250f67f091ef11eb9dd9d94066832c2c',
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
      id: '3847733091ef11eb9dd9d94066832c2c',
      title: 'Jiraplugin',
      servers: [
        {
          id: '3d5dc9a091ef11eb9dd9d94066832c2c',
          title: 'Jira Server Webstore-3',
        },
      ],
    },
  },
];
