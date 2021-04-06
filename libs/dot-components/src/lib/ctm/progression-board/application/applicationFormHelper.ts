import {
  ApplicationForm,
  ApplicationFormOutput,
  AutoCompleteControl,
  SourceControl,
  TicketSystem,
} from '../ProgressionBoardInterfaces';

export const isServerArrayValid = (
  servers: Array<AutoCompleteControl> = []
): boolean =>
  Array.isArray(servers) &&
  servers.length > 0 &&
  servers.every((server) => server.id && server.title);

export const isActiveSourceControlValid = (
  formData = {} as ApplicationForm
): boolean => {
  const { activeSourceControl = {} as SourceControl } = formData || {};
  return !!(
    activeSourceControl &&
    activeSourceControl.id &&
    activeSourceControl.title
  );
};

export const isActiveSourceControlServerValid = (
  formData = {} as ApplicationForm
): boolean => {
  const {
    activeSourceControl: { servers = [] as Array<AutoCompleteControl> } = {},
  } = formData || {};
  return isServerArrayValid(servers);
};

export const isAtLeastOneSourceControlServerSelected = (
  formData = {} as ApplicationForm
): boolean => {
  const { sourceControls = [] } = formData || {};
  return Array.isArray(sourceControls) && sourceControls.length > 0;
};

export const areActiveSourceControlFieldsEmpty = (
  formData = {} as ApplicationForm
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
  formData = {} as ApplicationForm
): boolean => {
  const { applicationName = '' } = formData || {};
  return !!applicationName;
};

