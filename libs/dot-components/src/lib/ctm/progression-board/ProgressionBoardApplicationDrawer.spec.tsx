import React from 'react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { within } from '@testing-library/react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { DotProgressionBoardApplicationDrawer } from './ProgressionBoardApplicationDrawer';

const onDrawerClose = () => console.log('Closed');
const onFormCancel = () => console.log('Cancelled');
const onFormSubmitted = () => console.log('Submitted');
const apiData = {
  sourceControls: [
    {
      id: '1',
      title: 'SC Test 1',
      servers: [
        {
          id: '1',
          title: 'SC1 - Server 1',
        },
        {
          id: '2',
          title: 'SC1 - Server 2',
        },
      ],
    },
    {
      id: '2',
      title: 'SC Test 2',
      servers: [
        {
          id: '3',
          title: 'SC2 - Server 1',
        },
        {
          id: '4',
          title: 'SC2 - Server 2',
        },
      ],
    },
  ],
  ticketSystems: [
    {
      id: '1',
      title: 'TS Test 1',
      servers: [
        {
          id: '1',
          title: 'TS1 - Server 1',
        },
        {
          id: '2',
          title: 'TS1 - Server 2',
        },
      ],
    },
    {
      id: '2',
      title: 'TS Test 2',
      servers: [
        {
          id: '1',
          title: 'TS2 - Server 1',
        },
        {
          id: '2',
          title: 'TS2 - Server 2',
        },
      ],
    },
  ],
};

const getSourceControlByTestId = (dataTestId: string): HTMLElement =>
  screen.getByTestId(`${dataTestId}-source-control`);

const getTicketSystemByTestId = (dataTestId: string): HTMLElement =>
  screen.getByTestId(`${dataTestId}-ticket-system`);

const getSourceControlTextbox = (): HTMLElement =>
  screen.getByRole('textbox', { name: /Source control/i });

const getTicketSystemTextbox = (): HTMLElement =>
  screen.getByRole('textbox', { name: /Ticketing system/i });

const getAddMoreButton = (): HTMLElement =>
  screen.getByRole('button', { name: /Add more/i });

const getSaveButton = (): HTMLElement =>
  screen.getByRole('button', { name: /Save/i });

const getCancelButton = (): HTMLElement =>
  screen.getByRole('button', { name: /Cancel/i });

