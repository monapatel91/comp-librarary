import {
  ApplicationAPI,
  ApplicationDetails,
} from '../ProgressionBoardInterfaces';

export const sampleApplicationAPIData: ApplicationAPI = {
  basePayloadUrl:
    'https://pl.com/api/submit_change?token=<api-token>&toproject=',
  sourceControls: [
    {
      id: '111111',
      title: 'GitLab',
      servers: [
        {
          id: '111111111111111111111111',
          title: 'Gitlab - Server 1',
          isdefault: false,
          name: 'Configuration/Custom/Configuration111',
          team_id: null,
          token: '',
          url: 'https://about.gitlab.com/',
        },
        {
          id: '111111111111111111111112',
          title: 'Gitlab - Server 2',
          isdefault: false,
          name: 'Configuration/Custom/Configuration112',
          team_id: null,
          token: '',
          url: 'https://about.gitlab.com/',
        },
        {
          id: '111111111111111111111113',
          title: 'Gitlab - Server 3',
          isdefault: false,
          name: 'Configuration/Custom/Configuration113',
          team_id: null,
          token: '',
          url: 'https://about.gitlab.com/',
        },
      ],
    },
    {
      id: '22222',
      title: 'GitHub',
      servers: [
        {
          id: '111111111111111111111121',
          title: 'GitHub - Server 1',
          isdefault: false,
          name: 'Configuration/Custom/Configuration121',
          owner: 'TODO',
          team_id: null,
          token: '',
          url: 'https://github.com',
        },
        {
          id: '111111111111111111111122',
          title: 'GitHub - Server 2',
          isdefault: false,
          name: 'Configuration/Custom/Configuration122',
          owner: 'TODO',
          team_id: null,
          token: '',
          url: 'https://github.com',
        },
        {
          id: '111111111111111111111123',
          title: 'GitHub - Server 3',
          isdefault: false,
          name: 'Configuration/Custom/Configuration123',
          owner: 'TODO',
          team_id: null,
          token: '',
          url: 'https://github.com',
        },
        {
          id: '111111111111111111111124',
          title: 'GitHub - Server 4',
          isdefault: false,
          name: 'Configuration/Custom/Configuration124',
          owner: 'TODO',
          team_id: null,
          token: '',
          url: 'https://github.com',
        },
      ],
    },
  ],
  ticketSystems: [
    {
      id: '12121212',
      title: 'Jiraplugin',
      servers: [
        {
          id: '222222222222222222222221',
          title: 'Jira Server 1',
          improve_types: '',
          isdefault: false,
          maintain_types: '',
          name: 'Configuration/Custom/Configuration2221',
          password: '',
          team_id: null,
          url: 'https://digitalai.atlassian.net',
          user: 'test1@atlassian.net',
        },
        {
          id: '222222222222222222222222',
          title: 'Jira Server 2',
          improve_types: '',
          isdefault: false,
          maintain_types: '',
          name: 'Configuration/Custom/Configuration2222',
          password: '',
          team_id: null,
          url: 'https://digitalai.atlassian.net',
          user: 'test2@atlassian.net',
        },
      ],
    },
    {
      id: '343434343434344',
      title: 'V1plugin',
      servers: [
        {
          id: '333333333333333333333331',
          title: 'v1 Server1',
          isdefault: true,
          name: '',
          token: '',
          url: 'www7.v1host.com',
        },
        {
          id: '333333333333333333333332',
          title: 'v1 Server2',
          isdefault: false,
          name: '',
          token: '',
          url: 'www7.v1host.com',
        },
      ],
    },
  ],
};

export const sampleAppAPITestData: ApplicationAPI = {
  basePayloadUrl: 'http://payload.com',
  sourceControls: [
    {
      id: '1',
      title: 'SC Test 1',
      servers: [
        {
          id: '1',
          title: 'SC1 - Server 1',
          name: 'Configuration/Custom/111',
        },
        {
          id: '2',
          title: 'SC1 - Server 2',
          name: 'Configuration/Custom/112',
        },
      ],
    },
    {
      id: '2',
      title: 'SC Test 2',
      servers: [
        {
          id: '3',
          title: 'SC2 - Server 1',
          name: 'Configuration/Custom/221',
        },
        {
          id: '4',
          title: 'SC2 - Server 2',
          name: 'Configuration/Custom/222',
        },
      ],
    },
  ],
  ticketSystems: [
    {
      id: '1',
      title: 'TS Test 1',
      servers: [
        {
          id: '1',
          title: 'TS1 - Server 1',
        },
        {
          id: '2',
          title: 'TS1 - Server 2',
        },
      ],
    },
    {
      id: '2',
      title: 'TS Test 2',
      servers: [
        {
          id: '1',
          title: 'TS2 - Server 1',
        },
        {
          id: '2',
          title: 'TS2 - Server 2',
        },
      ],
    },
  ],
};

export const sampleAppDetailsTestData: ApplicationDetails = {
  applicationName: 'test-api',
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
};
