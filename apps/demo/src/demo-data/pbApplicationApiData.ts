export interface ApplicationAPIData {
  payloadUrl: string;
  sourceControls: Array<{
    id: string;
    title: string;
    servers: Array<{
      id: string;
      title: string;
      isdefault?: boolean;
      name: string;
      owner?: string;
      team_id?: string | null;
      token?: string;
      url?: string;
    }>;
  }>;
  ticketSystems: Array<{
    id: string;
    title: string;
    servers: Array<{
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
    }>;
  }>;
}

export const pbApplicationAPIData: ApplicationAPIData = {
  payloadUrl: 'https://pl.com/api/submit_change?token=<api-token>&toproject=',
  sourceControls: [
    {
      id: 'e35f9c3091ee11eb81fd0b485fd3e296',
      title: 'GitLab',
      servers: [
        {
          id: 'ef13373091ee11eb9dd9d94066832c2c',
          title: 'Gitlab - Server 1',
          isdefault: false,
          name: 'Configuration/Custom/Configuration111',
          team_id: null,
          token: '',
          url: 'https://about.gitlab.com/',
        },
        {
          id: 'f19415b091ee11eb81fd0b485fd3e296',
          title: 'Gitlab - Server 2',
          isdefault: false,
          name: 'Configuration/Custom/Configuration112',
          team_id: null,
          token: '',
          url: 'https://about.gitlab.com/',
        },
        {
          id: 'f5252bb091ee11eb9dd9d94066832c2c',
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
      id: '250f67f091ef11eb9dd9d94066832c2c',
      title: 'GitHub',
      servers: [
        {
          id: '2bfc532091ef11eb81fd0b485fd3e296',
          title: 'GitHub - Server 1',
          isdefault: false,
          name: 'Configuration/Custom/Configuration121',
          owner: 'TODO',
          team_id: null,
          token: '',
          url: 'https://github.com',
        },
        {
          id: '2f0acba091ef11eb9dd9d94066832c2c',
          title: 'GitHub - Server 2',
          isdefault: false,
          name: 'Configuration/Custom/Configuration122',
          owner: 'TODO',
          team_id: null,
          token: '',
          url: 'https://github.com',
        },
        {
          id: '322a5b2091ef11eb81fd0b485fd3e296',
          title: 'GitHub - Server 3',
          isdefault: false,
          name: 'Configuration/Custom/Configuration123',
          owner: 'TODO',
          team_id: null,
          token: '',
          url: 'https://github.com',
        },
        {
          id: '3554e72091ef11eb9dd9d94066832c2c',
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
      id: '3847733091ef11eb9dd9d94066832c2c',
      title: 'Jiraplugin',
      servers: [
        {
          id: '3b3a265091ef11eb81fd0b485fd3e296',
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
          id: '3d5dc9a091ef11eb9dd9d94066832c2c',
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
      id: '3f87fca091ef11eb81fd0b485fd3e296',
      title: 'V1plugin',
      servers: [
        {
          id: '41d6cea091ef11eb9dd9d94066832c2c',
          title: 'v1 Server1',
          isdefault: true,
          name: '',
          token: '',
          url: 'www7.v1host.com',
        },
        {
          id: '43f73da091ef11eb81fd0b485fd3e296',
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