const getSourceControlServerTextbox = (dataTestId: string): HTMLElement => {
  const sourceControlElem = screen.getByTestId(`${dataTestId}-sc-server`);
  return within(sourceControlElem).getByRole('textbox', {
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

const getTicketSystemServerTextbox = (dataTestId: string): HTMLElement => {
  const ticketSystemElem = screen.getByTestId(`${dataTestId}-ts-server`);
  return within(ticketSystemElem).getByRole('textbox', {
    name: /Server name/i,
  });
};

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

const selectSourceControlServer = (title: string, dataTestId: string): void => {
  const scServerElem = getSourceControlServerTextbox(dataTestId);
  userEvent.click(scServerElem);
  userEvent.click(screen.getByText(title));
};

const selectTicketSystemServer = (title: string, dataTestId: string): void => {
  const tsServerElem = getTicketSystemServerTextbox(dataTestId);
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

const clearSourceControl = (dataTestId: string): void => {
  const sourceControlElem = getSourceControlByTestId(dataTestId);
  const clearBtn = within(sourceControlElem).getByTitle('Clear');
  userEvent.hover(sourceControlElem);
  userEvent.click(clearBtn);
};

const clearTicketSystem = (dataTestId: string): void => {
  const ticketSystemElem = getTicketSystemByTestId(dataTestId);
  const clearBtn = within(ticketSystemElem).getByTitle('Clear');
  userEvent.hover(ticketSystemElem);
  userEvent.click(clearBtn);
};

const clickOnDeleteServerIcon = (dataTestId: string) => {
  const selectedScElem = screen.getByTestId(`${dataTestId}-selected-sc`);
  const deleteIcon = within(selectedScElem).getByTestId(
    `${dataTestId}-delete-icon`
  );
  userEvent.click(deleteIcon);
};

const getAllScServerTitles = (): Array<string> =>
  apiData.sourceControls
    .flatMap((sourceControl) => sourceControl.servers)
    .map((server) => server.title);

const getAllTicketSystemServerTitles = (): Array<string> =>
  apiData.ticketSystems
    .flatMap((ticketSystem) => ticketSystem.servers)
    .map((server) => server.title);

const checkIfScServerTitlesPresent = (
  titles: Array<string>,
  dataTestId: string,
  shouldBePresent = true
): void => {
  const scServerTextbox = getSourceControlServerTextbox(dataTestId);
  userEvent.click(scServerTextbox);
  titles.forEach((title) =>
    shouldBePresent
      ? expect(screen.getByText(title)).toBeVisible()
      : expect(screen.queryByText(title)).not.toBeInTheDocument()
  );
};

const checkIfTicketSystemServerTitlesPresent = (
  titles: Array<string>,
  dataTestId: string,
  shouldBePresent = true
): void => {
  const tsServerTextbox = getTicketSystemServerTextbox(dataTestId);
  userEvent.click(tsServerTextbox);
  titles.forEach((title) =>
    shouldBePresent
      ? expect(screen.getByText(title)).toBeVisible()
      : expect(screen.queryByText(title)).not.toBeInTheDocument()
  );
};

const addSourceControlToSelectedList = (
  scTitle: string,
  scServerTitle: string,
  dataTestId: string
): void => {
  selectSourceControl(scTitle);
  selectSourceControlServer(scServerTitle, dataTestId);
  clickOnAddMoreButton();
};

const setApplicationName = (applicationName: string): void => {
  const appNameTextbox = getApplicationNameTextbox();
  userEvent.type(appNameTextbox, applicationName);
};

const cancelApplicationDrawer = (): void => userEvent.click(getCancelButton());

const saveApplicationDrawer = (): void => userEvent.click(getSaveButton());

const clickCreateAnotherCheckbox = (): void =>
  userEvent.click(getCreateAnotherCheckbox());

const expectSelectedServerToBeVisible = (
  serverName: string,
  dataTestId: string,
  shouldBeVisible = true
): void => {
  const selectedScElem = screen.queryByTestId(`${dataTestId}-selected-sc`);

  if (shouldBeVisible) {
    expect(within(selectedScElem).getByTitle(serverName)).toBeVisible();
    expect(
      within(selectedScElem).getByTestId(`${dataTestId}-source-avatar-icon`)
    ).toBeVisible();
    expect(
      within(selectedScElem).getByTestId(`${dataTestId}-delete-icon`)
    ).toBeVisible();
  } else {
    expect(
      within(selectedScElem).queryByTitle(serverName)
    ).not.toBeInTheDocument();
    expect(
      within(selectedScElem).queryByTestId(`${dataTestId}-source-avatar-icon`)
    ).not.toBeInTheDocument();
    expect(
      within(selectedScElem).queryByTestId(`${dataTestId}-delete-icon`)
    ).not.toBeInTheDocument();
  }
};

describe('ProgressionBoardApplicationDrawer', () => {
  let dataTestId;

  beforeEach(() => {
    dataTestId = 'test-pb-application-drawer';
    render(
      <DotProgressionBoardApplicationDrawer
        apiData={apiData}
        isDrawerOpened={true}
        data-testid={dataTestId}
        onDrawerClose={onDrawerClose}
        onFormCancel={onFormCancel}
        onFormSubmit={onFormSubmitted}
      />
    );
  });

  it('should render successfully', () => {
    expect(screen).toBeTruthy();
  });

  it('should render avatar-icon with appropriate class', () => {
    const spanElem = screen.getByTestId(`${dataTestId}-application-icon`);
    expect(spanElem).toBeVisible();
    expect(spanElem).toHaveClass('application-icon');
  });

  it('should render correct header title', () => {
    const externalKeyElem = screen.getByText('Add application');
    expect(externalKeyElem).toBeVisible();
    expect(externalKeyElem).toHaveClass('header-title');
  });

  it('should render close icon button', () => {
    const closeIconBtn = screen.getByTestId(`${dataTestId}-close-icon`);
    expect(closeIconBtn).toBeVisible();
    expect(closeIconBtn).toBeEnabled();
  });

  it("should render 'Application name' textbox", () => {
    const appNameTextbox = screen.getByRole('textbox', {
      name: /Application name/i,
    });
    expect(appNameTextbox).toBeVisible();
  });

  it("should render 'Source control' textbox", () => {
    const sourceControlTextbox = getSourceControlTextbox();
    expect(sourceControlTextbox).toBeVisible();
  });

  it("should render source control 'Server name' textbox", () => {
    const sourceControlElem = screen.getByTestId(`${dataTestId}-sc-server`);
    const serverNameTextbox = getSourceControlServerTextbox(dataTestId);
    const serverNameLabel = within(sourceControlElem).getByText(
      'Choose server'
    );
    expect(serverNameTextbox).toBeVisible();
    expect(serverNameLabel).toBeVisible();
  });

  it("should render disabled 'Add more' button", () => {
    const addMoreBtn = screen.getByRole('button', { name: /Add more/i });
    expect(addMoreBtn).toBeVisible();
    expect(addMoreBtn).toBeDisabled();
  });

  it("should render 'Ticketing system' textbox", () => {
    const ticketSystemTextbox = screen.getByRole('textbox', {
      name: /Ticketing system/i,
    });
    expect(ticketSystemTextbox).toBeVisible();
  });

  it("should render ticket system 'Server name' textbox", () => {
    const ticketSystemElem = screen.getByTestId(`${dataTestId}-ts-server`);
    const serverNameTextbox = within(ticketSystemElem).getByRole('textbox', {
      name: /Server name/i,
    });
    const serverNameLabel = within(ticketSystemElem).getByText('Choose server');
    expect(serverNameTextbox).toBeVisible();
    expect(serverNameLabel).toBeVisible();
  });

  it("should render 'Create another' checkbox", () => {
    const createAnotherCheckbox = screen.getByRole('checkbox', {
      name: /Create another/i,
    });
    expect(createAnotherCheckbox).toBeInTheDocument();
  });

  it("should render enabled 'Cancel' button", () => {
    const cancelBtn = screen.getByRole('button', { name: /Cancel/i });
    expect(cancelBtn).toBeVisible();
    expect(cancelBtn).toBeEnabled();
  });

  it("should render disabled 'Save' button", () => {
    const saveBtn = screen.getByRole('button', { name: /Save/i });
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
    checkIfScServerTitlesPresent(getAllScServerTitles(), dataTestId, false);
  });

  it('should set value to input field when selecting item from source control autocomplete popup element', () => {
    const sourceControlTextbox = getSourceControlTextbox();
    const sourceControlTitle = apiData.sourceControls[0].title;
    selectTitleFromAutocomplete(sourceControlTextbox, sourceControlTitle);
    expect(sourceControlTextbox).toHaveValue(sourceControlTitle);
  });

  it('should display relevant server names when source control is selected', () => {
    const sourceControlTextbox = getSourceControlTextbox();
    const selectedSourceControl = apiData.sourceControls[1];
    selectTitleFromAutocomplete(
      sourceControlTextbox,
      selectedSourceControl.title
    );
    const scServerTextbox = getSourceControlServerTextbox(dataTestId);
    userEvent.click(scServerTextbox);
    selectedSourceControl.servers.forEach((server) =>
      expect(screen.getByText(server.title)).toBeVisible()
    );
  });

  it('should clear server name selection when source control autocomplete is cleared', () => {
    const sourceControlTextbox = getSourceControlTextbox();
    const sourceControlTitle = apiData.sourceControls[0].title;
    selectTitleFromAutocomplete(sourceControlTextbox, sourceControlTitle);
    clearSourceControl(dataTestId);
    checkIfScServerTitlesPresent(getAllScServerTitles(), dataTestId, false);
  });

  it("should display 'Add more' button as disabled until both source control and server name get selected", () => {
    const addMoreButton = getAddMoreButton();
    const selectedSourceControl = apiData.sourceControls[1];
    clearSourceControl(dataTestId);
    expect(addMoreButton).toBeDisabled();
    selectSourceControl(selectedSourceControl.title);
    expect(addMoreButton).toBeDisabled();
    selectSourceControlServer(
      selectedSourceControl.servers[0].title,
      dataTestId
    );
    expect(addMoreButton).toBeEnabled();
  });

  it("should add source control server on the list when 'Add more' button is clicked", () => {
    const selectedSourceControl = apiData.sourceControls[0];
    const selectedServerTitle = selectedSourceControl.servers[0].title;
    clearSourceControl(dataTestId);
    addSourceControlToSelectedList(
      selectedSourceControl.title,
      selectedServerTitle,
      dataTestId
    );
    expectSelectedServerToBeVisible(selectedServerTitle, dataTestId, true);
  });

  it('should NOT display server name in autocomplete popup if it was already selected', () => {
    const selectedSourceControl = apiData.sourceControls[0];
    const selectedServerTitle = selectedSourceControl.servers[0].title;
    clearSourceControl(dataTestId);
    addSourceControlToSelectedList(
      selectedSourceControl.title,
      selectedServerTitle,
      dataTestId
    );
    selectSourceControl(selectedSourceControl.title);
    checkIfScServerTitlesPresent([selectedServerTitle], dataTestId, true);
  });

  it('should remove selected server when delete icon is clicked and should display deleted value in server autocomplete popup', () => {
    const selectedSourceControl = apiData.sourceControls[0];
    const selectedServerTitle = selectedSourceControl.servers[0].title;
    clearSourceControl(dataTestId);
    addSourceControlToSelectedList(
      selectedSourceControl.title,
      selectedServerTitle,
      dataTestId
    );
    clickOnDeleteServerIcon(dataTestId);
    clearSourceControl(dataTestId);
    selectSourceControl(selectedSourceControl.title);
    checkIfScServerTitlesPresent(
      selectedSourceControl.servers.map((server) => server.title),
      dataTestId,
      true
    );
  });

  it('should display correct ticket system values when clicking inside of Ticketing system autocomplete field', () => {
    const ticketSystemTextbox = getTicketSystemTextbox();
    userEvent.click(ticketSystemTextbox);
    apiData.ticketSystems.forEach((ticketSystem) =>
      expect(
        within(screen.getByRole('presentation')).getByText(ticketSystem.title)
      ).toBeVisible()
    );
  });

  it('should set value to ticket system input field when selecting item from autocomplete popup element', () => {
    const selectedTicketSystemTitle = apiData.ticketSystems[0].title;
    const ticketSystemTextbox = getTicketSystemTextbox();
    selectTicketSystem(selectedTicketSystemTitle);
    expect(ticketSystemTextbox).toHaveValue(selectedTicketSystemTitle);
  });

  it('should not display any value in ticket system server name autocomplete popup if no ticket system is selected', () => {
    checkIfTicketSystemServerTitlesPresent(
      getAllTicketSystemServerTitles(),
      dataTestId,
      false
    );
  });

  it('should display relevant server names when ticket system is selected', () => {
    const ticketSystemTextbox = getTicketSystemTextbox();
    const selectedTicketSystem = apiData.ticketSystems[1];
    selectTitleFromAutocomplete(
      ticketSystemTextbox,
      selectedTicketSystem.title
    );
    const tsServerTextbox = getTicketSystemServerTextbox(dataTestId);
    userEvent.click(tsServerTextbox);
    selectedTicketSystem.servers.forEach((server) =>
      expect(screen.getByText(server.title)).toBeVisible()
    );
  });

  it('should clear server name selection when ticket system autocomplete is cleared', () => {
    const ticketSystemTextbox = getTicketSystemTextbox();
    const ticketSystemTitle = apiData.ticketSystems[0].title;
    selectTitleFromAutocomplete(ticketSystemTextbox, ticketSystemTitle);
    clearTicketSystem(dataTestId);
    checkIfTicketSystemServerTitlesPresent(
      getAllTicketSystemServerTitles(),
      dataTestId,
      false
    );
  });

  it("should display 'Save' button as disabled until all data is set", () => {
    const selectedSourceControl = apiData.sourceControls[0];
    const selectedTicketSystem = apiData.ticketSystems[0];
    const saveBtn = getSaveButton();
    setApplicationName('App Test');
    expect(saveBtn).toBeDisabled();
    selectSourceControl(selectedSourceControl.title);
    expect(saveBtn).toBeDisabled();
    selectSourceControlServer(
      selectedSourceControl.servers[0].title,
      dataTestId
    );
    expect(saveBtn).toBeDisabled();
    selectTicketSystem(selectedTicketSystem.title);
    expect(saveBtn).toBeDisabled();
    selectTicketSystemServer(selectedTicketSystem.servers[0].title, dataTestId);
    expect(saveBtn).toBeEnabled();
  });

  it("should reset form fields on 'Cancel' button click", () => {
    setApplicationName('My test application');
    cancelApplicationDrawer();
    expect(getApplicationNameTextbox()).toHaveValue('');
  });

  describe('form submission', () => {
    const selectedSourceControl = apiData.sourceControls[0];
    const selectedTicketSystem = apiData.ticketSystems[0];
    const submitFormWithSampleData = (createAnother = false) => {
      setApplicationName('My test application');
      selectSourceControl(selectedSourceControl.title);
      selectSourceControlServer(
        selectedSourceControl.servers[0].title,
        dataTestId
      );
      selectTicketSystem(selectedTicketSystem.title);
      selectTicketSystemServer(
        selectedTicketSystem.servers[0].title,
        dataTestId
      );
      createAnother && clickCreateAnotherCheckbox();
      saveApplicationDrawer();
    };

    it('should reset form fields on form submission', () => {
      submitFormWithSampleData();
      expect(getApplicationNameTextbox()).toHaveValue('');
    });
  });
});
