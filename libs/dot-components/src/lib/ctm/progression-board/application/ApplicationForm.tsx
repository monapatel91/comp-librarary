import React, {
  ChangeEvent,
  FormEvent,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { Divider } from '@material-ui/core';
import { CommonProps } from '../../../components/CommonProps';
import { useStylesWithRootClass } from '../../../components/useStylesWithRootClass';
import { rootClassName, StyledApplicationForm } from './ApplicationForm.styles';
import {
  DotAutoComplete,
  DotButton,
  DotCheckbox,
  DotForm,
  DotFormGroup,
  DotIcon,
  DotIconButton,
  DotInputText,
} from '../../../components';
import {
  ApplicationFormOutput,
  ApplicationFormType,
  AutoCompleteControl,
  SCServer,
  SourceControl,
  SourceControlAPI,
  TicketSystem,
  TicketSystemsAPI,
} from '../ProgressionBoardInterfaces';
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
} from '../progression/applicationFormHelper';
import { PayloadUrlTextInput } from './PayloadUrlTextInput';
import { ScServerList } from './SCServerList';
import { getSCServerListItems } from '../progression/applicationHelper';
import { PayloadUrlDialog } from './PayloadUrlDialog';

export interface ApplicationFormProps extends CommonProps {
  basePayloadUrl: string;
  onFormCancel: () => void;
  onFormSubmit: (applicationFormData: ApplicationFormOutput) => void;
  sourceControls: Array<SourceControlAPI>;
  ticketSystems: Array<TicketSystemsAPI>;
}

const INITIAL_FORM_DATA: ApplicationFormType = {
  activeSourceControl: {} as SourceControl,
  applicationName: '',
  createAnother: false,
  sourceControls: [],
  ticketSystem: {} as TicketSystem,
};

export const ApplicationForm = ({
  basePayloadUrl,
  className,
  'data-testid': dataTestId,
  onFormCancel,
  onFormSubmit,
  sourceControls,
  ticketSystems,
}: ApplicationFormProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const [formData, setFormData] = useState<ApplicationFormType>(
    INITIAL_FORM_DATA
  );
  const [isFormValid, setIsFormValid] = useState<boolean>();
  const [
    isPayloadUrlDialogOpened,
    setIsPayloadUrlDialogOpened,
  ] = useState<boolean>(false);
  const [SCServers, setSCServers] = useState<Array<SCServer>>([]);
  const [ticketSystemServers, setTicketSystemServers] = useState<
    Array<AutoCompleteControl>
  >([]);

  useEffect(() => {
    setIsFormValid(checkIfFormDataValid(formData));
  }, [formData]);

  const checkIfFormDataValid = (data: ApplicationFormType): boolean =>
    isApplicationNameValid(data) &&
    isSCDataValidForSubmission(data) &&
    isSCArrayValid(data) &&
    isTicketSystemValid(data) &&
    isTicketSystemServerValid(data) &&
    isCreateAnotherValid(data);

  const isAddMoreButtonDisabled = (data: ApplicationFormType): boolean =>
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

  const onTicketSystemChange = (
    _: ChangeEvent<HTMLInputElement>,
    value: AutoCompleteControl
  ): void => {
    const currentTicketSystem = getTicketSystemById(value?.id, ticketSystems);
    const data = getFormDataWithTicketSystemSet(currentTicketSystem, formData);
    setFormData(data);
    setTicketSystemServers(currentTicketSystem?.servers || []);
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
    const servers = sourceControl?.servers;
    setFormData(getFormDataWithSCSet(sourceControl, formData));
    setSCServers(servers ? getAllNonSelectedSCServers(servers, formData) : []);
  };

  const onSCServerChange = (
    _: ChangeEvent<HTMLInputElement>,
    value: AutoCompleteControl
  ): void => {
    const currentSCServer = getSCServerById(value?.id, SCServers);
    setFormData(getFormDataWithSCServerSet(currentSCServer, formData));
  };

  const onSourceControlDelete = (serverId: string): void =>
    setFormData(getFormDataWithSCServerRemoved(serverId, formData));

  const onCreateAnotherChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setFormData({
      ...formData,
      createAnother: e.target.checked,
    });

  const onAddMoreButtonClick = (): void => {
    setFormData(getFormDataWithNewSCServerAdded(formData));
    setSCServers([]);
  };

  const onActivePayloadDialogOpen = (): void =>
    setIsPayloadUrlDialogOpened(true);

  const onActivePayloadDialogClose = (): void =>
    setIsPayloadUrlDialogOpened(false);

  const clearForm = (): void => {
    setFormData(INITIAL_FORM_DATA);
    setSCServers([]);
    setTicketSystemServers([]);
  };

  const getPayloadUrl = (serverName: string): string => {
    const { applicationName: appName } = formData || {};
    return serverName && appName
      ? getFullPayloadUrl(appName, basePayloadUrl, serverName)
      : '';
  };

  const { applicationName, activeSourceControl, ticketSystem } = formData || {};
  const { servers: activeSCServers = [] } = activeSourceControl || {};
  const activeSCServer = activeSCServers.length ? activeSCServers[0] : null;
  const tsServer = ticketSystem.servers?.[0] || null;
  const payloadUrl = getPayloadUrl(activeSCServer?.name);

  const renderSelectedSourceControls = (): ReactNode => {
    const listItems = getSCServerListItems(formData.sourceControls);
    if (!listItems.length) return null;
    return (
      <div
        className="selected-source-controls"
        data-testid={`${dataTestId}-selected-sc`}
      >
        <ScServerList
          data-testid={dataTestId}
          applicationName={applicationName}
          basePayloadUrl={basePayloadUrl}
          onDelete={onSourceControlDelete}
          listItems={listItems}
        />
      </div>
    );
  };

  return (
    <StyledApplicationForm className={rootClasses} data-testid={dataTestId}>
      <DotForm onSubmit={onApplicationFormSubmit}>
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
        <div className="active-payload-url-line">
          <PayloadUrlTextInput
            data-testid={dataTestId}
            inputId="activePayloadUrl"
            payloadUrl={payloadUrl}
          />
          <DotIconButton
            className="payload-url-help-btn"
            data-testid="payload-url-help-btn"
            disabled={payloadUrl === ''}
            iconId="webhook"
            onClick={onActivePayloadDialogOpen}
            titleTooltip="View more info about Payload URL"
            size="small"
          />
        </div>
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
      </DotForm>
      {isPayloadUrlDialogOpened && (
        <PayloadUrlDialog
          data-testid="active-payload-url-dialog"
          onClose={onActivePayloadDialogClose}
          serverId={activeSCServer.id}
          payloadUrl={getPayloadUrl(activeSCServer.name)}
        />
      )}
    </StyledApplicationForm>
  );
};
