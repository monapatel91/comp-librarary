import {
  ApplicationFormType,
  ApplicationFormOutput,
  AutoCompleteControl,
  SCServer,
  SourceControl,
  TicketSystem,
} from '../ProgressionBoardInterfaces';

const isValidFormData = (formData: ApplicationFormType) => {
  return !!(
    formData &&
    typeof formData === 'object' &&
    Object.keys(formData).length > 0 &&
    'activeSourceControl' in formData &&
    typeof formData.activeSourceControl === 'object' &&
    'applicationName' in formData &&
    typeof formData.applicationName === 'string' &&
    'sourceControls' in formData &&
    Array.isArray(formData.sourceControls) &&
    'ticketSystem' in formData &&
    typeof formData.ticketSystem === 'object' &&
    'createAnother' in formData &&
    (formData.createAnother === true || formData.createAnother === false)
  );
};

export const isServerArrayValid = (
  servers: Array<AutoCompleteControl> = []
): boolean =>
  Array.isArray(servers) &&
  servers.length > 0 &&
  servers.every((server) => server.id && server.title);

export const isActiveSCValid = (formData: ApplicationFormType): boolean => {
  if (!isValidFormData(formData)) return false;
  const { activeSourceControl } = formData;
  return !!(
    activeSourceControl &&
    activeSourceControl.id &&
    activeSourceControl.title
  );
};

export const isActiveSCServerValid = (
  formData: ApplicationFormType
): boolean => {
  if (!isValidFormData(formData)) return false;
  const {
    activeSourceControl: { servers = [] as Array<AutoCompleteControl> },
  } = formData;
  return isServerArrayValid(servers);
};

export const isAtLeastOneSCServerSelected = (
  formData: ApplicationFormType
): boolean => {
  if (!isValidFormData(formData)) return false;
  const { sourceControls } = formData;
  return sourceControls.length > 0;
};

export const areActiveSCFieldsEmpty = (
  formData: ApplicationFormType
): boolean => {
  if (!formData?.activeSourceControl) return true;
  const isPropertyEmpty =
    Object.keys(formData.activeSourceControl).length === 0;
  const areControlPropsEmpty = !!(
    formData.activeSourceControl.id === '' &&
    formData.activeSourceControl.title === '' &&
    formData.activeSourceControl.servers.length === 0
  );
  return isPropertyEmpty || areControlPropsEmpty;
};

export const isApplicationNameValid = (
  formData: ApplicationFormType
): boolean => {
  if (!isValidFormData(formData)) return false;
  return !!formData.applicationName;
};

