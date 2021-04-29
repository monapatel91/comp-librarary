import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, RenderResult, screen, within } from '../../../testing-utils';
import { ScServerList, ScServerListProps } from './SCServerList';

describe('ScServerList', () => {
  const dataTestId = 'sc-server-list';

  const onDelete = jest.fn();

  const componentProps: ScServerListProps = {
    applicationName: 'App 01',
    basePayloadUrl: 'www.app.com/',
    'data-testid': dataTestId,
    onDelete,
    servers: [
      {
        id: '111',
        title: 'Server 01',
        name: 'Configuration/Custom/Configuration111',
      },
      {
        id: '222',
        title: 'Server 02',
        name: 'Configuration/Custom/Configuration222',
      },
    ],
  };

  const getDeleteBtn = (serverId: string): HTMLElement =>
    screen.getByTestId(`${dataTestId}-delete-btn-${serverId}`);

  const getViewPayloadUrlBtn = (serverId: string): HTMLElement =>
    screen.getByTestId(`${dataTestId}-icon-btn-${serverId}`);

  const getDialog = (serverId: string): HTMLElement =>
    screen.getByTestId(`${dataTestId}-dialog-${serverId}`);

  const expectViewPayloadButtonsEnabled = (shouldBeEnabled = true): void => {
    const viewPayloadUrlBtn1 = getViewPayloadUrlBtn('111');
    const viewPayloadUrlBtn2 = getViewPayloadUrlBtn('222');
    expect(viewPayloadUrlBtn1).toBeVisible();
    shouldBeEnabled
      ? expect(viewPayloadUrlBtn1).toBeEnabled()
      : expect(viewPayloadUrlBtn1).toBeDisabled();
    expect(viewPayloadUrlBtn2).toBeVisible();
    shouldBeEnabled
      ? expect(viewPayloadUrlBtn2).toBeEnabled()
      : expect(viewPayloadUrlBtn2).toBeDisabled();
  };

  const renderComponent = (props: ScServerListProps = null): RenderResult => {
    const renderProps = props ? props : componentProps;
    return render(<ScServerList {...renderProps} />);
  };

  it('should have unchanged API', () => {
    const props = {
      applicationName: 'App 01',
      basePayloadUrl: 'www.app.com/',
      'data-testid': dataTestId,
      onDelete,
      servers: [
        {
          id: '111',
          title: 'Server 01',
          name: 'Configuration/Custom/Configuration111',
        },
        {
          id: '222',
          title: 'Server 02',
          name: 'Configuration/Custom/Configuration222',
        },
      ],
    };
    expect(componentProps).toEqual(props);
  });

  describe('with default render', () => {
    let baseComponentElem: HTMLElement;

    beforeEach(() => {
      const { baseElement } = renderComponent();
      baseComponentElem = baseElement;
    });

    it('should render successfully', () => {
      expect(baseComponentElem).toBeTruthy();
    });

    it('should render two drawer items, one for each server', () => {
      const drawerItem1 = screen.getByTestId(`${dataTestId}-drawer-item-111`);
      const drawerItem2 = screen.getByTestId(`${dataTestId}-drawer-item-222`);
      expect(drawerItem1).toBeVisible();
      expect(drawerItem1).toHaveClass('source-control');
      expect(drawerItem2).toBeVisible();
      expect(drawerItem2).toHaveClass('source-control');
      expectViewPayloadButtonsEnabled(true);
    });

    it("should render enabled delete buttons for each server when 'onDelete' prop is defined", () => {
      const deleteBtn1 = getDeleteBtn('111');
      const deleteBtn2 = getDeleteBtn('222');
      expect(deleteBtn1).toBeVisible();
      expect(deleteBtn1).toBeEnabled();
      expect(deleteBtn2).toBeVisible();
      expect(deleteBtn2).toBeEnabled();
    });

    it('should execute delete event handler with appropriate server id value on delete button click', () => {
      const deleteBtn = getDeleteBtn('222');
      userEvent.click(deleteBtn);
      expect(onDelete).toHaveBeenCalledTimes(1);
      expect(onDelete).toHaveBeenLastCalledWith('222');
    });

    it('should render correct tooltip for delete button', () => {
      const deleteBtn = getDeleteBtn('222');
      within(deleteBtn).getByTitle('Click to delete');
    });

    it('should render correct tooltip for view payload button', () => {
      const viewPayloadBtn = getViewPayloadUrlBtn('222');
      within(viewPayloadBtn).getByTitle('View payload URL');
    });

    it('should display correct confirmation dialog when view payload URl button is clicked', () => {
      const viewPayloadBtn = getViewPayloadUrlBtn('222');
      userEvent.click(viewPayloadBtn);
      const dialog = getDialog('222');
      within(dialog).getByText('Configure WebHook');
      const inputElem = within(dialog).getByRole('textbox', {
        name: 'Payload URL',
      });
      expect(inputElem).toBeVisible();
      expect(inputElem.getAttribute('value')).toContain(
        componentProps.servers[1].name
      );
    });

    it("should close dialog when 'OK' button is clicked", () => {
      const viewPayloadBtn = getViewPayloadUrlBtn('222');
      userEvent.click(viewPayloadBtn);
      const dialog = getDialog('222');
      const okButton = within(dialog).getByRole('button', { name: /OK/i });
      userEvent.click(okButton);
      expect(dialog).not.toBeInTheDocument();
    });
  });

  describe('with custom props', () => {
    it("should render disabled view payload buttons when 'basePayloadUrl' is not defined", () => {
      const props: ScServerListProps = {
        ...componentProps,
        basePayloadUrl: '',
      };
      renderComponent(props);
      expectViewPayloadButtonsEnabled(false);
    });

    it("should render disabled view payload buttons when 'applicationName' is not defined", () => {
      const props: ScServerListProps = {
        ...componentProps,
        applicationName: '',
      };
      renderComponent(props);
      expectViewPayloadButtonsEnabled(false);
    });
  });
});
