import React from 'react';
import { render, RenderResult, screen, within } from '../../../testing-utils';
import { ApplicationEdit, ApplicationEditProps } from './ApplicationEdit';
import { sampleAppDetailsTestData } from '../sample-data/sampleApplicationData';

describe('ApplicationEdit', () => {
  const dataTestId = 'test-app-edit';

  const componentProps: ApplicationEditProps = {
    appDetails: sampleAppDetailsTestData,
    'data-testid': dataTestId,
  };

  const getTicketSystemItem = () => screen.getByTestId(`${dataTestId}-ts-item`);

  const renderComponent = (
    props: ApplicationEditProps = null
  ): RenderResult => {
    const renderProps = props ? props : componentProps;
    return render(<ApplicationEdit {...renderProps} />);
  };

  it('should have unchanged API', () => {
    const props = {
      appDetails: sampleAppDetailsTestData,
      'data-testid': dataTestId,
    };
    expect(componentProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = renderComponent();
    expect(baseElement).toBeTruthy();
  });

  describe('default render', () => {
    beforeEach(() => renderComponent());

    it("should render 'Application name' label", () => {
      const appNameLabel = screen.getByText('Application name');
      expect(appNameLabel).toBeVisible();
    });

    it('should render drawer item with correct application name', () => {
      const drawerItem = screen.getByTestId(`${dataTestId}-app-name-item`);
      expect(drawerItem).toBeVisible();
      expect(
        within(drawerItem).getByText(sampleAppDetailsTestData.applicationName)
      ).toBeVisible();
    });

    it("should render 'Source control' label", () => {
      const scLabel = screen.getByText('Source control');
      expect(scLabel).toBeVisible();
    });

    it('should render source control list component', () => {
      const scServerList = screen.getByTestId(`${dataTestId}-sc-server-list`);
      expect(scServerList).toBeVisible();
    });

    it("should render 'Ticketing system' label", () => {
      const tsLabel = screen.getByText('Ticketing system');
      expect(tsLabel).toBeVisible();
    });

    it('should render drawer item with correct ticketing system title', () => {
      const drawerItem = screen.getByTestId(`${dataTestId}-ts-item`);
      expect(drawerItem).toBeVisible();
      expect(
        within(drawerItem).getByText(
          sampleAppDetailsTestData.ticketSystem.title
        )
      ).toBeVisible();
    });

    it('should render Jira image for selected Jira ticket system', () => {
      const tsItem = getTicketSystemItem();
      const img = within(tsItem).getByRole('img');
      expect(img).toBeVisible();
      expect(img).toHaveAttribute('alt', 'Jira');
    });
  });

  describe('with skeletons', () => {
    const props: ApplicationEditProps = {
      ...componentProps,
      appDetails: {
        ...sampleAppDetailsTestData,
        applicationName: '',
        sourceControls: [],
        ticketSystem: null,
      },
    };

    beforeEach(() => renderComponent(props));

    it('should render skeleton if application name is not set', () => {
      const skeleton = screen.getByTestId(`${dataTestId}-app-name-skeleton`);
      expect(skeleton).toBeVisible();
      expect(skeleton).toHaveClass('app-name-skeleton');
    });

    it('should render two SC skeletons when servers are not defined', () => {
      const skeleton1 = screen.getByTestId(`${dataTestId}-sc-server-0`);
      const skeleton2 = screen.getByTestId(`${dataTestId}-sc-server-1`);
      expect(skeleton1).toBeVisible();
      expect(skeleton1).toHaveClass('source-control-skeleton');
      expect(skeleton2).toBeVisible();
      expect(skeleton2).toHaveClass('source-control-skeleton');
    });

    it('should render skeleton if ticketing system title is not set', () => {
      const skeleton = screen.getByTestId(`${dataTestId}-ts-skeleton`);
      expect(skeleton).toBeVisible();
    });
  });

  describe('with custom props', () => {
    const props: ApplicationEditProps = {
      ...componentProps,
      appDetails: {
        ...sampleAppDetailsTestData,
        ticketSystem: {
          id: 'clickone',
          title: 'ClickOne',
          servers: [
            {
              id: '3d5dc9a091ef11eb9dd9d94066832666',
              title: 'ClickOne Server API-1',
            },
          ],
        },
      },
    };

    beforeEach(() => renderComponent(props));

    it('should render task icon for unknown ticket system', () => {
      const tsItem = getTicketSystemItem();
      const img = within(tsItem).queryByRole('img');
      expect(img).not.toBeInTheDocument();
      expect(tsItem.querySelector('.icon-task')).toBeVisible();
    });
  });
});
