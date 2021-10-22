export const schemaSet = [
  {
    description:
      'Defines the URL and Token necessary to\ninteract with a Digital.ai Agility\n(formerly VersionOne) system instance.\n',
    id: null,
    schema: {
      // $schema: 'https://json-schema.org/draft/2020-12/schema',
      description:
        'Schema for validating a Digital.ai Agility Configuration entry.',
      origin_name: 'agility',
      properties: {
        token: {
          description: 'API token to access instance',
          sensitive: true,
          title: 'API Access Token',
          type: 'string',
          writeOnly: true,
        },
        url: {
          description: 'URL of the Agility instance.',
          title: 'URL',
          type: 'string',
        },
      },
      required: ['url', 'token'],
      title: 'AgilityConfiguration',
      type: 'object',
    },
    type_name: 'digitalai.connection.api.agility',
  },
  {
    description:
      'Configuration used by Jobs for the \nSnowflake integration.\nhttps://docs.snowflake.com/en/user-guide/python-connector-api.html#connect\n',
    id: null,
    schema: {
      // $schema: 'https://json-schema.org/draft/2020-12/schema',
      description: 'Schema for validating a Snowflake connection properties.',
      properties: {
        account: {
          description:
            'Your account identifier. The account identifier does not include the snowflakecomputing.com suffix.',
          title: 'Account',
          type: 'string',
        },
        database: {
          description: 'Name of the default database to use.',
          title: 'Database',
          type: 'string',
        },
        password: {
          description: 'Password for the user.',
          title: 'Password',
          type: 'string',
        },
        role: {
          description: 'Name of the default role to use.',
          title: 'Role',
          type: 'string',
        },
        schema: {
          description: 'Name of the default schema to use for the database.',
          title: 'Schema',
          type: 'string',
        },
        user: {
          description: 'Login name for the user.',
          title: 'User',
          type: 'string',
        },
        warehouse: {
          description: 'Name of the default warehouse to use.',
          title: 'Warehouse',
          type: 'string',
        },
      },
      required: ['account', 'user', 'password'],
      title: 'SnowflakeConnectorConfig',
      type: 'object',
    },
    type_name: 'digitalai.connection.database.snowflake',
  },
  {
    description: 'Properties required to use theGitHub API.\n',
    id: null,
    schema: {
      // $schema: 'https://json-schema.org/draft/2020-12/schema',
      description: 'Schema for validating a GitHub API connection properties.',
      origin_name: 'github',
      properties: {
        owner: {
          description: 'GitHub Owner (Organization / User)',
          title: 'Owner',
          type: 'string',
        },
        token: {
          description: 'GitHub User API Token',
          sensitive: true,
          title: 'API Token',
          type: 'string',
          writeOnly: true,
        },
        url: {
          default: 'https://api.github.com',
          description: 'GitHub API Base URL',
          title: 'URL',
          type: 'string',
        },
      },
      required: ['owner', 'url', 'token'],
      title: 'GitHubAPIConfig',
      type: 'object',
    },
    type_name: 'digitalai.connection.api.github',
  },
  {
    description:
      'A generic type used by all Jobs for free-form config details.\nIS NOT VALIDATED - anything can be put in a "job config"\n',
    id: null,
    schema: {
      // $schema: 'https://json-schema.org/draft/2020-12/schema',
      description:
        'Schema for validating a Digital.ai Job Configuration entry.',
      title: 'JobConfiguration',
      type: 'object',
    },
    type_name: 'digitalai.job',
  },
  {
    description: 'Properties required to use the JIRA REST API.\n',
    id: null,
    schema: {
      // $schema: 'https://json-schema.org/draft/2020-12/schema',
      description: 'Schema for validating JIRA API properties',
      origin_name: 'jira',
      properties: {
        token: {
          description: 'API token for the user.',
          sensitive: true,
          title: 'Token',
          type: 'string',
          writeOnly: true,
        },
        url: {
          description: 'JIRA API Base URL',
          title: 'URL',
          type: 'string',
        },
        user: {
          description: 'Username for the user.',
          title: 'User',
          type: 'string',
        },
      },
      required: ['url', 'user', 'token'],
      title: 'JiraRestConfig',
      type: 'object',
    },
    type_name: 'digitalai.connection.api.jira',
  },
  {
    description: 'Properties required to use the Bitbucket REST API.\n',
    id: null,
    schema: {
      // $schema: 'https://json-schema.org/draft/2020-12/schema',
      description: 'Schema for validating Bitbucket API properties',
      origin_name: 'bitbucket',
      properties: {
        password: {
          description: 'Password for the user.',
          sensitive: true,
          title: 'Password',
          type: 'string',
          writeOnly: true,
        },
        url: {
          default: 'https://api.bitbucket.org',
          description: 'Bitbucket API Base URL',
          title: 'URL',
          type: 'string',
        },
        user: {
          description: 'Username for the user.',
          title: 'User',
          type: 'string',
        },
      },
      required: ['user', 'password', 'url'],
      title: 'BitBucketRestConfig',
      type: 'object',
    },
    type_name: 'digitalai.connection.api.bitbucket',
  },
  {
    description: 'Properties required to use the GitLab REST API.\n',
    id: null,
    schema: {
      // $schema: 'https://json-schema.org/draft/2020-12/schema',
      description: 'Schema for validating Bitbucket API properties',
      origin_name: 'gitlab',
      properties: {
        token: {
          description: 'Personal or Project-level private API access token.',
          sensitive: true,
          title: 'API Token',
          type: 'string',
          writeOnly: true,
        },
        url: {
          description: 'GitLab API Base URL',
          title: 'URL',
          type: 'string',
        },
      },
      required: ['token', 'url'],
      title: 'GitLabRestConfig',
      type: 'object',
    },
    type_name: 'digitalai.connection.api.gitlab',
  },
];
