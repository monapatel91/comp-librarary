import React from 'react';
import { render, RenderResult, screen } from '../../../testing-utils';
import { PayloadUrlDialog, PayloadUrlDialogProps } from './PayloadUrlDialog';
import userEvent from '@testing-library/user-event';

describe('PayloadUrlDialog', () => {
  const dataTestId = 'test-payload-url-dialog';

  const onClose = jest.fn();

  let baseComponentElem: HTMLElement;

  const getOkBtn = (): HTMLElement =>
    screen.getByRole('button', { name: /ok/i });

  const componentProps: PayloadUrlDialogProps = {
    'data-testid': dataTestId,
    onClose,
    payloadUrl: 'www.pl.ai/',
    serverId: '1111',
  };

  const renderComponent = (
    props: PayloadUrlDialogProps = null
  ): RenderResult => {
    const renderProps = props ? props : componentProps;
    return render(<PayloadUrlDialog {...renderProps} />);
  };

  it('should have unchanged API', () => {
    const props = {
      'data-testid': dataTestId,
      onClose,
      payloadUrl: 'www.pl.ai/',
      serverId: '1111',
    };
    expect(componentProps).toEqual(props);
  });

  beforeEach(() => {
    const { baseElement } = renderComponent();
    baseComponentElem = baseElement;
  });

  it('should render successfully', () => {
    expect(baseComponentElem).toBeTruthy();
  });

  it('should display correct dialog title', () => {
    expect(screen.getByText('Configure WebHook'));
  });

  it('should display payload URL input element with correct value', () => {
    const inputElem = screen.getByRole('textbox', {
      name: 'Payload URL',
    });
    expect(inputElem).toBeVisible();
    expect(inputElem.getAttribute('value')).toContain(
      componentProps.payloadUrl
    );
    expect(inputElem.getAttribute('data-testid')).toContain(
      `pu-input-${componentProps.serverId}`
    );
  });

  it("should execute event handler when 'OK' button is clicked", () => {
    const okButton = getOkBtn();
    userEvent.click(okButton);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