export const isSourceControlsArrayValid = (
  formData = {} as ApplicationForm
): boolean => {
  const { sourceControls } = formData || {};
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

export const isSourceControlDataValidForSubmission = (
  formData: ApplicationForm
) =>
  isAtLeastOneSourceControlServerSelected(formData) &&
  areActiveSourceControlFieldsEmpty(formData)
    ? true
    : isActiveSourceControlValid(formData) &&
      isActiveSourceControlServerValid(formData);

export const areActiveSourceControlsFieldsValid = (
  formData: ApplicationForm
): boolean =>
  isActiveSourceControlValid(formData) &&
  isActiveSourceControlServerValid(formData);

export const isTicketSystemValid = (
  formData = {} as ApplicationForm
): boolean => {
  const { ticketSystem } = formData || {};
  return !!(ticketSystem && ticketSystem.id && ticketSystem.title);
};

export const isTicketSystemServerValid = (
  formData = {} as ApplicationForm
): boolean => {
  const { ticketSystem = {} as TicketSystem } = formData || {};
  const { servers } = ticketSystem || {};
  return (
    Array.isArray(servers) &&
    servers.length > 0 &&
    servers.every((server) => server.id && server.title)
  );
};

export const isCreateAnotherValid = (
  formData = {} as ApplicationForm
): boolean => {
  const { createAnother } = formData || {};
  return createAnother === true || createAnother === false;
};

export const isSourceControlServerAlreadySelected = (
  serverId = '' as string,
  formData = {} as ApplicationForm
): boolean => {
  const { sourceControls } = formData || {};
  return !!(
    serverId &&
    typeof serverId === 'string' &&
    Array.isArray(sourceControls) &&
    sourceControls.length > 0 &&
    sourceControls.some((sourceControl) =>
      sourceControl.servers?.find((s) => s.id === serverId)
    )
  );
};

export const getExistingSourceControlIndex = (
  sourceControlId = '' as string,
  formData = {} as ApplicationForm
): number => {
  const { sourceControls } = formData || {};
  if (
    !sourceControlId ||
    typeof sourceControlId !== 'string' ||
    !sourceControls ||
    !Array.isArray(sourceControls) ||
    sourceControls.length <= 0
  )
    return -1;
  return sourceControls.findIndex(
    (sourceControl) => sourceControl.id === sourceControlId
  );
};

export const getTicketSystemById = (
  ticketSystemId: string,
  ticketSystems = [] as Array<TicketSystem>
): TicketSystem =>
  (ticketSystems &&
    Array.isArray(ticketSystems) &&
    ticketSystems.find((ts) => ts.id === ticketSystemId)) ||
  null;

export const getFormDataWithTicketSystemSet = (
  ticketSystem: TicketSystem,
  formData: ApplicationForm
): ApplicationForm => {
  if (!formData || typeof formData !== 'object') return null;
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

export const getSourceControlById = (
  sourceControlId: string,
  sourceControls = [] as Array<SourceControl>
): SourceControl =>
  (sourceControls &&
    Array.isArray(sourceControls) &&
    sourceControls.find(
      (sourceControl) => sourceControl.id === sourceControlId
    )) ||
  null;

export const getSourceControlServerById = (
  sourceControlServerId: string,
  sourceControlServers = [] as Array<AutoCompleteControl>
): AutoCompleteControl =>
  (sourceControlServers &&
    Array.isArray(sourceControlServers) &&
    sourceControlServers.find(
      (scServer) => scServer.id === sourceControlServerId
    )) ||
  null;

export const getFormDataWithSourceControlSet = (
  sourceControl: SourceControl,
  formData: ApplicationForm
): ApplicationForm => {
  if (!formData || typeof formData !== 'object') return null;
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

export const getFormDataWithSourceControlServerSet = (
  sourceControlServer: AutoCompleteControl,
  formData: ApplicationForm
): ApplicationForm => {
  if (!formData || typeof formData !== 'object') return null;
  return {
    ...formData,
    activeSourceControl: {
      ...formData.activeSourceControl,
      ...{
        servers: sourceControlServer ? [{ ...sourceControlServer }] : [],
      },
    },
  };
};

export const getTicketSystemServerById = (
  ticketSystemServerId: string,
  ticketSystemServers = [] as Array<AutoCompleteControl>
): AutoCompleteControl =>
  (ticketSystemServers &&
    Array.isArray(ticketSystemServers) &&
    ticketSystemServers.find(
      (ticketSystemServer) => ticketSystemServer.id === ticketSystemServerId
    )) ||
  null;

export const getFormDataWithTicketSystemServerSet = (
  ticketSystemServer: AutoCompleteControl,
  formData: ApplicationForm
): ApplicationForm => {
  if (!formData || typeof formData !== 'object') return null;
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

export const getAllNonSelectedSourceControlServers = (
  sourceControlServers: Array<AutoCompleteControl>,
  formData = {} as ApplicationForm
): Array<AutoCompleteControl> => {
  if (
    !formData ||
    typeof formData !== 'object' ||
    !sourceControlServers ||
    !Array.isArray(sourceControlServers)
  )
    return null;
  return [
    ...sourceControlServers.filter(
      (scServer) => !isSourceControlServerAlreadySelected(scServer.id, formData)
    ),
  ];
};

export const getFormDataWithSourceControlServerRemoved = (
  sourceControlServerId: string,
  formData: ApplicationForm
): ApplicationForm => {
  if (
    !formData ||
    typeof formData !== 'object' ||
    !sourceControlServerId ||
    typeof sourceControlServerId !== 'string'
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
              (sourceControlServer) =>
                sourceControlServer.id !== sourceControlServerId
            ),
          ],
        }))
        ?.filter((sc) => sc.servers.length > 0) || []),
    ],
  };
};

export const getFormDataWithNewSourceControlServerAdded = (
  formData: ApplicationForm
): ApplicationForm => {
  const { sourceControls = [], activeSourceControl = {} as SourceControl } =
    formData || {};
  if (!areActiveSourceControlsFieldsValid(formData)) return formData;
  const existingSourceControlIndex = getExistingSourceControlIndex(
    activeSourceControl.id,
    formData
  );

  return existingSourceControlIndex !== -1
    ? {
        ...formData,
        activeSourceControl: {
          id: '',
          title: '',
          servers: [],
        },
        sourceControls: [
          ...sourceControls.map((sourceControl, index) => {
            return index === existingSourceControlIndex
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
  formData: ApplicationForm
): ApplicationFormOutput => {
  if (!formData || typeof formData !== 'object') return null;
  const data = areActiveSourceControlFieldsEmpty(formData)
    ? formData
    : getFormDataWithNewSourceControlServerAdded(formData);
  const { applicationName, createAnother, sourceControls, ticketSystem } =
    data || {};

  return applicationName &&
    (createAnother === true || createAnother === false) &&
    sourceControls &&
    ticketSystem
    ? {
        applicationName,
        createAnother,
        sourceControls,
        ticketSystem,
      }
    : null;
};
