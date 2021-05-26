import {
  ApplicationFormType,
  ApplicationFormOutput,
  AutoCompleteControl,
  SCServer,
  SourceControl,
  TicketSystem,
} from '../ProgressionBoardInterfaces';

const isValidFormDataStructure = (formData: ApplicationFormType) => {
  return !!(
    formData &&
    typeof formData === 'object' &&
    Object.keys(formData).length > 0 &&
    'activeSourceControl' in formData &&
    typeof formData.activeSourceControl.value === 'object' &&
    'applicationName' in formData &&
    typeof formData.applicationName.value === 'string' &&
    'sourceControls' in formData &&
    Array.isArray(formData.sourceControls.value) &&
    'ticketSystem' in formData &&
    typeof formData.ticketSystem.value === 'object' &&
    'createAnother' in formData &&
    (formData.createAnother.value === true ||
      formData.createAnother.value === false)
  );
};

export const isFormDataValid = (
  formData: ApplicationFormType,
  applicationNames: Array<string>
): boolean =>
  isApplicationNameValid(formData, applicationNames) &&
  isSCDataValidForSubmission(formData) &&
  isSCArrayValid(formData) &&
  isTicketSystemValid(formData) &&
  isTicketSystemServerValid(formData) &&
  isCreateAnotherValid(formData);

export const isServerArrayValid = (
  servers: Array<AutoCompleteControl> = []
): boolean =>
  Array.isArray(servers) &&
  servers.length > 0 &&
  servers.every((server) => server.id && server.title);

export const isActiveSCValid = (formData: ApplicationFormType): boolean => {
  if (!isValidFormDataStructure(formData)) return false;
  const {
    activeSourceControl: { value },
  } = formData;
  return !!(value && value.id && value.title);
};

export const isActiveSCServerValid = (
  formData: ApplicationFormType
): boolean => {
  if (!isValidFormDataStructure(formData)) return false;
  const {
    activeSourceControl: {
      value: { servers = [] as Array<AutoCompleteControl> },
    },
  } = formData;
  return isServerArrayValid(servers);
};

export const isAtLeastOneSCServerSelected = (
  formData: ApplicationFormType
): boolean => {
  if (!isValidFormDataStructure(formData)) return false;
  const {
    sourceControls: { value },
  } = formData;
  return value.length > 0;
};

export const areActiveSCFieldsEmpty = (
  formData: ApplicationFormType
): boolean => {
  if (!formData?.activeSourceControl?.value) return true;
  const isPropertyEmpty =
    Object.keys(formData.activeSourceControl.value).length === 0;
  const { id, title, servers } = formData.activeSourceControl.value;
  const areControlPropsEmpty = !!(
    id === '' &&
    title === '' &&
    servers.length === 0
  );
  return isPropertyEmpty || areControlPropsEmpty;
};

export const isApplicationNameValid = (
  formData: ApplicationFormType,
  applicationNames: Array<string>
): boolean => {
  if (!isValidFormDataStructure(formData)) return false;
  const {
    applicationName: { value },
  } = formData;
  return !!value && !isApplicationNameDuplicate(value, applicationNames);
};

export const isApplicationNameDuplicate = (
  applicationName: string,
  applicationNames: Array<string>
): boolean => {
  if (!applicationName || !Array.isArray(applicationNames)) return false;
  return applicationNames.some(
    (existingAppName: string) =>
      existingAppName.toLowerCase() === applicationName.trim().toLowerCase()
  );
};

export const getApplicationNameErrorMessage = (
  isEmpty: boolean,
  isDuplicate: boolean
) => {
  if (isEmpty) return 'This field is required';
  if (isDuplicate) return 'Application already exists';
  return '';
};

export const isApplicationNameEmpty = (applicationName: string): boolean =>
  typeof applicationName !== 'string' || applicationName.trim() === '';

export const isSCArrayValid = (formData: ApplicationFormType): boolean => {
  if (!isValidFormDataStructure(formData)) return false;
  const {
    sourceControls: { value },
  } = formData;
  return !!(
    value &&
    (value.length === 0 ||
      value.every(
        (sourceControl: SourceControl) =>
          sourceControl.id !== '' &&
          sourceControl.title !== '' &&
          isServerArrayValid(sourceControl.servers)
      ))
  );
};

export const isSCDataValidForSubmission = (formData: ApplicationFormType) =>
  isAtLeastOneSCServerSelected(formData) && areActiveSCFieldsEmpty(formData)
    ? true
    : isActiveSCValid(formData) && isActiveSCServerValid(formData);

