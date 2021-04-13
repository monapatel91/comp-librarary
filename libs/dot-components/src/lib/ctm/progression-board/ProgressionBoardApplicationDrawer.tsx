import React, {
  ChangeEvent,
  FormEvent,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { Divider, Tooltip } from '@material-ui/core';
import {
  DotAutoComplete,
  DotAvatar,
  DotButton,
  DotCheckbox,
  DotFormGroup,
  DotIcon,
  DotIconButton,
  DotInputText,
  DotTypography,
  DrawerPaperProps,
} from '../../components';
import { CommonProps } from '../../components/CommonProps';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import {
  rootClassName,
  StyledProgressionBoardApplicationDrawer,
} from './ProgressionBoardApplicationDrawer.styles';
import { ProgressionBoardDrawer } from './ProgressionBoardDrawer';
import {
  ApplicationAPI,
  ApplicationForm,
  ApplicationFormOutput,
  AutoCompleteControl,
  SCServer,
  SourceControl,
  TicketSystem,
} from './ProgressionBoardInterfaces';
import {
  areActiveSCFieldsValid,
  getAllNonSelectedSCServers,
  getApplicationFormOutputData,
  getFormDataWithNewSCServerAdded,
  getFormDataWithSCServerRemoved,
  getFormDataWithSCServerSet,
  getFormDataWithSCSet,
  getFormDataWithTicketSystemServerSet,
  getFormDataWithTicketSystemSet,
  getFullPayloadUrl,
  getSCById,
  getSCServerById,
  getTicketSystemById,
  getTicketSystemServerById,
  isApplicationNameValid,
  isCreateAnotherValid,
  isSCArrayValid,
  isSCDataValidForSubmission,
  isTicketSystemServerValid,
  isTicketSystemValid,
} from './application/applicationFormHelper';
import { copyTextToClipboard } from './helper';
import { StyledTooltipContent } from './ProgressionBoardDrawer.styles';

export interface PBAppDrawerProps extends CommonProps {
  /* Progression's application data coming from the API */
  apiData: ApplicationAPI;
  /** Props applied to the drawer's Paper element. */
  drawerPaperProps?: DrawerPaperProps;
  /* Flag which indicates whether drawer is opened */
  isDrawerOpened: boolean;
  /* Callback function which executes upon drawer being closed */
  onDrawerClose: () => void;
  /* Callback function which will be called when form's 'Cancel' button is clicked */
  onFormCancel: () => void;
  /* Callback function which executes upon new application form submission */
  onFormSubmit: (applicationFormData: ApplicationFormOutput) => void;
  /* Width of the drawer in pixels. If not set, default value is assumed. */
  width?: number;
}

export const DotProgressionBoardApplicationDrawer = ({
  apiData,
  className,
  'data-testid': dataTestId,
  drawerPaperProps,
  isDrawerOpened,
  onDrawerClose,
  onFormCancel,
  onFormSubmit,
  width,
}: PBAppDrawerProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const INITIAL_FORM_DATA: ApplicationForm = {
    activeSourceControl: {} as SourceControl,
    applicationName: '',
    createAnother: false,
    sourceControls: [],
    ticketSystem: {} as TicketSystem,
  };
  const sourceControls = apiData?.sourceControls;
  const ticketSystems = apiData?.ticketSystems;
  const [formData, setFormData] = useState<ApplicationForm>(INITIAL_FORM_DATA);
  const [isFormValid, setIsFormValid] = useState<boolean>();
  const [
    isInputCopyTooltipVisible,
    setIsInputCopyTooltipVisible,
  ] = useState<boolean>(false);
  const [visibleSCTooltips, setVisibleSCTooltips] = useState<Array<string>>([]);
  const [SCServers, setSCServers] = useState<Array<SCServer>>([]);
  const [ticketSystemServers, setTicketSystemServers] = useState<
    Array<AutoCompleteControl>
  >([]);

  useEffect(() => {
    setIsFormValid(checkIfFormDataValid(formData));
  }, [formData]);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const data = {
      ...formData,
      [name]: value,
    };
    setFormData(data);
  };

  const checkIfFormDataValid = (data: ApplicationForm): boolean =>
    isApplicationNameValid(data) &&
    isSCDataValidForSubmission(data) &&
    isSCArrayValid(data) &&
    isTicketSystemValid(data) &&
    isTicketSystemServerValid(data) &&
    isCreateAnotherValid(data);

  const isAddMoreButtonDisabled = (data: ApplicationForm): boolean =>
    !areActiveSCFieldsValid(data);

  const onApplicationFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clearForm();
    onFormSubmit(getApplicationFormOutputData(formData));
  };

  const onCancelButtonClick = (): void => {
    clearForm();
    onFormCancel();
  };

  const onTicketSystemChange = (
    _: ChangeEvent<HTMLInputElement>,
    value: AutoCompleteControl
  ): void => {
    const ticketSystem = getTicketSystemById(value?.id, ticketSystems);
    const data = getFormDataWithTicketSystemSet(ticketSystem, formData);
    setFormData(data);
    setTicketSystemServers(ticketSystem?.servers || []);
  };

  const onTicketSystemServerChange = (
    _: ChangeEvent<HTMLInputElement>,
    value: AutoCompleteControl
  ): void => {
    const ticketSystemServer = getTicketSystemServerById(
      value?.id,
      ticketSystemServers
    );
    setFormData(
      getFormDataWithTicketSystemServerSet(ticketSystemServer, formData)
    );
  };

  const onSourceControlChange = (
    _: ChangeEvent<HTMLInputElement>,
    value: AutoCompleteControl
  ): void => {
    const sourceControl = getSCById(value?.id, sourceControls);
    setFormData(getFormDataWithSCSet(sourceControl, formData));
    const servers = sourceControl?.servers;
    setSCServers(servers ? getAllNonSelectedSCServers(servers, formData) : []);
  };

  const onSCServerChange = (
    _: ChangeEvent<HTMLInputElement>,
    value: AutoCompleteControl
  ): void => {
    const currentSCServer = getSCServerById(value?.id, SCServers);
    setFormData(getFormDataWithSCServerSet(currentSCServer, formData));
  };

  const onSourceControlDelete = (serverId: string): (() => void) => (): void =>
    setFormData(getFormDataWithSCServerRemoved(serverId, formData));

  const onSourceControlPayloadCopy = (
    serverName: string
  ): (() => void) => async (): Promise<void> => {
    try {
      await copyTextToClipboard(
        getFullPayloadUrl(
          formData.applicationName,
          apiData.payloadUrl,
          serverName
        )
      );
      setVisibleSCTooltips([
        ...visibleSCTooltips,
        ...(visibleSCTooltips.indexOf(serverName) === -1 ? [serverName] : []),
      ]);
    } catch (_) {
      return;
    }
  };

  const onCopyPayloadUrlClick = (
    serverName: string
  ): (() => void) => async (): Promise<void> => {
    if (!serverName) return;
    try {
      await copyTextToClipboard(getPayloadUrl(serverName));
      setIsInputCopyTooltipVisible(true);
    } catch (_) {
      return;
    }
  };

  const onSCListTooltipClose = (serverName: string): (() => void) => () =>
    setVisibleSCTooltips(
      visibleSCTooltips.filter((name) => name !== serverName)
    );

  const onCreateAnotherChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setFormData({
      ...formData,
      createAnother: e.target.checked,
    });

  const onInputCopyTooltipClose = (): void =>
    setIsInputCopyTooltipVisible(false);

  const onAddMoreButtonClick = (): void => {
    setFormData(getFormDataWithNewSCServerAdded(formData));
    setSCServers([]);
  };

  const clearForm = (): void => {
    setFormData(INITIAL_FORM_DATA);
    setSCServers([]);
    setTicketSystemServers([]);
  };

  const getPayloadUrl = (serverName: string): string => {
    const { applicationName } = formData || {};
    return serverName && applicationName
      ? getFullPayloadUrl(applicationName, apiData.payloadUrl, serverName)
      : '';
  };

  const isSCListTooltipOpened = (serverName: string): boolean =>
    visibleSCTooltips.indexOf(serverName) !== -1;

  const renderSourceControlCopyButton = (
    serverName: string,
    isActive = false
  ): ReactNode => {
    const tooltipTestId = `${dataTestId}${
      isActive
        ? '-payload-copy-tooltip'
        : `-sc-payload-copy-tooltip-${serverName}`
    }`;
    const testId = `${dataTestId}${
      isActive ? '-payload-copy-btn' : `-sc-payload-copy-btn-${serverName}`
    }`;
    const iconId = isActive ? 'duplicate' : 'webhook';
    const onIconClick = isActive
      ? onCopyPayloadUrlClick(serverName)
      : onSourceControlPayloadCopy(serverName);
    const isDisabled = !serverName || !getPayloadUrl(serverName);
    const iconSize = isActive ? 'small' : 'medium';
    return (
      <Tooltip
        data-testid={tooltipTestId}
        leaveDelay={400}
        onClose={
          isActive ? onInputCopyTooltipClose : onSCListTooltipClose(serverName)
        }
        open={
          isActive
            ? isInputCopyTooltipVisible
            : isSCListTooltipOpened(serverName)
        }
        title={
          <StyledTooltipContent variant="body2">
            URL Copied!
          </StyledTooltipContent>
        }
      >
        <span>
          <DotIconButton
            data-testid={testId}
            disabled={isDisabled}
            iconId={iconId}
            size={iconSize}
            titleTooltip="Click to copy to clipboard"
            onClick={onIconClick}
          />
        </span>
      </Tooltip>
    );
  };

  const renderSelectedSourceControls = (): ReactNode => {
    const servers: Array<SCServer> = [];
    formData.sourceControls.forEach((sourceControl: SourceControl) =>
      servers.push(...sourceControl.servers)
    );
    if (!servers.length) return null;
    return (
      <div
        className="selected-source-controls"
        data-testid={`${dataTestId}-selected-sc`}
      >
        {servers.map((server: SCServer) => (
          <div key={server.id} className="selected-source-control">
            <DotAvatar
              alt="Source Icon"
              className="source-avatar-icon"
              data-testid={`${dataTestId}-source-avatar-icon`}
              iconId="branch"
              type="icon"
            />
            <DotTypography className="server-name" variant="body1">
              <span title={server.title}>{server.title}</span>
            </DotTypography>
            {renderSourceControlCopyButton(server.name, false)}
            <DotIconButton
              data-testid={`${dataTestId}-delete-icon`}
              iconId="delete"
              onClick={onSourceControlDelete(server.id)}
              titleTooltip="Click to delete"
            />
          </div>
        ))}
      </div>
    );
  };

  const renderDrawerContent = (): ReactNode => {
    const { applicationName, activeSourceControl, ticketSystem } =
      formData || {};
    const { servers: activeSCServers = [] } = activeSourceControl || {};
    const activeSCServer = activeSCServers.length ? activeSCServers[0] : null;
    const tsServer = ticketSystem.servers?.[0] || null;
    const payloadUrl = getPayloadUrl(activeSCServer?.name);
    return (
      <>
        <div className="drawer-header">
          <DotAvatar
            alt="Application Icon"
            className="application-icon"
            data-testid={`${dataTestId}-application-icon`}
            iconId="package"
          />
          <DotTypography className="header-title" variant="h3">
            Add application
          </DotTypography>
          <DotIconButton
            data-testid={`${dataTestId}-close-icon`}
            iconId="close"
            onClick={onDrawerClose}
            titleTooltip="Click to close"
          />
        </div>
        <div className="drawer-content">
          <form id="formNewApplication" onSubmit={onApplicationFormSubmit}>
            <DotInputText
              className="application-name"
              id="applicationName"
              label="Application name"
              onChange={onInputChange}
              name="applicationName"
              required={true}
              value={applicationName}
            />
            <DotAutoComplete
              className="source-control"
              data-testid={`${dataTestId}-source-control`}
              inputId="sourceControl"
              label="Source Control"
              multiple={false}
              onChange={onSourceControlChange}
              options={sourceControls}
              value={activeSourceControl}
            />
            <DotAutoComplete
              className="sc-server"
              data-testid={`${dataTestId}-sc-server`}
              helperText="Choose server"
              inputId="sc-server"
              label="Server name"
              multiple={false}
              onChange={onSCServerChange}
              options={SCServers}
              value={activeSCServer}
            />
            <DotInputText
              endIcon={renderSourceControlCopyButton(
                activeSCServer?.name,
                true
              )}
              id="payloadUrl"
              label="Payload URL"
              name="payloadUrl"
              readOnly={true}
              value={payloadUrl}
            />
            <DotButton
              className="add-more-btn"
              disabled={isAddMoreButtonDisabled(formData)}
              onClick={onAddMoreButtonClick}
              startIcon={<DotIcon data-testid="icon" iconId="add" />}
              type="outlined"
            >
              Add more
            </DotButton>
            {renderSelectedSourceControls()}
            <DotAutoComplete
              className="ticket-system"
              data-testid={`${dataTestId}-ticket-system`}
              inputId="ticketSystem"
              label="Ticketing System"
              multiple={false}
              onChange={onTicketSystemChange}
              options={ticketSystems}
              value={formData.ticketSystem}
            />
            <DotAutoComplete
              className="ticket-system-server"
              data-testid={`${dataTestId}-ts-server`}
              helperText="Choose server"
              inputId="ticketSystemServer"
              label="Server name"
              multiple={false}
              onChange={onTicketSystemServerChange}
              options={ticketSystemServers}
              value={tsServer}
            />
            <Divider className="content-divider" />
            <DotCheckbox
              checked={formData.createAnother}
              className="add-another-cb"
              label="Create another"
              onChange={onCreateAnotherChange}
            />
            <DotFormGroup className="form-action-group" row={true}>
              <DotButton
                className="form-cancel-btn"
                onClick={onCancelButtonClick}
                type="text"
              >
                Cancel
              </DotButton>
              <DotButton
                className="form-save-btn"
                disabled={!isFormValid}
                isSubmit={true}
              >
                Save
              </DotButton>
            </DotFormGroup>
          </form>
        </div>
      </>
    );
  };

  return (
    <StyledProgressionBoardApplicationDrawer
      className={rootClasses}
      data-testid={dataTestId}
    >
      <ProgressionBoardDrawer
        drawerPaperProps={drawerPaperProps}
        isDrawerOpened={isDrawerOpened}
        width={width}
      >
        {renderDrawerContent()}
      </ProgressionBoardDrawer>
    </StyledProgressionBoardApplicationDrawer>
  );
};
