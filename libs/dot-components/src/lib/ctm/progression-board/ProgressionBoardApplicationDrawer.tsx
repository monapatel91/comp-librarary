import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Divider } from '@material-ui/core';
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
  SourceControl,
  TicketSystem,
} from './ProgressionBoardInterfaces';
import {
  areActiveSourceControlsFieldsValid,
  getAllNonSelectedSourceControlServers,
  getApplicationFormOutputData,
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
  isApplicationNameValid,
  isCreateAnotherValid,
  isSourceControlDataValidForSubmission,
  isSourceControlsArrayValid,
  isTicketSystemServerValid,
  isTicketSystemValid,
} from './application/applicationFormHelper';

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
  const [sourceControlServers, setSourceControlServers] = useState<
    Array<AutoCompleteControl>
  >([]);
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
    isSourceControlDataValidForSubmission(data) &&
    isSourceControlsArrayValid(data) &&
    isTicketSystemValid(data) &&
    isTicketSystemServerValid(data) &&
    isCreateAnotherValid(data);

  const isAddMoreButtonDisabled = (data: ApplicationForm): boolean =>
    !areActiveSourceControlsFieldsValid(data);

  const onApplicationFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clearForm();
    onFormSubmit(getApplicationFormOutputData(formData));
  };

  const onCancelButtonClick = (): void => {
    clearForm();
    onFormCancel();
  };

  const clearForm = (): void => setFormData(INITIAL_FORM_DATA);

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
    const sourceControl = getSourceControlById(value?.id, sourceControls);
    setFormData(getFormDataWithSourceControlSet(sourceControl, formData));
    const servers = sourceControl?.servers;
    setSourceControlServers(
      servers ? getAllNonSelectedSourceControlServers(servers, formData) : []
    );
  };

  const onSourceControlServerChange = (
    _: ChangeEvent<HTMLInputElement>,
    value: AutoCompleteControl
  ): void => {
    const sourceControlServer = getSourceControlServerById(
      value?.id,
      sourceControlServers
    );
    setFormData(
      getFormDataWithSourceControlServerSet(sourceControlServer, formData)
    );
  };

  const onCreateAnotherChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setFormData({
      ...formData,
      createAnother: e.target.checked,
    });

  const onSourceControlDelete = (serverId: string) => (): void =>
    setFormData(getFormDataWithSourceControlServerRemoved(serverId, formData));

  const onAddMoreButtonClick = (): void => {
    setFormData(getFormDataWithNewSourceControlServerAdded(formData));
    setSourceControlServers([]);
  };

  const renderSelectedSourceControls = (): JSX.Element => {
    const servers: Array<AutoCompleteControl> = [];
    formData.sourceControls.forEach((sourceControl: SourceControl) =>
      servers.push(...sourceControl.servers)
    );

    if (!servers.length) return null;

    return (
      <div
        className="selected-source-controls"
        data-testid={`${dataTestId}-selected-sc`}
      >
        {servers.map((server) => (
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

  const renderDrawerContent = (): JSX.Element => {
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
              value={formData.applicationName}
            />
            <DotAutoComplete
              className="source-control"
              data-testid={`${dataTestId}-source-control`}
              inputId="sourceControl"
              label="Source Control"
              multiple={false}
              onChange={onSourceControlChange}
              options={sourceControls}
              value={formData.activeSourceControl}
            />
            <DotAutoComplete
              className="source-control-server"
              data-testid={`${dataTestId}-sc-server`}
              helperText="Choose server"
              inputId="sourceControlServer"
              label="Server name"
              multiple={false}
              onChange={onSourceControlServerChange}
              options={sourceControlServers}
              value={formData.activeSourceControl?.servers?.[0] || null}
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
              value={formData.ticketSystem?.servers?.[0] || null}
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