export const areActiveSCFieldsValid = (
  formData: ApplicationFormType
): boolean => isActiveSCValid(formData) && isActiveSCServerValid(formData);

export const isTicketSystemValid = (formData: ApplicationFormType): boolean => {
  if (!isValidFormDataStructure(formData)) return false;
  const {
    ticketSystem: { value },
  } = formData;
  return !!(value && value.id && value.title);
};

export const isTicketSystemServerValid = (
  formData: ApplicationFormType
): boolean => {
  if (!isValidFormDataStructure(formData)) return false;
  const { ticketSystem } = formData;
  const {
    value: { servers },
  } = ticketSystem || {};
  return (
    Array.isArray(servers) &&
    servers.length > 0 &&
    servers.every((server) => server.id && server.title)
  );
};

export const isCreateAnotherValid = (formData: ApplicationFormType): boolean =>
  isValidFormDataStructure(formData);

export const isSCServerAlreadySelected = (
  serverId: string,
  formData: ApplicationFormType
): boolean => {
  if (!isValidFormDataStructure(formData)) return false;
  const {
    sourceControls: { value },
  } = formData;
  return !!(
    serverId &&
    typeof serverId === 'string' &&
    value.length > 0 &&
    value.some((sourceControl: SourceControl) =>
      sourceControl.servers?.find((s) => s.id === serverId)
    )
  );
};

export const getExistingSCIndex = (
  sourceControlId: string,
  formData: ApplicationFormType
): number => {
  if (!isValidFormDataStructure(formData)) return -1;
  const {
    sourceControls: { value },
  } = formData;
  if (
    !sourceControlId ||
    typeof sourceControlId !== 'string' ||
    value.length <= 0
  )
    return -1;
  return value.findIndex(
    (sourceControl: SourceControl) => sourceControl.id === sourceControlId
  );
};

export const getTicketSystemById = (
  ticketSystemId: string,
  ticketSystems: Array<TicketSystem> = []
): TicketSystem =>
  (ticketSystems &&
    Array.isArray(ticketSystems) &&
    ticketSystems.find((ts) => ts.id === ticketSystemId)) ||
  null;

export const getFormDataWithTicketSystemSet = (
  ticketSystem: TicketSystem,
  formData: ApplicationFormType
): ApplicationFormType => {
  if (!isValidFormDataStructure(formData)) return null;
  return {
    ...formData,
    ticketSystem: {
      ...formData.ticketSystem,
      value: ticketSystem
        ? {
            ...ticketSystem,
            servers: [] as Array<AutoCompleteControl>,
          }
        : ({} as TicketSystem),
    },
  };
};

export const getSCById = (
  sourceControlId: string,
  sourceControls: Array<SourceControl> = []
): SourceControl =>
  (sourceControls &&
    Array.isArray(sourceControls) &&
    sourceControls.find(
      (sourceControl) => sourceControl.id === sourceControlId
    )) ||
  null;

export const getSCServerById = (
  SCServerId: string,
  SCServers: Array<SCServer> = []
): SCServer =>
  (SCServers &&
    Array.isArray(SCServers) &&
    SCServers.find((scServer: SCServer) => scServer.id === SCServerId)) ||
  null;

export const getFormDataWithSCSet = (
  sourceControl: SourceControl,
  formData: ApplicationFormType
): ApplicationFormType => {
  if (!isValidFormDataStructure(formData)) return null;
  return {
    ...formData,
    activeSourceControl: {
      ...formData.activeSourceControl,
      value: sourceControl
        ? {
            ...sourceControl,
            servers: [],
          }
        : ({} as SourceControl),
    },
  };
};

export const getFormDataWithSCServerSet = (
  currentSCServer: SCServer,
  formData: ApplicationFormType
): ApplicationFormType => {
  if (!isValidFormDataStructure(formData)) return null;
  return {
    ...formData,
    activeSourceControl: {
      ...formData.activeSourceControl,
      value: {
        ...{
          ...formData.activeSourceControl.value,
          servers: currentSCServer ? [{ ...currentSCServer }] : [],
        },
      },
    },
  };
};

export const getTicketSystemServerById = (
  ticketSystemServerId: string,
  ticketSystemServers: Array<AutoCompleteControl> = []
): AutoCompleteControl =>
  (ticketSystemServers &&
    Array.isArray(ticketSystemServers) &&
    ticketSystemServers.find(
      (ticketSystemServer) => ticketSystemServer.id === ticketSystemServerId
    )) ||
  null;

