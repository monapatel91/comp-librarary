import {
  areActiveSourceControlFieldsEmpty,
  getAllNonSelectedSourceControlServers,
  getApplicationFormOutputData,
  getExistingSourceControlIndex,
  getFormDataWithNewSourceControlServerAdded,
  getFormDataWithSourceControlServerRemoved,
  getFormDataWithSourceControlServerSet,
  getFormDataWithSourceControlSet,
  getFormDataWithTicketSystemServerSet,
  getFormDataWithTicketSystemSet,
  getSourceControlById,
  getSourceControlServerById,
  getTicketSystemById,
  getTicketSystemServerById,
  isActiveSourceControlServerValid,
  isActiveSourceControlValid,
  isApplicationNameValid,
  isAtLeastOneSourceControlServerSelected,
  isCreateAnotherValid,
  isServerArrayValid,
  isSourceControlsArrayValid,
  isSourceControlServerAlreadySelected,
  isTicketSystemServerValid,
  isTicketSystemValid,
} from './applicationFormHelper';
import {
  ApplicationForm,
  ApplicationFormOutput,
} from '../ProgressionBoardInterfaces';

describe('applicationFormHelper', () => {
  const incorrectObjectStructure = {
    name: 'test',
  };

  const emptyServers = [
    {
      id: '',
      title: '',
    },
  ];

  const emptySourceControls = [
    {
      id: '',
      title: '',
      servers: [],
    },
  ];

  const sampleServers = [
    {
      id: '1',
      title: 'Sample server 1',
    },
    {
      id: '2',
      title: 'Sample server 2',
    },
    {
      id: '3',
      title: 'Sample server 3',
    },
  ];

  const sampleFormData = {
    sourceControls: [
      {
        id: '12345',
        title: 'GitLab',
        servers: [
          {
            id: '1111',
            title: 'Gitlab - Server 1',
          },
          {
            id: '2222',
            title: 'Gitlab - Server 1',
          },
        ],
      },
    ],
    ticketSystem: {
      id: '2233',
      title: 'Ticket System 1',
      servers: [
        {
          id: '1111',
          title: 'Server 1',
        },
        {
          id: '2222',
          title: 'Server 2',
        },
      ],
    },
  };

  const sampleTicketSystems = [
    {
      id: '123',
      title: 'Test ticket system 01',
      servers: [...sampleServers.slice(0, 2)],
    },
    {
      id: '345',
      title: 'Test ticket system 02',
      servers: [...sampleServers.slice(2)],
    },
  ];

  const sampleSourceControls = [
    {
      id: '123',
      title: 'Sample source control 01',
      servers: [...sampleServers.slice(0, 2)],
    },
    {
      id: '345',
      title: 'Sample source control 02',
      servers: [...sampleServers.slice(2)],
    },
  ];

  describe('isServerArrayValid function', () => {
    it('should return false if null value passed as argument', () => {
      expect(isServerArrayValid(null)).toBe(false);
    });
    it('should return false if undefined value passed as argument', () => {
      expect(isServerArrayValid(undefined)).toBe(false);
    });
    it('should return false if no argument is passed in', () => {
      expect(isServerArrayValid()).toBe(false);
    });
    it('should return false if incorrect data structure is passed in', () => {
      const servers = [incorrectObjectStructure];
      expect(isServerArrayValid(servers as never)).toBe(false);
    });
    it('should return false if ID or title properties are empty strings', () => {
      expect(isServerArrayValid(emptyServers as never)).toBe(false);
    });
    it('should return true on correct data structure with values', () => {
      const servers = [
        {
          id: '123',
          title: 'Test title',
        },
      ];
      expect(isServerArrayValid(servers as never)).toBe(true);
    });
  });

  describe('isActiveSourceControlValid function', () => {
    it('should return false if null value passed as argument', () => {
      expect(isActiveSourceControlValid(null)).toBe(false);
    });
    it('should return false if undefined value passed as argument', () => {
      expect(isActiveSourceControlValid(undefined)).toBe(false);
    });
    it('should return false if no argument is passed in', () => {
      expect(isActiveSourceControlValid()).toBe(false);
    });
    it('should return false if incorrect data structure is passed in', () => {
      expect(
        isActiveSourceControlValid(incorrectObjectStructure as never)
      ).toBe(false);
    });
    it('should return false if ID or title properties are empty strings', () => {
      const formData = {
        activeSourceControl: {
          id: '',
          title: '',
        },
      };
      expect(isActiveSourceControlValid(formData as never)).toBe(false);
    });
    it('should return true on correct data structure with values', () => {
      const formData = {
        activeSourceControl: {
          id: '123',
          title: 'Test title',
        },
      };
      expect(isActiveSourceControlValid(formData as never)).toBe(true);
    });
  });

  describe('isActiveSourceControlServerValid function', () => {
    it('should return false if null value passed as argument', () => {
      expect(isActiveSourceControlServerValid(null)).toBe(false);
    });
    it('should return false if undefined value passed as argument', () => {
      expect(isActiveSourceControlServerValid(undefined)).toBe(false);
    });
    it('should return false if no argument is passed in', () => {
      expect(isActiveSourceControlServerValid()).toBe(false);
    });
    it('should return false if incorrect data structure is passed in', () => {
      expect(
        isActiveSourceControlServerValid(incorrectObjectStructure as never)
      ).toBe(false);
    });
    it('should return false on empty properties', () => {
      const formData = {
        activeSourceControl: {
          servers: [...emptyServers],
        },
      };
      expect(isActiveSourceControlServerValid(formData as never)).toBe(false);
    });
    it('should return true on correct data structure with values', () => {
      const formData = {
        activeSourceControl: {
          servers: [
            {
              id: '123',
              title: 'Test title',
            },
          ],
        },
      };
      expect(isActiveSourceControlServerValid(formData as never)).toBe(true);
    });
  });

  describe('isAtLeastOneSourceControlServerSelected function', () => {
    it('should return false if null value passed as argument', () => {
      expect(isAtLeastOneSourceControlServerSelected(null)).toBe(false);
    });
    it('should return false if undefined value passed as argument', () => {
      expect(isAtLeastOneSourceControlServerSelected(undefined)).toBe(false);
    });
    it('should return false if no argument is passed in', () => {
      expect(isAtLeastOneSourceControlServerSelected()).toBe(false);
    });
    it('should return false if incorrect data structure is passed in', () => {
      const formData = {
        ...sampleFormData,
        sourceControls: null,
      };
      expect(isAtLeastOneSourceControlServerSelected(formData as never)).toBe(
        false
      );
    });
    it('should return false on empty source control array', () => {
      const formData = {
        ...sampleFormData,
        sourceControls: [],
      };
      expect(isAtLeastOneSourceControlServerSelected(formData as never)).toBe(
        false
      );
    });
    it('should return true if more than one source control defined', () => {
      const formData = {
        ...sampleFormData,
        sourceControls: [{ id: '1' }, { id: '2' }],
      };
      expect(isAtLeastOneSourceControlServerSelected(formData as never)).toBe(
        true
      );
    });
  });

  describe('areActiveSourceControlFieldsEmpty function', () => {
    it('should return true if null value passed as argument', () => {
      expect(areActiveSourceControlFieldsEmpty(null)).toBe(true);
    });
    it('should return true if undefined value passed as argument', () => {
      expect(areActiveSourceControlFieldsEmpty(undefined)).toBe(true);
    });
    it('should return true if no argument is passed in', () => {
      expect(areActiveSourceControlFieldsEmpty()).toBe(true);
    });
    it('should return true if incorrect data structure is passed in', () => {
      expect(
        areActiveSourceControlFieldsEmpty(incorrectObjectStructure as never)
      ).toBe(true);
    });
    it('should return true if activeSourceControl property is null', () => {
      const formData = {
        ...sampleFormData,
        activeSourceControl: null,
      };
      expect(areActiveSourceControlFieldsEmpty(formData as never)).toBe(true);
    });
    it('should return true if activeSourceControl property is empty object', () => {
      const formData = {
        ...sampleFormData,
        activeSourceControl: {},
      };
      expect(areActiveSourceControlFieldsEmpty(formData as never)).toBe(true);
    });
    it('should return true if activeSourceControl property has empty properties', () => {
      const formData = {
        ...sampleFormData,
        activeSourceControl: {
          id: '',
          title: '',
          servers: [],
        },
      };
      expect(areActiveSourceControlFieldsEmpty(formData as never)).toBe(true);
    });
    it('should return false if all activeSourceControl properties are set', () => {
      const formData = {
        ...sampleFormData,
        activeSourceControl: {
          ...sampleFormData.sourceControls,
        },
      };
      expect(areActiveSourceControlFieldsEmpty(formData as never)).toBe(false);
    });
  });

  describe('isApplicationNameValid function', () => {
    it('should return false if null value passed as argument', () => {
      expect(isApplicationNameValid(null)).toBe(false);
    });
    it('should return false if undefined value passed as argument', () => {
      expect(isApplicationNameValid(undefined)).toBe(false);
    });
    it('should return false if no argument is passed in', () => {
      expect(isApplicationNameValid()).toBe(false);
    });
    it('should return false if incorrect data structure is passed in', () => {
      expect(isApplicationNameValid(incorrectObjectStructure as never)).toBe(
        false
      );
    });
    it('should return false if application name is empty', () => {
      const formData = {
        ...sampleFormData,
        applicationName: '',
      };
      expect(isApplicationNameValid(formData as never)).toBe(false);
    });
    it('should return true if application name is set', () => {
      const formData = {
        ...sampleFormData,
        applicationName: 'test123',
      };
      expect(isApplicationNameValid(formData as never)).toBe(true);
    });
  });

  describe('isSourceControlsArrayValid function', () => {
    it('should return false if null value passed as argument', () => {
      expect(isSourceControlsArrayValid(null)).toBe(false);
    });
    it('should return false if undefined value passed as argument', () => {
      expect(isSourceControlsArrayValid(undefined)).toBe(false);
    });
    it('should return false if no argument is passed in', () => {
      expect(isSourceControlsArrayValid()).toBe(false);
    });
    it('should return false if incorrect data structure is passed in', () => {
      expect(
        isSourceControlsArrayValid(incorrectObjectStructure as never)
      ).toBe(false);
    });
    it('should return false if sourceControls property is null value', () => {
      const formData = {
        ...sampleFormData,
        sourceControls: null,
      };
      expect(isSourceControlsArrayValid(formData as never)).toBe(false);
    });
    it('should return true if sourceControls property is empty array', () => {
      const formData = {
        ...sampleFormData,
        sourceControls: [],
      };
      expect(isSourceControlsArrayValid(formData as never)).toBe(true);
    });
    it('should return false if any object inside of sourceControls array has empty property', () => {
      const formData = {
        ...sampleFormData,
        sourceControls: [...emptySourceControls],
      };
      expect(isSourceControlsArrayValid(formData as never)).toBe(false);
    });
    it('should return true if sourceControls array is not empty and data is set correctly', () => {
      const formData = { ...sampleFormData };
      expect(isSourceControlsArrayValid(formData as never)).toBe(true);
    });
  });

  describe('isTicketSystemValid function', () => {
    it('should return false if null value passed as argument', () => {
      expect(isTicketSystemValid(null)).toBe(false);
    });
    it('should return false if undefined value passed as argument', () => {
      expect(isTicketSystemValid(undefined)).toBe(false);
    });
    it('should return false if no argument is passed in', () => {
      expect(isTicketSystemValid()).toBe(false);
    });
    it('should return false if incorrect data structure is passed in', () => {
      expect(isTicketSystemValid(incorrectObjectStructure as never)).toBe(
        false
      );
    });
    it('should return false if ticketSystem property is null value', () => {
      const formData = {
        ...sampleFormData,
        ticketSystem: null,
      };
      expect(isTicketSystemValid(formData as never)).toBe(false);
    });
    it('should return false if ticketSystem property is empty object', () => {
      const formData = {
        ...sampleFormData,
        ticketSystem: {},
      };
      expect(isTicketSystemValid(formData as never)).toBe(false);
    });
    it('should return true if ticketSystem property is set with correct data', () => {
      const formData = { ...sampleFormData };
      expect(isTicketSystemValid(formData as never)).toBe(true);
    });
  });

  describe('isTicketSystemServerValid function', () => {
    it('should return false if null value passed as argument', () => {
      expect(isTicketSystemServerValid(null)).toBe(false);
    });
    it('should return false if undefined value passed as argument', () => {
      expect(isTicketSystemServerValid(undefined)).toBe(false);
    });
    it('should return false if no argument is passed in', () => {
      expect(isTicketSystemServerValid()).toBe(false);
    });
    it('should return false if incorrect data structure is passed in', () => {
      expect(isTicketSystemServerValid(incorrectObjectStructure as never)).toBe(
        false
      );
    });
    it('should return false if any of the ticketSystem server property is empty', () => {
      const formData = {
        ...sampleFormData,
        ticketSystem: {
          ...sampleFormData.ticketSystem,
          servers: { ...emptyServers },
        },
      };
      expect(isTicketSystemServerValid(formData as never)).toBe(false);
    });
    it('should return true if ticketSystem server properties are set correctly', () => {
      const formData = { ...sampleFormData };
      expect(isTicketSystemServerValid(formData as never)).toBe(true);
    });
  });

  describe('isCreateAnotherValid function', () => {
    it('should return false if null value passed as argument', () => {
      expect(isCreateAnotherValid(null)).toBe(false);
    });
    it('should return false if undefined value passed as argument', () => {
      expect(isCreateAnotherValid(undefined)).toBe(false);
    });
    it('should return false if no argument is passed in', () => {
      expect(isCreateAnotherValid()).toBe(false);
    });
    it('should return false if incorrect data structure is passed in', () => {
      expect(isCreateAnotherValid(incorrectObjectStructure as never)).toBe(
        false
      );
    });
    it('should return false if property is set to null', () => {
      const formData = {
        ...sampleFormData,
        createAnother: null,
      };
      expect(isCreateAnotherValid(formData as never)).toBe(false);
    });
    it('should return true if property is set to true', () => {
      const formData = {
        ...sampleFormData,
        createAnother: true,
      };
      expect(isCreateAnotherValid(formData as never)).toBe(true);
    });
    it('should return true if property is set to false', () => {
      const formData = {
        ...sampleFormData,
        createAnother: false,
      };
      expect(isCreateAnotherValid(formData as never)).toBe(true);
    });
  });

  describe('isSourceControlServerAlreadySelected function', () => {
    it('should return false if null value passed as argument', () => {
      expect(isSourceControlServerAlreadySelected(null, null)).toBe(false);
    });
    it('should return false if undefined value passed as argument', () => {
      expect(isSourceControlServerAlreadySelected(undefined, undefined)).toBe(
        false
      );
    });
    it('should return false if no argument is passed in', () => {
      expect(isSourceControlServerAlreadySelected()).toBe(false);
    });
    it('should return false if incorrect data structure is passed in', () => {
      expect(
        isSourceControlServerAlreadySelected(
          23 as never,
          incorrectObjectStructure as never
        )
      ).toBe(false);
    });
    it('should return false if sourceControls property is null value', () => {
      const formData = {
        ...sampleFormData,
        sourceControls: null,
      };
      expect(
        isSourceControlServerAlreadySelected('23', formData as never)
      ).toBe(false);
    });
    it('should return false if server ID is NOT already selected', () => {
      const formData = {
        ...sampleFormData,
        createAnother: false,
      };
      expect(
        isSourceControlServerAlreadySelected('99999', formData as never)
      ).toBe(false);
    });
    it('should return true if server ID is already selected', () => {
      const formData = {
        ...sampleFormData,
        createAnother: false,
      };
      expect(
        isSourceControlServerAlreadySelected('1111', formData as never)
      ).toBe(true);
    });
  });

  describe('getExistingSourceControlIndex function', () => {
    it('should return -1 if null value passed as argument', () => {
      expect(getExistingSourceControlIndex(null, null)).toBe(-1);
    });
    it('should return -1 if undefined value passed as argument', () => {
      expect(getExistingSourceControlIndex(undefined, undefined)).toBe(-1);
    });
    it('should return -1 if no argument is passed in', () => {
      expect(getExistingSourceControlIndex()).toBe(-1);
    });
    it('should return -1 if incorrect data structure is passed in', () => {
      expect(
        getExistingSourceControlIndex(
          23 as never,
          incorrectObjectStructure as never
        )
      ).toBe(-1);
    });
    it('should return -1 if sourceControls property is null value', () => {
      const formData = {
        ...sampleFormData,
        sourceControls: null,
      };
      expect(getExistingSourceControlIndex('23', formData as never)).toBe(-1);
    });

    it('should return -1 if index not found', () => {
      const formData = {
        ...sampleFormData,
      };
      expect(getExistingSourceControlIndex('99999', formData as never)).toBe(
        -1
      );
    });
    it('should return correct index number when source control exists', () => {
      const formData = {
        ...sampleFormData,
      };
      expect(getExistingSourceControlIndex('12345', formData as never)).toBe(0);
    });
  });

  describe('getTicketSystemById function', () => {
    it('should return null if null value passed as argument', () => {
      expect(getTicketSystemById(null, null)).toBe(null);
    });
    it('should return null if undefined value passed as argument', () => {
      expect(getTicketSystemById(undefined, undefined)).toBe(null);
    });
    it('should return null if incorrect data structure is passed in', () => {
      expect(
        getTicketSystemById(23 as never, incorrectObjectStructure as never)
      ).toBe(null);
    });
    it('should return null if ID value is not found in the array', () => {
      expect(getTicketSystemById('444', sampleTicketSystems)).toBe(null);
    });
    it('should return correct ticket system for given ID value', () => {
      expect(getTicketSystemById('123', sampleTicketSystems)).toBe(
        sampleTicketSystems[0]
      );
    });
  });

  describe('getFormDataWithTicketSystemSet function', () => {
    it('should return null if null value passed as arguments', () => {
      expect(getFormDataWithTicketSystemSet(null, null)).toBe(null);
    });
    it('should return false if undefined value passed as argument', () => {
      expect(getFormDataWithTicketSystemSet(undefined, undefined)).toBe(null);
    });
    it('should return correct form data when passed in ticket system object as null value', () => {
      const formData = {
        ...sampleFormData,
        ticketSystem: {},
      };
      const expectedFormData = {
        ...formData,
        ticketSystem: {},
      };
      expect(
        getFormDataWithTicketSystemSet(null, formData as never)
      ).toStrictEqual(expectedFormData);
    });
    it('should return correct form data when passed in ticket system object', () => {
      const ticketSystem = { ...sampleTicketSystems[0] };
      const formData = {
        ...sampleFormData,
        ticketSystem: {},
      };
      const expectedFormData = {
        ...formData,
        ticketSystem: {
          ...ticketSystem,
          servers: [],
        },
      };
      expect(
        getFormDataWithTicketSystemSet(ticketSystem, formData as never)
      ).toStrictEqual(expectedFormData);
    });
  });

  describe('getSourceControlById function', () => {
    it('should return null if null value passed as argument', () => {
      expect(getSourceControlById(null, null)).toBe(null);
    });
    it('should return null if undefined value passed as argument', () => {
      expect(getSourceControlById(undefined, undefined)).toBe(null);
    });
    it('should return null if incorrect data structure is passed in', () => {
      expect(
        getSourceControlById(23 as never, incorrectObjectStructure as never)
      ).toBe(null);
    });
    it('should return null if ID value is not found in the array', () => {
      expect(getSourceControlById('444', sampleSourceControls)).toBe(null);
    });
    it('should return correct source control for given ID value', () => {
      expect(getSourceControlById('123', sampleSourceControls)).toBe(
        sampleSourceControls[0]
      );
    });
  });

  describe('getSourceControlServerById function', () => {
    it('should return null if null value passed as argument', () => {
      expect(getSourceControlServerById(null, null)).toBe(null);
    });
    it('should return null if undefined value passed as argument', () => {
      expect(getSourceControlServerById(undefined, undefined)).toBe(null);
    });
    it('should return null if incorrect data structure is passed in', () => {
      expect(
        getSourceControlServerById(
          23 as never,
          incorrectObjectStructure as never
        )
      ).toBe(null);
    });
    it('should return null if ID value is not found in the array', () => {
      expect(getSourceControlServerById('77', sampleServers)).toBe(null);
    });
    it('should return correct source control server for given ID value', () => {
      expect(getSourceControlServerById('1', sampleServers)).toBe(
        sampleServers[0]
      );
    });
  });

  describe('getFormDataWithSourceControlSet function', () => {
    it('should return null if null value passed as arguments', () => {
      expect(getFormDataWithSourceControlSet(null, null)).toBe(null);
    });
    it('should return false if undefined value passed as argument', () => {
      expect(getFormDataWithSourceControlSet(undefined, undefined)).toBe(null);
    });
    it('should return correct form data when passed in source control object as null value', () => {
      const formData = {
        ...sampleFormData,
        activeSourceControl: {},
      };
      const expectedFormData = {
        ...formData,
        activeSourceControl: {},
      };
      expect(
        getFormDataWithSourceControlSet(null, formData as never)
      ).toStrictEqual(expectedFormData);
    });
    it('should return correct form data when passed in source control object', () => {
      const sourceControl = { ...sampleSourceControls[0] };
      const formData = {
        ...sampleFormData,
        activeSourceControl: {},
      };
      const expectedFormData = {
        ...formData,
        activeSourceControl: {
          ...sourceControl,
          servers: [],
        },
      };
      expect(
        getFormDataWithSourceControlSet(sourceControl, formData as never)
      ).toStrictEqual(expectedFormData);
    });
  });

  describe('getFormDataWithSourceControlServerSet function', () => {
    it('should return null if null value passed as arguments', () => {
      expect(getFormDataWithSourceControlServerSet(null, null)).toBe(null);
    });
    it('should return false if undefined value passed as argument', () => {
      expect(getFormDataWithSourceControlServerSet(undefined, undefined)).toBe(
        null
      );
    });
    it('should return correct form data when passed in source control server object as null value', () => {
      const sourceControl = { ...sampleSourceControls[0] };
      const formData = {
        ...sampleFormData,
        activeSourceControl: {
          ...sourceControl,
          servers: [],
        },
      };
      expect(
        getFormDataWithSourceControlServerSet(null, formData as never)
      ).toStrictEqual(formData);
    });
    it('should return correct form data when passed in source control server object', () => {
      const sourceControl = { ...sampleSourceControls[0] };
      const formData = {
        ...sampleFormData,
        activeSourceControl: {
          ...sourceControl,
          servers: [],
        },
      };
      const expectedFormData = {
        ...formData,
        activeSourceControl: {
          ...sourceControl,
          servers: [sourceControl],
        },
      };
      expect(
        getFormDataWithSourceControlServerSet(sourceControl, formData as never)
      ).toStrictEqual(expectedFormData);
    });
  });

  describe('getTicketSystemServerById function', () => {
    it('should return null if null value passed as argument', () => {
      expect(getTicketSystemServerById(null, null)).toBe(null);
    });
    it('should return null if undefined value passed as argument', () => {
      expect(getTicketSystemServerById(undefined, undefined)).toBe(null);
    });
    it('should return null if incorrect data structure is passed in', () => {
      expect(
        getTicketSystemServerById(
          23 as never,
          incorrectObjectStructure as never
        )
      ).toBe(null);
    });
    it('should return null if ID value is not found in the array', () => {
      expect(getTicketSystemServerById('99', sampleServers)).toBe(null);
    });
    it('should return correct source control server for given ID value', () => {
      expect(getTicketSystemServerById('1', sampleServers)).toBe(
        sampleServers[0]
      );
    });
  });

  describe('getFormDataWithTicketSystemServerSet function', () => {
    it('should return null if null value passed as arguments', () => {
      expect(getFormDataWithTicketSystemServerSet(null, null)).toBe(null);
    });
    it('should return false if undefined value passed as argument', () => {
      expect(getFormDataWithTicketSystemServerSet(undefined, undefined)).toBe(
        null
      );
    });
    it('should return correct form data when passed in ticket system server object as null value', () => {
      const ticketSystem = { ...sampleTicketSystems[0] };
      const formData = {
        ...sampleFormData,
        ticketSystem: {
          ...ticketSystem,
          servers: [],
        },
      };
      expect(
        getFormDataWithTicketSystemServerSet(null, formData as never)
      ).toStrictEqual(formData);
    });
    it('should return correct form data when passed in ticket system server object', () => {
      const ticketSystem = { ...sampleTicketSystems[0] };
      const server = { ...sampleServers[0] };
      const formData = {
        ...sampleFormData,
        ticketSystem: {
          ...ticketSystem,
          servers: [],
        },
      };
      const expectedFormData = {
        ...formData,
        ticketSystem: {
          ...formData.ticketSystem,
          servers: [server],
        },
      };
      expect(
        getFormDataWithTicketSystemServerSet(server, formData as never)
      ).toStrictEqual(expectedFormData);
    });
  });

  describe('getAllNonSelectedSourceControlServers function', () => {
    it('should return null if null value passed as argument', () => {
      expect(getAllNonSelectedSourceControlServers(null, null)).toBe(null);
    });
    it('should return null if undefined value passed as argument', () => {
      expect(getAllNonSelectedSourceControlServers(undefined, undefined)).toBe(
        null
      );
    });
    it('should return null if incorrect data structure is passed in', () => {
      expect(
        getAllNonSelectedSourceControlServers(
          23 as never,
          incorrectObjectStructure as never
        )
      ).toBe(null);
    });
    it('should return all passed in servers when no server is already selected', () => {
      const formData = {
        ...sampleFormData,
        sourceControls: [],
      };
      expect(
        getAllNonSelectedSourceControlServers(sampleServers, formData as never)
      ).toStrictEqual(sampleServers);
    });
    it('should filter passed in servers and return only NON selected ones', () => {
      const formData = {
        ...sampleFormData,
        sourceControls: [{ ...sampleSourceControls[0] }],
      };
      const expectedServers = sampleServers.slice(2);
      expect(
        getAllNonSelectedSourceControlServers(sampleServers, formData as never)
      ).toStrictEqual(expectedServers);
    });
  });

  describe('getFormDataWithSourceControlServerRemoved function', () => {
    it('should return null if null value passed as argument', () => {
      expect(getFormDataWithSourceControlServerRemoved(null, null)).toBe(null);
    });
    it('should return null if undefined value passed as argument', () => {
      expect(
        getFormDataWithSourceControlServerRemoved(undefined, undefined)
      ).toBe(null);
    });
    it('should return null if source control server ID value is not a string ', () => {
      expect(
        getFormDataWithSourceControlServerRemoved(
          23 as never,
          sampleFormData as never
        )
      ).toBe(null);
    });
    it('should return same form data as passed in form data if source control server ID is not found', () => {
      expect(
        getFormDataWithSourceControlServerRemoved(
          '999999',
          sampleFormData as never
        )
      ).toStrictEqual(sampleFormData);
    });
    it('should return form data with source control server removed if source control server ID is found', () => {
      const inputFormData = {
        ...sampleFormData,
        sourceControls: [...sampleSourceControls],
      };
      const expectedData = {
        ...inputFormData,
        sourceControls: [
          {
            ...sampleSourceControls[0],
            servers: [...sampleServers.slice(1, 2)],
          },
          {
            ...sampleSourceControls[1],
          },
        ],
      };
      expect(
        getFormDataWithSourceControlServerRemoved('1', inputFormData as never)
      ).toStrictEqual(expectedData);
    });
  });

  describe('getFormDataWithNewSourceControlServerAdded function', () => {
    it('should return null if null value passed as argument', () => {
      expect(getFormDataWithNewSourceControlServerAdded(null)).toBe(null);
    });
    it('should return undefined if undefined value passed as argument', () => {
      expect(getFormDataWithNewSourceControlServerAdded(undefined)).toBe(
        undefined
      );
    });
    it('should return form data with new source control added as a separate object in the array', () => {
      const formData = {
        ...sampleFormData,
        activeSourceControl: {
          id: '11223344',
          title: 'Test Active Source Control',
          servers: [...sampleServers],
        },
      };
      const expectedData = {
        ...sampleFormData,
        activeSourceControl: {
          id: '',
          title: '',
          servers: [],
        },
        sourceControls: [
          ...sampleFormData.sourceControls,
          formData.activeSourceControl,
        ],
      };
      expect(
        getFormDataWithNewSourceControlServerAdded(formData as never)
      ).toStrictEqual(expectedData);
    });
    it('should return form data with new source control server added to the servers array of existing source control', () => {
      const server = {
        id: '999999',
        title: 'test server',
      };
      const sourceControl = {
        ...sampleFormData.sourceControls[0],
        servers: [server],
      };
      const expectedSourceControls = [
        {
          ...sampleFormData.sourceControls[0],
          servers: [...sampleFormData.sourceControls[0].servers, server],
        },
      ];
      const formData = {
        ...sampleFormData,
        activeSourceControl: {
          ...sourceControl,
        },
      };
      const expectedData = {
        ...formData,
        activeSourceControl: {
          id: '',
          title: '',
          servers: [],
        },
        sourceControls: expectedSourceControls,
      };
      expect(
        getFormDataWithNewSourceControlServerAdded(formData as never)
      ).toStrictEqual(expectedData);
    });
  });

  describe('getApplicationFormOutputData function', () => {
    it('should return null if null value passed as argument', () => {
      expect(getApplicationFormOutputData(null)).toBe(null);
    });
    it('should return undefined if undefined value passed as argument', () => {
      expect(getApplicationFormOutputData(undefined)).toBe(null);
    });
    it('should return null if incorrect data structure is passed in', () => {
      expect(
        getApplicationFormOutputData(incorrectObjectStructure as never)
      ).toBe(null);
    });
    it('should return correct data when valid data is passed in', () => {
      const formData: ApplicationForm = {
        ...sampleFormData,
        applicationName: 'Test',
        createAnother: false,
        activeSourceControl: {
          id: '',
          title: '',
          servers: [],
        },
      };
      const expectedData: ApplicationFormOutput = {
        applicationName: formData.applicationName,
        createAnother: formData.createAnother,
        sourceControls: formData.sourceControls,
        ticketSystem: formData.ticketSystem,
      };
      expect(getApplicationFormOutputData(formData)).toStrictEqual(
        expectedData
      );
    });
  });
});
