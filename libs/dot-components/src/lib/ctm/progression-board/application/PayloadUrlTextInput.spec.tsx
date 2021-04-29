import React from 'react';
import { render, RenderResult, screen } from '../../../testing-utils';
import {
  PayloadUrlTextInput,
  PayloadUrlTextInputProps,
} from './PayloadUrlTextInput';

describe('PayloadUrlTextInput', () => {
  const dataTestId = 'payload-url-btn';

  const componentProps: PayloadUrlTextInputProps = {
    'data-testid': dataTestId,
    inputId: '111',
    payloadUrl: 'www.test.ai',
  };

  const getPayloadUrlCopyButton = (): HTMLElement =>
    screen.getByTestId(`${dataTestId}-copy-btn`);

  const getTextbox = (): HTMLElement => screen.getByRole('textbox');

  const renderComponent = (
    props: PayloadUrlTextInputProps = null
  ): RenderResult => {
    const renderProps = props ? props : componentProps;
    return render(<PayloadUrlTextInput {...renderProps} />);
  };

  it('should have unchanged API', () => {
    const props = {
      'data-testid': dataTestId,
      inputId: '111',
      payloadUrl: 'www.test.ai',
    };
    expect(componentProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = renderComponent();
    expect(baseElement).toBeTruthy();
  });

  it('should display correct payload URL in input field', () => {
    const { payloadUrl } = componentProps;
    renderComponent();
    expect(getTextbox()).toHaveValue(payloadUrl);
  });

  it('should have correct ID value', () => {
    const { inputId } = componentProps;
    renderComponent();
    expect(getTextbox()).toHaveAttribute('id', inputId);
  });

  it('should be read-only', () => {
    renderComponent();
    expect(getTextbox()).toHaveAttribute('readonly');
  });

  it('should contain enabled copy button when payload URl is present', () => {
    renderComponent();
    const btnElem = getPayloadUrlCopyButton();
    expect(btnElem).toBeVisible();
    expect(btnElem).toBeEnabled();
  });

  it('should contain disabled copy button when payload URl is NOT present', () => {
    const props = {
      ...componentProps,
      payloadUrl: '',
    };
    renderComponent(props);
    const btnElem = getPayloadUrlCopyButton();
    expect(btnElem).toBeVisible();
    expect(btnElem).toBeDisabled();
  });
});
