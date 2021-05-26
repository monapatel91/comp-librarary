import React from 'react';
import userEvent from '@testing-library/user-event';
import {
  render,
  RenderResult,
  screen,
  waitFor,
} from '../../../../testing-utils';
import {
  ApplicationNameInput,
  ApplicationNameInputProps,
} from './ApplicationNameInput';

describe('ApplicationNameInputSpec', () => {
  const onAppNameChange = jest.fn();

  const onBeforeAppNameChange = jest.fn();

  const testErrorMsg = 'Test error msg';

  const componentProps: ApplicationNameInputProps = {
    formAppNameErrorMsg: testErrorMsg,
    isFormAppNameTouched: false,
    isFormAppNameValid: false,
    onAppNameChange,
    onBeforeAppNameChange,
  };

  const getInputElem = () =>
    screen.getByRole('textbox', { name: /Application name/i });

  const getErrorMessage = () => screen.queryByText(testErrorMsg);

  const renderComponent = (
    props: ApplicationNameInputProps = null
  ): RenderResult => {
    const renderProps = props ? props : componentProps;
    return render(<ApplicationNameInput {...renderProps} />);
  };

  it('should have unchanged API', () => {
    const props = {
      formAppNameErrorMsg: testErrorMsg,
      isFormAppNameTouched: false,
      isFormAppNameValid: false,
      onAppNameChange,
      onBeforeAppNameChange,
    };
    expect(componentProps).toEqual(props);
  });

  describe('default render', () => {
    let baseComponentElement: HTMLElement;

    beforeEach(() => {
      const { baseElement } = renderComponent();
      baseComponentElement = baseElement;
    });

    it('should render successfully', () => {
      const { baseElement } = renderComponent();
      expect(baseElement).toBeTruthy();
    });

    it('should render with empty input textbox and without errors', () => {
      const elem = getInputElem();
      expect(elem).toHaveValue('');
      expect(getErrorMessage()).not.toBeInTheDocument();
    });

    it('should execute callback function when text is entered', async () => {
      const sampleText = '1234';
      const elem = getInputElem();
      //jest.useFakeTimers();
      userEvent.type(elem, sampleText);
      expect(elem).toHaveValue(sampleText);
      await waitFor(() => {
        expect(onAppNameChange).toHaveBeenCalledTimes(1);
        expect(onAppNameChange).toHaveBeenCalledWith(sampleText);
      });
    });
  });

  describe('with custom props', () => {
    it('should render with error message', () => {
      const props: ApplicationNameInputProps = {
        ...componentProps,
        isFormAppNameTouched: true,
        isFormAppNameValid: false,
      };
      renderComponent(props);
      expect(getErrorMessage()).toHaveTextContent(props.formAppNameErrorMsg);
    });
  });
});
