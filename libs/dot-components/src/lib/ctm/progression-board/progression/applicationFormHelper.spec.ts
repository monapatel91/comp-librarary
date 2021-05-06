import {
  areActiveSCFieldsEmpty,
  getAllNonSelectedSCServers,
  getApplicationFormOutputData,
  getExistingSCIndex,
  getFormDataWithNewSCServerAdded,
  getFormDataWithSCServerRemoved,
  getFormDataWithSCServerSet,
  getFormDataWithSCSet,
  getFormDataWithTicketSystemServerSet,
  getFormDataWithTicketSystemSet,
  getFullPayloadUrl,
  getSCServerById,
  getSelectedSCServers,
  getSCById,
  getTicketSystemById,
  getTicketSystemServerById,
  isActiveSCServerValid,
  isActiveSCValid,
  isApplicationNameValid,
  isAtLeastOneSCServerSelected,
  isCreateAnotherValid,
  isSCArrayValid,
  isSCServerAlreadySelected,
  isServerArrayValid,
  isTicketSystemServerValid,
  isTicketSystemValid,
} from './applicationFormHelper';
import {
  ApplicationFormType,
  ApplicationFormOutput,
  SourceControl,
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

  const emptySourceControls: Array<SourceControl> = [
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

  const sampleScServers = [
    {
      id: '1111',
      name: 'Configuration/2',
      title: 'Gitlab - Server 1',
      payloadUrl: 'http://www.gl1.com',
    },
    {
      id: '2222',
      name: 'Configuration/2',
      title: 'Gitlab - Server 1',
      payloadUrl: 'http://www.gl2.com',
    },
  ];

  const sampleFormData: ApplicationFormType = {
    activeSourceControl: {} as SourceControl,
    applicationName: 'Test app',
    createAnother: false,
    sourceControls: [
      {
        id: '12345',
        title: 'GitLab',
        servers: [...sampleScServers],
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

  const sampleFormWithEmptySC = {
    ...sampleFormData,
    sourceControls: [] as Array<SourceControl>,
  };

  const sampleFormWithNullSC = {
    ...sampleFormData,
    sourceControls: null as Array<SourceControl>,
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

  describe('isActiveSCValid function', () => {
    it('should return false if null value passed as argument', () => {
      expect(isActiveSCValid(null)).toBe(false);
    });
    it('should return false if undefined value passed as argument', () => {
      expect(isActiveSCValid(undefined)).toBe(false);
    });
    it('should return false if incorrect data structure is passed in', () => {
      expect(isActiveSCValid(incorrectObjectStructure as never)).toBe(false);
    });
    it('should return false if ID or title properties are empty strings', () => {
      const formData = {
        ...sampleFormData,
        activeSourceControl: {
          id: '',
          title: '',
        },
      };
      expect(isActiveSCValid(formData as never)).toBe(false);
    });
    it('should return true on correct data structure with values', () => {
      const formData = {
        ...sampleFormData,
        activeSourceControl: {
          id: '123',
          title: 'Test title',
        },
      };
      expect(isActiveSCValid(formData as never)).toBe(true);
    });
  });

  describe('isActiveSCServerValid function', () => {
    it('should return false if null value passed as argument', () => {
      expect(isActiveSCServerValid(null)).toBe(false);
    });
    it('should return false if undefined value passed as argument', () => {
      expect(isActiveSCServerValid(undefined)).toBe(false);
    });
    it('should return false if incorrect data structure is passed in', () => {
      expect(isActiveSCServerValid(incorrectObjectStructure as never)).toBe(
        false
      );
    });
    it('should return false on empty properties', () => {
      const formData = {
        ...sampleFormData,
        activeSourceControl: {
          servers: [...emptyServers],
        },
      };
      expect(isActiveSCServerValid(formData as never)).toBe(false);
    });
    it('should return true on correct data structure with values', () => {
      const formData = {
        ...sampleFormData,
        activeSourceControl: {
          servers: [
            {
              id: '123',
              title: 'Test title',
            },
          ],
        },
      };
      expect(isActiveSCServerValid(formData as never)).toBe(true);
    });
  });

  describe('isAtLeastOneSCServerSelected function', () => {
    it('should return false if null value passed as argument', () => {
      expect(isAtLeastOneSCServerSelected(null)).toBe(false);
    });
    it('should return false if undefined value passed as argument', () => {
      expect(isAtLeastOneSCServerSelected(undefined)).toBe(false);
    });
    it('should return false if incorrect data structure is passed in', () => {
      const formData = {
        ...sampleFormWithNullSC,
      };
      expect(isAtLeastOneSCServerSelected(formData as never)).toBe(false);
    });
    it('should return false on empty source control array', () => {
      const formData = {
        ...sampleFormWithEmptySC,
      };
      expect(isAtLeastOneSCServerSelected(formData as never)).toBe(false);
    });
    it('should return true if more than one source control defined', () => {
      const formData = {
        ...sampleFormData,
        sourceControls: [{ id: '1' }, { id: '2' }],
      };
      expect(isAtLeastOneSCServerSelected(formData as never)).toBe(true);
    });
  });

  describe('areActiveSCFieldsEmpty function', () => {
    it('should return true if null value passed as argument', () => {
      expect(areActiveSCFieldsEmpty(null)).toBe(true);
    });
    it('should return true if undefined value passed as argument', () => {
      expect(areActiveSCFieldsEmpty(undefined)).toBe(true);
    });
    it('should return true if incorrect data structure is passed in', () => {
      expect(areActiveSCFieldsEmpty(incorrectObjectStructure as never)).toBe(
        true
      );
    });
    it('should return true if activeSourceControl property is null', () => {
      const formData = {
        ...sampleFormData,
        activeSourceControl: null as Array<SourceControl>,
      };
      expect(areActiveSCFieldsEmpty(formData as never)).toBe(true);
    });
    it('should return true if activeSourceControl property is empty object', () => {
      const formData = {
        ...sampleFormData,
        activeSourceControl: {},
      };
      expect(areActiveSCFieldsEmpty(formData as never)).toBe(true);
    });
    it('should return true if activeSourceControl property has empty properties', () => {
      const formData = {
        ...sampleFormData,
        activeSourceControl: {
          ...emptySourceControls[0],
        } as SourceControl,
      };
      expect(areActiveSCFieldsEmpty(formData as never)).toBe(true);
    });
    it('should return false if all activeSourceControl properties are set', () => {
      const formData = {
        ...sampleFormData,
        activeSourceControl: {
          ...sampleFormData.sourceControls,
        },
      };
      expect(areActiveSCFieldsEmpty(formData as never)).toBe(false);
    });
  });

  describe('isApplicationNameValid function', () => {
    it('should return false if null value passed as argument', () => {
      expect(isApplicationNameValid(null)).toBe(false);
    });
    it('should return false if undefined value passed as argument', () => {
      expect(isApplicationNameValid(undefined)).toBe(false);
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

  describe('isSCArrayValid function', () => {
    it('should return false if null value passed as argument', () => {
      expect(isSCArrayValid(null)).toBe(false);
    });
    it('should return false if undefined value passed as argument', () => {
      expect(isSCArrayValid(undefined)).toBe(false);
    });
    it('should return false if incorrect data structure is passed in', () => {
      expect(isSCArrayValid(incorrectObjectStructure as never)).toBe(false);
    });
    it('should return false if sourceControls property is null value', () => {
      const formData = {
        ...sampleFormWithNullSC,
      };
      expect(isSCArrayValid(formData as never)).toBe(false);
    });
    it('should return true if sourceControls property is empty array', () => {
      const formData = {
        ...sampleFormWithEmptySC,
      };
      expect(isSCArrayValid(formData as never)).toBe(true);
    });
    it('should return false if any object inside of sourceControls array has empty property', () => {
      const formData = {
        ...sampleFormData,
        sourceControls: [...emptySourceControls],
      };
      expect(isSCArrayValid(formData as never)).toBe(false);
    });
    it('should return true if sourceControls array is not empty and data is set correctly', () => {
      const formData = { ...sampleFormData };
      expect(isSCArrayValid(formData as never)).toBe(true);
    });
  });

  describe('isTicketSystemValid function', () => {
    it('should return false if null value passed as argument', () => {
      expect(isTicketSystemValid(null)).toBe(false);
    });
    it('should return false if undefined value passed as argument', () => {
      expect(isTicketSystemValid(undefined)).toBe(false);
    });
    it('should return false if incorrect data structure is passed in', () => {
      expect(isTicketSystemValid(incorrectObjectStructure as never)).toBe(
        false
      );
    });
    it('should return false if ticketSystem property is null value', () => {
      const formData = {
        ...sampleFormData,
        ticketSystem: null as never,
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
    it('should return false if incorrect data structure is passed in', () => {
      expect(isCreateAnotherValid(incorrectObjectStructure as never)).toBe(
        false
      );
    });
    it('should return false if property is set to null', () => {
      const formData = {
        ...sampleFormData,
        createAnother: null as never,
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

  describe('isSCServerAlreadySelected function', () => {
    it('should return false if null value passed as argument', () => {
      expect(isSCServerAlreadySelected(null, null)).toBe(false);
    });
    it('should return false if undefined value passed as argument', () => {
      expect(isSCServerAlreadySelected(undefined, undefined)).toBe(false);
    });
    it('should return false if incorrect data structure is passed in', () => {
      expect(
        isSCServerAlreadySelected(
          23 as never,
          incorrectObjectStructure as never
        )
      ).toBe(false);
    });
    it('should return false if sourceControls property is null value', () => {
      const formData = {
        ...sampleFormWithNullSC,
      };
      expect(isSCServerAlreadySelected('23', formData as never)).toBe(false);
    });
    it('should return false if server ID is NOT already selected', () => {
      const formData = {
        ...sampleFormData,
        createAnother: false,
      };
      expect(isSCServerAlreadySelected('99999', formData as never)).toBe(false);
    });
    it('should return true if server ID is already selected', () => {
      const formData = {
        ...sampleFormData,
        createAnother: false,
      };
      expect(isSCServerAlreadySelected('1111', formData as never)).toBe(true);
    });
  });

  describe('getExistingSCIndex function', () => {
    it('should return -1 if null value passed as argument', () => {
      expect(getExistingSCIndex(null, null)).toBe(-1);
    });
    it('should return -1 if undefined value passed as argument', () => {
      expect(getExistingSCIndex(undefined, undefined)).toBe(-1);
    });
    it('should return -1 if incorrect data structure is passed in', () => {
      expect(
        getExistingSCIndex(23 as never, incorrectObjectStructure as never)
      ).toBe(-1);
    });
    it('should return -1 if sourceControls property is null value', () => {
      const formData = {
        ...sampleFormWithNullSC,
      };
      expect(getExistingSCIndex('23', formData as never)).toBe(-1);
    });

    it('should return -1 if index not found', () => {
      const formData = {
        ...sampleFormData,
      };
      expect(getExistingSCIndex('99999', formData as never)).toBe(-1);
    });
    it('should return correct index number when source control exists', () => {
      const formData = {
        ...sampleFormData,
      };
      expect(getExistingSCIndex('12345', formData as never)).toBe(0);
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
          servers: [] as never,
        },
      };
      expect(
        getFormDataWithTicketSystemSet(ticketSystem, formData as never)
      ).toStrictEqual(expectedFormData);
    });
  });

  describe('getSCById function', () => {
    it('should return null if null value passed as argument', () => {
      expect(getSCById(null, null)).toBe(null);
    });
    it('should return null if undefined value passed as argument', () => {
      expect(getSCById(undefined, undefined)).toBe(null);
    });
    it('should return null if incorrect data structure is passed in', () => {
      expect(getSCById(23 as never, incorrectObjectStructure as never)).toBe(
        null
      );
    });
    it('should return null if ID value is not found in the array', () => {
      expect(getSCById('444', sampleSourceControls as never)).toBe(null);
    });
    it('should return correct source control for given ID value', () => {
      expect(getSCById('123', sampleSourceControls as never)).toBe(
        sampleSourceControls[0]
      );
    });
  });

  describe('getSCServerById function', () => {
    it('should return null if null value passed as argument', () => {
      expect(getSCServerById(null, null)).toBe(null);
    });
    it('should return null if undefined value passed as argument', () => {
      expect(getSCServerById(undefined, undefined)).toBe(null);
    });
    it('should return null if incorrect data structure is passed in', () => {
      expect(
        getSCServerById(23 as never, incorrectObjectStructure as never)
      ).toBe(null);
    });
    it('should return null if ID value is not found in the array', () => {
      expect(getSCServerById('77', sampleServers as never)).toBe(null);
    });
    it('should return correct source control server for given ID value', () => {
      expect(getSCServerById('1', sampleServers as never)).toBe(
        sampleServers[0]
      );
    });
  });

  describe('getFormDataWithSCSet function', () => {
    it('should return null if null value passed as arguments', () => {
      expect(getFormDataWithSCSet(null, null)).toBe(null);
    });
    it('should return false if undefined value passed as argument', () => {
      expect(getFormDataWithSCSet(undefined, undefined)).toBe(null);
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
      expect(getFormDataWithSCSet(null, formData as never)).toStrictEqual(
        expectedFormData
      );
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
          servers: [] as never,
        },
      };
      expect(
        getFormDataWithSCSet(sourceControl as never, formData as never)
      ).toStrictEqual(expectedFormData);
    });
  });

  describe('getFormDataWithSCServerSet function', () => {
    it('should return null if null value passed as arguments', () => {
      expect(getFormDataWithSCServerSet(null, null)).toBe(null);
    });
    it('should return false if undefined value passed as argument', () => {
      expect(getFormDataWithSCServerSet(undefined, undefined)).toBe(null);
    });
    it('should return correct form data when passed in source control server object as null value', () => {
      const sourceControl = { ...sampleSourceControls[0] };
      const formData = {
        ...sampleFormData,
        activeSourceControl: {
          ...sourceControl,
          servers: [] as never,
        },
      };
      expect(getFormDataWithSCServerSet(null, formData as never)).toStrictEqual(
        formData
      );
    });
    it('should return correct form data when passed in source control server object', () => {
      const sourceControl = { ...sampleSourceControls[0] };
      const formData = {
        ...sampleFormData,
        activeSourceControl: {
          ...sourceControl,
          servers: [] as never,
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
        getFormDataWithSCServerSet(sourceControl as never, formData as never)
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
          servers: [] as never,
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
          servers: [] as never,
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

  describe('getAllNonSelectedSCServers function', () => {
    it('should return null if null value passed as argument', () => {
      expect(getAllNonSelectedSCServers(null, null)).toBe(null);
    });
    it('should return null if undefined value passed as argument', () => {
      expect(getAllNonSelectedSCServers(undefined, undefined)).toBe(null);
    });
    it('should return null if incorrect data structure is passed in', () => {
      expect(
        getAllNonSelectedSCServers(
          23 as never,
          incorrectObjectStructure as never
        )
      ).toBe(null);
    });
    it('should return all passed in servers when no server is already selected', () => {
      const formData = {
        ...sampleFormWithEmptySC,
      };
      expect(
        getAllNonSelectedSCServers(sampleServers as never, formData as never)
      ).toStrictEqual(sampleServers);
    });
    it('should filter passed in servers and return only NON selected ones', () => {
      const formData = {
        ...sampleFormData,
        sourceControls: [{ ...sampleSourceControls[0] }],
      };
      const expectedServers = sampleServers.slice(2);
      expect(
        getAllNonSelectedSCServers(sampleServers as never, formData as never)
      ).toStrictEqual(expectedServers);
    });
  });

  describe('getFormDataWithSCServerRemoved function', () => {
    it('should return null if null value passed as argument', () => {
      expect(getFormDataWithSCServerRemoved(null, null)).toBe(null);
    });
    it('should return null if undefined value passed as argument', () => {
      expect(getFormDataWithSCServerRemoved(undefined, undefined)).toBe(null);
    });
    it('should return null if source control server ID value is not a string ', () => {
      expect(
        getFormDataWithSCServerRemoved(23 as never, sampleFormData as never)
      ).toBe(null);
    });
    it('should return same form data as passed in form data if source control server ID is not found', () => {
      expect(
        getFormDataWithSCServerRemoved('999999', sampleFormData as never)
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
        getFormDataWithSCServerRemoved('1', inputFormData as never)
      ).toStrictEqual(expectedData);
    });
  });

  describe('getFormDataWithNewSCServerAdded function', () => {
    it('should return null if null value passed as argument', () => {
      expect(getFormDataWithNewSCServerAdded(null)).toBe(null);
    });
    it('should return undefined if undefined value passed as argument', () => {
      expect(getFormDataWithNewSCServerAdded(undefined)).toBe(undefined);
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
          ...emptySourceControls[0],
        },
        sourceControls: [
          ...sampleFormData.sourceControls,
          formData.activeSourceControl,
        ],
      };
      expect(getFormDataWithNewSCServerAdded(formData as never)).toStrictEqual(
        expectedData
      );
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
          ...emptySourceControls[0],
        },
        sourceControls: expectedSourceControls,
      };
      expect(getFormDataWithNewSCServerAdded(formData as never)).toStrictEqual(
        expectedData
      );
    });

    describe('getFullPayloadUrl function', () => {
      it('should return empty string when arguments are null values', () => {
        expect(getFullPayloadUrl(null, null, null)).toBe('');
      });
      it('should return empty string when arguments are undefined values', () => {
        expect(getFullPayloadUrl(undefined, undefined, undefined)).toBe('');
      });
      it('should return empty string when arguments are empty strings', () => {
        expect(getFullPayloadUrl('', '', '')).toBe('');
      });
      it('should return empty string when applicationName argument is not a string', () => {
        expect(getFullPayloadUrl(123 as never, '', '')).toBe('');
      });
      it('should return empty string when basePayloadUrl argument is not a string', () => {
        expect(getFullPayloadUrl('123', 123 as never, '123')).toBe('');
      });
      it('should return empty string when serverId argument is not a string', () => {
        expect(getFullPayloadUrl('123', '234', 123 as never)).toBe('');
      });
      it('should return correct string when applicationName, basePayloadUrl and serverId are set', () => {
        const appName = 'App name 01';
        const serverId = '123';
        const basePayloadUrl = `https://gl-s1.com/api/submit_change?token=<api-token>&toproject=`;
        const expectedUrl = `${basePayloadUrl}App%20name%2001-source-${serverId}`;
        expect(getFullPayloadUrl(appName, basePayloadUrl, serverId)).toBe(
          expectedUrl
        );
      });
    });

    describe('getSelectedSCServers function', () => {
      it('should return null if null value passed as argument', () => {
        expect(getSelectedSCServers(null)).toBe(null);
      });
      it('should return null if undefined value passed as argument', () => {
        expect(getSelectedSCServers(undefined)).toBe(null);
      });
      it('should return empty array when no selected source control servers', () => {
        const formData = {
          ...sampleFormWithEmptySC,
        };
        expect(getSelectedSCServers(formData)).toStrictEqual([]);
      });
      it('should return array with correct data when at least one selected source control', () => {
        const formData = {
          ...sampleFormData,
        };
        expect(getSelectedSCServers(formData)).toStrictEqual(sampleScServers);
      });
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
      const formData: ApplicationFormType = {
        ...sampleFormData,
        applicationName: 'Test',
        createAnother: false,
        activeSourceControl: {
          ...emptySourceControls[0],
        } as SourceControl,
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
