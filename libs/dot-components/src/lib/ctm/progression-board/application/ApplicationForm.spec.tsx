import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, RenderResult, screen, within } from '../../../testing-utils';
import { ApplicationForm, ApplicationFormProps } from './ApplicationForm';
import {
  AutoCompleteControl,
  SourceControl,
  TicketSystem,
} from '../ProgressionBoardInterfaces';
import { sampleAppAPITestData } from '../sample-data/sampleApplicationData';

describe('ApplicationForm', () => {
  const dataTestId = 'test-app-form';

  const onFormCancel = jest.fn();

  const onFormSubmit = jest.fn();

  const sourceControls = sampleAppAPITestData.sourceControls;

  const ticketSystems = sampleAppAPITestData.ticketSystems;

  const getSCServerByTestId = (): HTMLElement =>
    screen.getByTestId(`${dataTestId}-sc-server`);

  const getSourceControlByTestId = (dataTestId: string): HTMLElement =>
    screen.getByTestId(`${dataTestId}-source-control`);

  const getTicketSystemByTestId = (dataTestId: string): HTMLElement =>
    screen.getByTestId(`${dataTestId}-ticket-system`);

  const getSourceControlTextbox = (): HTMLElement =>
    screen.getByRole('textbox', { name: /Source control/i });

  const getPayloadUrlTextbox = (): HTMLElement =>
    screen.getByRole('textbox', { name: /Payload URL/i });

  const getPayloadUrlCopyButton = (): HTMLElement => {
    return screen.getByTestId(`${dataTestId}-copy-btn`);
  };

  const getActivePayloadUrlHelpBtn = (): HTMLElement =>
    screen.getByTestId('payload-url-help-btn');

  const getActivePayloadUrlDialog = (): HTMLElement =>
    screen.getByTestId('active-payload-url-dialog');

  const getTicketSystemTextbox = (): HTMLElement =>
    screen.getByRole('textbox', { name: /Ticketing system/i });

  const getAddMoreButton = (): HTMLElement =>
    screen.getByRole('button', { name: /Add more/i });

  const getSaveButton = (): HTMLElement =>
    screen.getByRole('button', { name: /Save/i });

  const getCancelButton = (): HTMLElement =>
    screen.getByRole('button', { name: /Cancel/i });

  const getSCServerTextbox = (): HTMLElement => {
    const scServerElem = getSCServerByTestId();
    return within(scServerElem).getByRole('textbox', {
      name: /Server name/i,
    });
  };

  const getApplicationNameTextbox = (): HTMLElement =>
    screen.getByRole('textbox', {
      name: /Application name/i,
    });

  const getCreateAnotherCheckbox = (): HTMLElement =>
    screen.getByRole('checkbox', {
      name: /Create another/i,
    });

  const getTicketSystemServerById = (): HTMLElement =>
    screen.getByTestId(`${dataTestId}-ts-server`);

  const getTicketSystemServerTextbox = (): HTMLElement => {
    const ticketSystemElem = getTicketSystemServerById();
    return within(ticketSystemElem).getByRole('textbox', {
      name: /Server name/i,
    });
  };

  const getAllScServerTitles = (): Array<string> =>
    sourceControls
      .flatMap((sourceControl: SourceControl) => sourceControl.servers)
      .map((server: AutoCompleteControl) => server.title);

  const getAllTicketSystemServerTitles = (): Array<string> =>
    ticketSystems
      .flatMap((ticketSystem: TicketSystem) => ticketSystem.servers)
      .map((server: AutoCompleteControl) => server.title);

  const clickOnAddMoreButton = (): void => {
    const addMoreBtn = getAddMoreButton();
    userEvent.click(addMoreBtn);
  };

  const selectSourceControl = (title: string): void => {
    const scElem = getSourceControlTextbox();
    userEvent.click(scElem);
    userEvent.click(screen.getByText(title));
  };

  const selectTicketSystem = (title: string): void => {
    const ticketSystemElem = getTicketSystemTextbox();
    userEvent.click(ticketSystemElem);
    userEvent.click(screen.getByText(title));
  };

  const selectSCServer = (title: string): void => {
    const scServerElem = getSCServerTextbox();
    userEvent.click(scServerElem);
    userEvent.click(screen.getByText(title));
  };

  const selectTicketSystemServer = (title: string): void => {
    const tsServerElem = getTicketSystemServerTextbox();
    userEvent.click(tsServerElem);
    userEvent.click(screen.getByText(title));
  };

  const selectTitleFromAutocomplete = (
    autocompleteElem: HTMLElement,
    sourceControlTitle: string
  ): void => {
    userEvent.click(autocompleteElem);
    userEvent.click(screen.getByText(sourceControlTitle));
  };

  const clearSourceControl = (): void => {
    const sourceControlElem = getSourceControlByTestId(dataTestId);
    const clearBtn = within(sourceControlElem).getByTitle('Clear');
    userEvent.hover(sourceControlElem);
    userEvent.click(clearBtn);
  };

  const clearTicketSystem = (): void => {
    const ticketSystemElem = getTicketSystemByTestId(dataTestId);
    const clearBtn = within(ticketSystemElem).getByTitle('Clear');
    userEvent.hover(ticketSystemElem);
    userEvent.click(clearBtn);
  };

  const clickOnDeleteServerIcon = () => {
    const selectedSCElem = screen.getByTestId(`${dataTestId}-selected-sc`);
    const deleteIcon = within(selectedSCElem).getByTestId(
      `${dataTestId}-delete-btn-1`
    );
    userEvent.click(deleteIcon);
  };

  const setApplicationName = (applicationName: string): void => {
    const appNameTextbox = getApplicationNameTextbox();
    userEvent.type(appNameTextbox, applicationName);
  };

  const clearApplicationName = (): void => {
    const appNameTextbox = getApplicationNameTextbox();
    userEvent.clear(appNameTextbox);
  };

  const cancelApplicationDrawer = (): void =>
    userEvent.click(getCancelButton());

  const saveApplicationDrawer = (): void => userEvent.click(getSaveButton());

  const clickCreateAnotherCheckbox = (): void =>
    userEvent.click(getCreateAnotherCheckbox());

  const addSourceControlToSelectedList = (
    scTitle: string,
    scServerTitle: string
  ): void => {
    selectSourceControl(scTitle);
    selectSCServer(scServerTitle);
    clickOnAddMoreButton();
  };

  const getSCPayloadViewUrlButton = (serverId: string): HTMLElement => {
    return screen.getByTestId(`${dataTestId}-icon-btn-${serverId}`);
  };

  const checkIfSCServerTitlesPresent = (
    titles: Array<string>,
    shouldBePresent = true
  ): void => {
    const scServerTextbox = getSCServerTextbox();
    userEvent.click(scServerTextbox);
    titles.forEach((title) =>
      shouldBePresent
        ? expect(screen.getByText(title)).toBeVisible()
        : expect(screen.queryByText(title)).not.toBeInTheDocument()
    );
  };

  const checkIfTicketSystemServerTitlesPresent = (
    titles: Array<string>,
    shouldBePresent = true
  ): void => {
    const tsServerTextbox = getTicketSystemServerTextbox();
    userEvent.click(tsServerTextbox);
    titles.forEach((title) =>
      shouldBePresent
        ? expect(screen.getByText(title)).toBeVisible()
        : expect(screen.queryByText(title)).not.toBeInTheDocument()
    );
  };

  const expectSelectedServerToBeVisible = (
    serverId: string,
    shouldBeVisible = true
  ): void => {
    const selectedSCElem = screen.queryByTestId(
      `${dataTestId}-drawer-item-${serverId}`
    );
    shouldBeVisible
      ? expect(selectedSCElem).toBeVisible()
      : expect(selectedSCElem).not.toBeInTheDocument();
  };

  const componentProps: ApplicationFormProps = {
    applicationNames: ['appName1', 'appName2'],
    basePayloadUrl: 'www.test.ai/',
    'data-testid': dataTestId,
    onFormCancel,
    onFormSubmit,
    sourceControls,
    ticketSystems,
  };

  const renderComponent = (
    props: ApplicationFormProps = null
  ): RenderResult => {
    const renderProps = props ? props : componentProps;
    return render(<ApplicationForm {...renderProps} />);
  };

  it('should have unchanged API', () => {
    const props = {
      applicationNames: ['appName1', 'appName2'],
      basePayloadUrl: 'www.test.ai/',
      'data-testid': dataTestId,
      onFormCancel,
      onFormSubmit,
      sourceControls,
      ticketSystems,
    };
    expect(componentProps).toEqual(props);
  });

  beforeEach(() => {
    renderComponent();
  });

  it('should render successfully', () => {
    const { baseElement } = renderComponent();
    expect(baseElement).toBeTruthy();
  });

  it("should render 'Application name' textbox", () => {
    const textBoxElem = getApplicationNameTextbox();
    expect(textBoxElem).toBeVisible();
    expect(textBoxElem).toHaveValue('');
  });

  it("should render 'Application name' textbox with error message if duplicate name is entered", () => {
    const errorMessage = 'Application already exists';
    const errorIconId = 'application-name-error-icon';
    const textBoxElem = getApplicationNameTextbox();
    userEvent.type(textBoxElem, 'appName1');
    expect(screen.getByText(errorMessage)).toBeVisible();
    expect(screen.getByTestId(errorIconId)).toBeVisible();
    userEvent.type(textBoxElem, 'Unique Name');
    expect(screen.queryByText(errorMessage)).not.toBeInTheDocument();
    expect(screen.queryByTestId(errorIconId)).not.toBeInTheDocument();
  });

  it("should render 'Source control' textbox", () => {
    const sourceControlTextbox = getSourceControlTextbox();
    expect(sourceControlTextbox).toBeVisible();
    expect(sourceControlTextbox).toBeEnabled();
    expect(sourceControlTextbox).toHaveValue('');
  });

  it("should render source control 'Server name' textbox", () => {
    const sourceControlElem = getSCServerByTestId();
    const serverNameTextbox = getSCServerTextbox();
    const serverNameLabel = within(sourceControlElem).getByText(
      'Choose server'
    );
    expect(serverNameTextbox).toBeVisible();
    expect(serverNameLabel).toBeVisible();
  });

  describe('Payload URL', () => {
    const selectSCAndServer = (): void => {
      const selectedSourceControl = sourceControls[0];
      const selectedSCServer = selectedSourceControl.servers[0];
      selectSourceControl(selectedSourceControl.title);
      selectSCServer(selectedSCServer.title);
    };

    it("should render read-only 'Payload URL' textbox with disabled copy button", () => {
      const payloadUrlTextbox = getPayloadUrlTextbox();
      const payloadUrlButton = getPayloadUrlCopyButton();
      expect(payloadUrlTextbox).toBeVisible();
      expect(payloadUrlTextbox).toHaveAttribute('readonly');
      expect(payloadUrlButton).toBeVisible();
      expect(payloadUrlButton).toBeDisabled();
    });

    it('should display empty payload URL when application name is NOT set but source control and server name are selected', () => {
      const payloadUrlTextbox = getPayloadUrlTextbox();
      const payloadUrlButton = getPayloadUrlCopyButton();
      selectSCAndServer();
      expect(payloadUrlTextbox).toHaveValue('');
      expect(payloadUrlButton).toBeVisible();
      expect(payloadUrlButton).toBeDisabled();
    });

    it('should display payload URL with copy button when application, source control and server name are selected', () => {
      const { basePayloadUrl } = componentProps;
      const serverName = sourceControls[0].servers[0].name;
      const payloadUrlTextbox = getPayloadUrlTextbox();
      const payloadUrlButton = getPayloadUrlCopyButton();
      setApplicationName('My app 01');
      selectSCAndServer();
      expect(payloadUrlTextbox).toHaveValue(
        `${basePayloadUrl}My%20app%2001-source-${serverName}`
      );
      expect(payloadUrlButton).toBeVisible();
      expect(payloadUrlButton).toBeEnabled();
    });

    it('should display disabled active payload URL help button when no payload URL', () => {
      const btn = getActivePayloadUrlHelpBtn();
      expect(btn).toBeVisible();
      expect(btn).toBeDisabled();
    });

    it('should display enabled active payload URL help button when payload URL exists', () => {
      const btn = getActivePayloadUrlHelpBtn();
      setApplicationName('test123');
      selectSCAndServer();
      expect(btn).toBeVisible();
      expect(btn).toBeEnabled();
      expect(btn).toHaveAttribute('title', 'View more info about Payload URL');
    });

    it('should display confirmation dialog when active payload URL help button is clicked and closed when OK button is clicked', () => {
      const btn = getActivePayloadUrlHelpBtn();
      setApplicationName('test123');
      selectSCAndServer();
      userEvent.click(btn);
      const dialog = getActivePayloadUrlDialog();
      expect(dialog).toBeVisible();
      const okButton = within(dialog).getByRole('button', { name: /OK/i });
      userEvent.click(okButton);
      expect(dialog).not.toBeInTheDocument();
    });

    it('should display enabled view payload URl button in the selected SC list when application name is set', () => {
      const selectedSourceControl = sourceControls[0];
      const selectedServer = selectedSourceControl.servers[0];
      setApplicationName('test123');
      addSourceControlToSelectedList(
        selectedSourceControl.title,
        selectedServer.title
      );
      const viewBtn = getSCPayloadViewUrlButton(selectedServer.id);
      expect(viewBtn).toBeVisible();
      expect(viewBtn).toBeEnabled();
    });

    it('should display disabled payload copy button in the selected SC list when application name is NOT set', () => {
      const selectedSourceControl = sourceControls[0];
      const selectedServer = selectedSourceControl.servers[0];
      addSourceControlToSelectedList(
        selectedSourceControl.title,
        selectedServer.title
      );
      clearApplicationName();
      const copyBtn = getSCPayloadViewUrlButton(selectedServer.id);
      expect(copyBtn).toBeVisible();
      expect(copyBtn).toBeDisabled();
    });
  });

  it("should render disabled 'Add more' button", () => {
    const addMoreBtn = getAddMoreButton();
    expect(addMoreBtn).toBeVisible();
    expect(addMoreBtn).toBeDisabled();
  });

  it("should render 'Ticketing system' textbox", () => {
    const ticketSystemTextbox = getTicketSystemTextbox();
    expect(ticketSystemTextbox).toBeVisible();
    expect(ticketSystemTextbox).toBeEnabled();
    expect(ticketSystemTextbox).toHaveValue('');
  });

  it("should render ticket system 'Server name' textbox", () => {
    const ticketSystemElem = getTicketSystemServerById();
    const serverNameTextbox = getTicketSystemTextbox();
    const serverNameLabel = within(ticketSystemElem).getByText('Choose server');
    expect(serverNameTextbox).toBeVisible();
    expect(serverNameLabel).toBeVisible();
  });

  it("should render 'Create another' checkbox", () => {
    const createAnotherCheckbox = getCreateAnotherCheckbox();
    expect(createAnotherCheckbox).toBeInTheDocument();
    expect(createAnotherCheckbox).not.toBeChecked();
  });

  it("should render enabled 'Cancel' button", () => {
    const cancelBtn = getCancelButton();
    expect(cancelBtn).toBeVisible();
    expect(cancelBtn).toBeEnabled();
  });

  it("should render disabled 'Save' button", () => {
    const saveBtn = getSaveButton();
    expect(saveBtn).toBeVisible();
    expect(saveBtn).toBeDisabled();
  });

  it('should display correct source control values', () => {
    const sourceControlTextbox = getSourceControlTextbox();
    userEvent.click(sourceControlTextbox);
    expect(
      within(screen.getByRole('presentation')).getByText('SC Test 1')
    ).toBeVisible();
    expect(
      within(screen.getByRole('presentation')).getByText('SC Test 2')
    ).toBeVisible();
  });

  it('should not display any value in SC Server name autocomplete popup if no source control is selected', () => {
    checkIfSCServerTitlesPresent(getAllScServerTitles(), false);
  });

  it('should set value to input field when selecting item from source control autocomplete popup element', () => {
    const sourceControlTextbox = getSourceControlTextbox();
    const sourceControlTitle = sourceControls[0].title;
    selectTitleFromAutocomplete(sourceControlTextbox, sourceControlTitle);
    expect(sourceControlTextbox).toHaveValue(sourceControlTitle);
  });

  it('should display relevant server names when source control is selected', () => {
    const sourceControlTextbox = getSourceControlTextbox();
    const selectedSourceControl = sourceControls[1];
    selectTitleFromAutocomplete(
      sourceControlTextbox,
      selectedSourceControl.title
    );
    const scServerTextbox = getSCServerTextbox();
    userEvent.click(scServerTextbox);
    selectedSourceControl.servers.forEach((server) =>
      expect(screen.getByText(server.title)).toBeVisible()
    );
  });

  it('should clear server name selection when source control autocomplete is cleared', () => {
    const sourceControlTextbox = getSourceControlTextbox();
    const sourceControlTitle = sourceControls[0].title;
    selectTitleFromAutocomplete(sourceControlTextbox, sourceControlTitle);
    clearSourceControl();
    checkIfSCServerTitlesPresent(getAllScServerTitles(), false);
  });

  it("should display 'Add more' button as disabled until both source control and server name get selected", () => {
    const addMoreButton = getAddMoreButton();
    const selectedSourceControl = sourceControls[1];
    clearSourceControl();
    expect(addMoreButton).toBeDisabled();
    selectSourceControl(selectedSourceControl.title);
    expect(addMoreButton).toBeDisabled();
    selectSCServer(selectedSourceControl.servers[0].title);
    expect(addMoreButton).toBeEnabled();
  });

  it("should add source control server on the list when 'Add more' button is clicked", () => {
    const selectedSourceControl = sourceControls[0];
    const selectedServerId = selectedSourceControl.servers[0].id;
    const selectedServerTitle = selectedSourceControl.servers[0].title;
    clearSourceControl();
    addSourceControlToSelectedList(
      selectedSourceControl.title,
      selectedServerTitle
    );
    expectSelectedServerToBeVisible(selectedServerId, true);
  });

  it('should NOT display server name in autocomplete popup if it was already selected', () => {
    const selectedSourceControl = sourceControls[0];
    const selectedServerTitle = selectedSourceControl.servers[0].title;
    clearSourceControl();
    addSourceControlToSelectedList(
      selectedSourceControl.title,
      selectedServerTitle
    );
    selectSourceControl(selectedSourceControl.title);
    checkIfSCServerTitlesPresent([selectedServerTitle], true);
  });

  it('should remove selected server when delete icon is clicked and should display deleted value in server autocomplete popup', () => {
    const selectedSourceControl = sourceControls[0];
    const selectedServerTitle = selectedSourceControl.servers[0].title;
    clearSourceControl();
    addSourceControlToSelectedList(
      selectedSourceControl.title,
      selectedServerTitle
    );
    clickOnDeleteServerIcon();
    clearSourceControl();
    selectSourceControl(selectedSourceControl.title);
    checkIfSCServerTitlesPresent(
      selectedSourceControl.servers.map((server) => server.title),
      true
    );
  });

  it('should display correct ticket system values when clicking inside of Ticketing system autocomplete field', () => {
    const ticketSystemTextbox = getTicketSystemTextbox();
    userEvent.click(ticketSystemTextbox);
    ticketSystems.forEach((ticketSystem: TicketSystem) =>
      expect(
        within(screen.getByRole('presentation')).getByText(ticketSystem.title)
      ).toBeVisible()
    );
  });

  it('should set value to ticket system input field when selecting item from autocomplete popup element', () => {
    const selectedTicketSystemTitle = ticketSystems[0].title;
    const ticketSystemTextbox = getTicketSystemTextbox();
    selectTicketSystem(selectedTicketSystemTitle);
    expect(ticketSystemTextbox).toHaveValue(selectedTicketSystemTitle);
  });

  it('should not display any value in ticket system server name autocomplete popup if no ticket system is selected', () => {
    checkIfTicketSystemServerTitlesPresent(
      getAllTicketSystemServerTitles(),
      false
    );
  });

  it('should display relevant server names when ticket system is selected', () => {
    const ticketSystemTextbox = getTicketSystemTextbox();
    const selectedTicketSystem = ticketSystems[1];
    selectTitleFromAutocomplete(
      ticketSystemTextbox,
      selectedTicketSystem.title
    );
    const tsServerTextbox = getTicketSystemServerTextbox();
    userEvent.click(tsServerTextbox);
    selectedTicketSystem.servers.forEach((server: AutoCompleteControl) =>
      expect(screen.getByText(server.title)).toBeVisible()
    );
  });

  it('should clear server name selection when ticket system autocomplete is cleared', () => {
    const ticketSystemTextbox = getTicketSystemTextbox();
    const ticketSystemTitle = ticketSystems[0].title;
    selectTitleFromAutocomplete(ticketSystemTextbox, ticketSystemTitle);
    clearTicketSystem();
    checkIfTicketSystemServerTitlesPresent(
      getAllTicketSystemServerTitles(),
      false
    );
  });

  it("should display 'Save' button as disabled until all data is set", () => {
    const selectedSourceControl = sourceControls[0];
    const selectedTicketSystem = ticketSystems[0];
    const saveBtn = getSaveButton();
    setApplicationName('App Test');
    expect(saveBtn).toBeDisabled();
    selectSourceControl(selectedSourceControl.title);
    expect(saveBtn).toBeDisabled();
    selectSCServer(selectedSourceControl.servers[0].title);
    expect(saveBtn).toBeDisabled();
    selectTicketSystem(selectedTicketSystem.title);
    expect(saveBtn).toBeDisabled();
    selectTicketSystemServer(selectedTicketSystem.servers[0].title);
    expect(saveBtn).toBeEnabled();
  });

  it("should call correct event handler when 'Cancel' button is clicked", () => {
    setApplicationName('My test application');
    cancelApplicationDrawer();
    expect(onFormCancel).toHaveBeenCalledTimes(1);
  });

  it("should reset form fields on 'Cancel' button click", () => {
    setApplicationName('My test application');
    cancelApplicationDrawer();
    expect(getApplicationNameTextbox()).toHaveValue('');
  });

  describe('form submission', () => {
    const selectedSourceControl = sourceControls[0];
    const selectedTicketSystem = ticketSystems[0];
    const submitFormWithSampleData = (createAnother = false) => {
      setApplicationName('My test application');
      selectSourceControl(selectedSourceControl.title);
      selectSCServer(selectedSourceControl.servers[0].title);
      selectTicketSystem(selectedTicketSystem.title);
      selectTicketSystemServer(selectedTicketSystem.servers[0].title);
      createAnother && clickCreateAnotherCheckbox();
      saveApplicationDrawer();
    };

    it('should reset form fields on form submission', () => {
      submitFormWithSampleData();
      expect(onFormSubmit).toHaveBeenCalledTimes(1);
      expect(getApplicationNameTextbox()).toHaveValue('');
      expect(getSourceControlTextbox()).toHaveValue('');
      expect(getSCServerTextbox()).toHaveValue('');
      checkIfSCServerTitlesPresent(getAllScServerTitles(), false);
      expect(getPayloadUrlTextbox()).toHaveValue('');
      expect(getTicketSystemTextbox()).toHaveValue('');
      expect(getTicketSystemServerTextbox()).toHaveValue('');
      checkIfTicketSystemServerTitlesPresent(
        getAllTicketSystemServerTitles(),
        false
      );
      expect(getCreateAnotherCheckbox()).not.toBeChecked();
    });
  });
});