export const isSCArrayValid = (formData: ApplicationFormType): boolean => {
  if (!isValidFormData(formData)) return false;
  const { sourceControls } = formData;
  return !!(
    sourceControls &&
    (sourceControls.length === 0 ||
      sourceControls.every(
        (sourceControl) =>
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
  if (!isValidFormData(formData)) return false;
  const { ticketSystem } = formData;
  return !!(ticketSystem && ticketSystem.id && ticketSystem.title);
};

export const isTicketSystemServerValid = (
  formData: ApplicationFormType
): boolean => {
  if (!isValidFormData(formData)) return false;
  const { ticketSystem } = formData;
  const { servers } = ticketSystem || {};
  return (
    Array.isArray(servers) &&
    servers.length > 0 &&
    servers.every((server) => server.id && server.title)
  );
};

export const isCreateAnotherValid = (formData: ApplicationFormType): boolean =>
  isValidFormData(formData);

export const isSCServerAlreadySelected = (
  serverId: string,
  formData: ApplicationFormType
): boolean => {
  if (!isValidFormData(formData)) return false;
  const { sourceControls } = formData;
  return !!(
    serverId &&
    typeof serverId === 'string' &&
    sourceControls.length > 0 &&
    sourceControls.some((sourceControl) =>
      sourceControl.servers?.find((s) => s.id === serverId)
    )
  );
};

export const getExistingSCIndex = (
  sourceControlId: string,
  formData: ApplicationFormType
): number => {
  if (!isValidFormData(formData)) return -1;
  const { sourceControls } = formData;
  if (
    !sourceControlId ||
    typeof sourceControlId !== 'string' ||
    sourceControls.length <= 0
  )
    return -1;
  return sourceControls.findIndex(
    (sourceControl) => sourceControl.id === sourceControlId
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
  if (!isValidFormData(formData)) return null;
  return {
    ...formData,
    ticketSystem: ticketSystem
      ? {
          ...ticketSystem,
          servers: [] as Array<AutoCompleteControl>,
        }
      : ({} as TicketSystem),
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
  if (!isValidFormData(formData)) return null;
  return {
    ...formData,
    activeSourceControl: sourceControl
      ? {
          ...sourceControl,
          servers: [],
        }
      : ({} as SourceControl),
  };
};

export const getFormDataWithSCServerSet = (
  currentSCServer: SCServer,
  formData: ApplicationFormType
): ApplicationFormType => {
  if (!isValidFormData(formData)) return null;
  return {
    ...formData,
    activeSourceControl: {
      ...formData.activeSourceControl,
      ...{
        servers: currentSCServer ? [{ ...currentSCServer }] : [],
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
  if (!isValidFormData(formData)) return null;
  return {
    ...formData,
    ticketSystem: {
      ...formData.ticketSystem,
      ...{
        servers: ticketSystemServer ? [{ ...ticketSystemServer }] : [],
      },
    },
  };
};

export const getAllNonSelectedSCServers = (
  allSCServers: Array<SCServer>,
  formData: ApplicationFormType
): Array<SCServer> => {
  if (
    !isValidFormData(formData) ||
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
    !isValidFormData(formData) ||
    !SCServerId ||
    typeof SCServerId !== 'string'
  )
    return null;

  return {
    ...formData,
    sourceControls: [
      ...(formData.sourceControls
        .map((sourceControl) => ({
          ...sourceControl,
          servers: [
            ...sourceControl.servers.filter(
              (currentSCServer) => currentSCServer.id !== SCServerId
            ),
          ],
        }))
        ?.filter((sc) => sc.servers.length > 0) || []),
    ],
  };
};

export const getFormDataWithNewSCServerAdded = (
  formData: ApplicationFormType
): ApplicationFormType => {
  if (!isValidFormData(formData) || !areActiveSCFieldsValid(formData))
    return formData;
  const { sourceControls, activeSourceControl } = formData;
  const existingSCIndex = getExistingSCIndex(activeSourceControl.id, formData);

  return existingSCIndex !== -1
    ? {
        ...formData,
        activeSourceControl: {
          id: '',
          title: '',
          servers: [],
        },
        sourceControls: [
          ...sourceControls.map((sourceControl, index) => {
            return index === existingSCIndex
              ? {
                  ...sourceControl,
                  servers: [
                    ...sourceControl.servers,
                    ...activeSourceControl.servers,
                  ],
                }
              : {
                  ...sourceControl,
                };
          }),
        ],
      }
    : {
        ...formData,
        activeSourceControl: {
          id: '',
          title: '',
          servers: [],
        },
        sourceControls: [
          ...sourceControls,
          {
            ...activeSourceControl,
            servers: [...activeSourceControl.servers],
          },
        ],
      };
};

export const getApplicationFormOutputData = (
  formData: ApplicationFormType
): ApplicationFormOutput => {
  if (!isValidFormData(formData)) return null;
  const data = areActiveSCFieldsEmpty(formData)
    ? formData
    : getFormDataWithNewSCServerAdded(formData);
  const { applicationName, createAnother, sourceControls, ticketSystem } = data;

  return applicationName !== ''
    ? {
        applicationName,
        createAnother,
        sourceControls,
        ticketSystem,
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
  if (!isValidFormData(formData)) return null;
  const { sourceControls } = formData;
  return sourceControls.reduce(
    (servers: Array<AutoCompleteControl>, sc: SourceControl) =>
      servers.concat(sc.servers),
    []
  );
};