export const getFormDataWithTicketSystemServerSet = (
  ticketSystemServer: AutoCompleteControl,
  formData: ApplicationFormType
): ApplicationFormType => {
  if (!isValidFormDataStructure(formData)) return null;
  return {
    ...formData,
    ticketSystem: {
      ...formData.ticketSystem,
      value: {
        ...formData.ticketSystem.value,
        ...{
          servers: ticketSystemServer ? [{ ...ticketSystemServer }] : [],
        },
      },
    },
  };
};

export const getAllNonSelectedSCServers = (
  allSCServers: Array<SCServer>,
  formData: ApplicationFormType
): Array<SCServer> => {
  if (
    !isValidFormDataStructure(formData) ||
    !allSCServers ||
    !Array.isArray(allSCServers)
  )
    return null;
  return [
    ...allSCServers.filter(
      (currentSCServer) =>
        !isSCServerAlreadySelected(currentSCServer.id, formData)
    ),
  ];
};

export const getFormDataWithSCServerRemoved = (
  SCServerId: string,
  formData: ApplicationFormType
): ApplicationFormType => {
  if (
    !isValidFormDataStructure(formData) ||
    !SCServerId ||
    typeof SCServerId !== 'string'
  )
    return null;
  return {
    ...formData,
    sourceControls: {
      ...formData.sourceControls,
      value: [
        ...(formData.sourceControls.value
          .map((sourceControl: SourceControl) => ({
            ...sourceControl,
            servers: [
              ...sourceControl.servers.filter(
                (currentSCServer: SCServer) => currentSCServer.id !== SCServerId
              ),
            ],
          }))
          ?.filter((sc) => sc.servers.length > 0) || []),
      ],
    },
  };
};

export const getFormDataWithNewSCServerAdded = (
  formData: ApplicationFormType
): ApplicationFormType => {
  if (!isValidFormDataStructure(formData) || !areActiveSCFieldsValid(formData))
    return formData;
  const { sourceControls, activeSourceControl } = formData;
  const existingSCIndex = getExistingSCIndex(
    activeSourceControl.value.id,
    formData
  );

  return existingSCIndex !== -1
    ? {
        ...formData,
        activeSourceControl: {
          ...formData.activeSourceControl,
          isTouched: false,
          isValid: false,
          errorMessage: '',
          value: {
            id: '',
            title: '',
            servers: [],
          },
        },
        sourceControls: {
          ...formData.sourceControls,
          value: [
            ...sourceControls.value.map((sourceControl, index) => {
              return index === existingSCIndex
                ? {
                    ...sourceControl,
                    servers: [
                      ...sourceControl.servers,
                      ...activeSourceControl.value.servers,
                    ],
                  }
                : {
                    ...sourceControl,
                  };
            }),
          ],
        },
      }
    : {
        ...formData,
        activeSourceControl: {
          ...formData.activeSourceControl,
          errorMessage: '',
          isTouched: false,
          isValid: false,
          value: {
            id: '',
            title: '',
            servers: [],
          },
        },
        sourceControls: {
          ...formData.sourceControls,
          value: [
            ...sourceControls.value,
            {
              ...activeSourceControl.value,
              servers: [...activeSourceControl.value.servers],
            },
          ],
        },
      };
};

export const getApplicationFormOutputData = (
  formData: ApplicationFormType
): ApplicationFormOutput => {
  if (!isValidFormDataStructure(formData)) return null;
  const data = areActiveSCFieldsEmpty(formData)
    ? formData
    : getFormDataWithNewSCServerAdded(formData);
  const {
    applicationName: { value: formApplicationName },
    createAnother: { value: formCreateAnother },
    sourceControls: { value: formSourceControls },
    ticketSystem: { value: formTicketSystem },
  } = data;
  return formApplicationName !== ''
    ? {
        applicationName: formApplicationName.trim(),
        createAnother: formCreateAnother,
        sourceControls: formSourceControls,
        ticketSystem: formTicketSystem,
      }
    : null;
};

export const getFullPayloadUrl = (
  applicationName: string,
  basePayloadUrl: string,
  serverName: string
): string => {
  if (
    !basePayloadUrl ||
    !applicationName ||
    !serverName ||
    typeof basePayloadUrl !== 'string' ||
    typeof applicationName !== 'string' ||
    typeof serverName !== 'string'
  )
    return '';

  return `${basePayloadUrl}${encodeURI(applicationName)}-source-${serverName}`;
};

export const getSelectedSCServers = (
  formData: ApplicationFormType
): Array<AutoCompleteControl> => {
  if (!isValidFormDataStructure(formData)) return null;
  const {
    sourceControls: { value },
  } = formData;
  return value.reduce(
    (servers: Array<AutoCompleteControl>, sc: SourceControl) =>
      servers.concat(sc.servers),
    []
  );
};
