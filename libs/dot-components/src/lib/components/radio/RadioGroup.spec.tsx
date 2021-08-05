import React, { createRef } from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../testing-utils';
import {
  inputLabelPlacement,
  inputSizeOptions,
} from '../input-form-fields/InputFormFields.propTypes';
import { DotRadioGroup, RadioGroupProps } from './RadioGroup';
import { DotIcon } from '../icon/Icon';

const radioButtons = [
  { label: 'item 1', value: 'item-1' },
  { label: 'item 2', value: 'item-2' },
  { label: 'item 3', value: 'item-3' },
  { label: 'item 4', value: 'item-4' },
];

describe('DotRadioGroup', () => {
  const inputRef = createRef<HTMLInputElement>();
  it('should have unchanged API', () => {
    const onChange = jest.fn();
    const props = {
      ariaLabel: 'aria label',
      className: 'test-class',
      'data-testid': 'testid',
      defaultValue: 'the default',
      disabled: false,
      endIcon: <DotIcon iconId="save" />,
      error: false,
      helperText: 'a little help here?',
      id: 'radio-group-id',
      inputRef: inputRef,
      label: 'My Button Group',
      labelPlacement: 'end' as inputLabelPlacement,
      name: 'radio-group',
      onChange: onChange,
      options: radioButtons,
      required: true,
      row: true,
      size: 'medium' as inputSizeOptions,
      startIcon: <DotIcon iconId="save" />,
    };
    const radioGroupProps: RadioGroupProps = props;
    expect(radioGroupProps).toEqual(props);
  });

  describe('Props', () => {
    it('should be checked and have a value of item-1', () => {
      render(
        <DotRadioGroup
          data-testid="test-radio-group"
          options={radioButtons}
          defaultValue="item-1"
        />
      );
      const inputs = screen.getAllByRole('radio');

      expect(inputs[0]).toBeChecked();
      expect(inputs[0].getAttribute('value')).toBe('item-1');
    });
    it('should be checked and have a defaultValue of item-2', () => {
      render(
        <DotRadioGroup
          data-testid="test-radio-group"
          defaultValue="item-2"
          options={radioButtons}
        />
      );
      const inputs = screen.getAllByRole('radio');

      expect(inputs[1]).toBeChecked();
      expect(inputs[1].getAttribute('value')).toBe('item-2');
    });
    it('should not be checked and have a value of item-2', () => {
      render(
        <DotRadioGroup
          data-testid="test-radio-group"
          options={radioButtons}
          value="item-2"
        />
      );
      const inputs = screen.getAllByRole('radio');

      expect(inputs[0]).not.toBeChecked();
      expect(inputs[1].getAttribute('value')).toBe('item-2');
    });
    it('should have ariaLabel', () => {
      render(
        <DotRadioGroup
          ariaLabel="test-radio-group"
          data-testid="test-radio-group"
          options={radioButtons}
          value="item-2"
        />
      );
      const radiaGroup = screen.getByRole('radiogroup');

      expect(radiaGroup).toHaveAttribute('aria-label', 'test-radio-group');
    });
    it('should be checked and have a value of item-2', () => {
      render(
        <DotRadioGroup
          data-testid="test-radio-group"
          defaultValue="item-2"
          options={radioButtons}
        />
      );
      const inputs = screen.getAllByRole('radio');

      expect(inputs[1]).toBeChecked();
      expect(inputs[1].getAttribute('value')).toBe('item-2');
    });
    it('should disable all radio buttons', () => {
      render(
        <DotRadioGroup
          data-testid="test-radio-group"
          disableGroup
          options={radioButtons}
        />
      );
      const inputs = screen.getAllByRole('radio');
      inputs.forEach((input) => {
        expect(input).toBeDisabled();
      });
    });
    it('should have startIcon', () => {
      render(
        <DotRadioGroup
          data-testid="test-radio-group"
          groupLabel="Group label"
          options={radioButtons}
          startIcon={<DotIcon data-testid="start-icon" iconId="home" />}
          value="item-2"
        />
      );
      const startIcon = screen.getByTestId('start-icon');
      expect(startIcon).toBeVisible();
    });
    it('should have radio group label', () => {
      render(
        <DotRadioGroup
          data-testid="test-radio-group"
          endIcon={<DotIcon data-testid="end-icon" iconId="home" />}
          groupLabel="Group label"
          options={radioButtons}
        />
      );
      const radioGroupLabel = screen.getByText('Group label');
      expect(radioGroupLabel).toBeVisible();
    });
    it('should have endIcon', () => {
      render(
        <DotRadioGroup
          data-testid="test-radio-group"
          endIcon={<DotIcon data-testid="end-icon" iconId="home" />}
          groupLabel="Group label"
          options={radioButtons}
        />
      );
      const startIcon = screen.getByTestId('end-icon');
      expect(startIcon).toBeVisible();
    });
    it('should have error', () => {
      const { baseElement } = render(
        <DotRadioGroup
          data-testid="test-radio-group"
          error
          label="Group label"
          helperText="error"
          options={radioButtons}
        />
      );
      const formControlLabel = baseElement.querySelector('.Mui-error');
      const helperText = baseElement.querySelector(
        '.MuiFormHelperText-root.Mui-error'
      );
      expect(helperText).toBeVisible();
      expect(helperText).toHaveTextContent('error');
      expect(formControlLabel).toBeVisible();
      expect(formControlLabel).toHaveTextContent('Group label');
    });
    it('should have helperText', () => {
      const { baseElement } = render(
        <DotRadioGroup
          data-testid="test-radio-group"
          groupLabel="Group label"
          helperText="Helper test"
          options={radioButtons}
        />
      );
      const helperText = baseElement.querySelector('.MuiFormHelperText-root');
      expect(helperText).toBeVisible();
      expect(helperText).toHaveTextContent('Helper test');
    });
    it('should have name prop', () => {
      render(
        <DotRadioGroup
          data-testid="test-radio-group"
          groupLabel="Group label"
          helperText="Helper test"
          name="test-radio-name"
          options={radioButtons}
        />
      );
      const inputs = screen.getAllByRole('radio');
      inputs.forEach((input) => {
        expect(input).toHaveAttribute('name', 'test-radio-name');
      });
    });
    it('should have labelPlacement="start" prop', () => {
      const { baseElement } = render(
        <DotRadioGroup
          data-testid="test-radio-group"
          groupLabel="Group label"
          helperText="Helper test"
          labelPlacement="start"
          name="test-radio-name"
          options={radioButtons}
        />
      );
      const formControlLabels = baseElement.querySelectorAll('label');
      formControlLabels.forEach((formControlLabel) => {
        expect(formControlLabel).toHaveClass(
          'MuiFormControlLabel-labelPlacementStart'
        );
      });
    });
    it('should have labelPlacement="bottom" prop', () => {
      const { baseElement } = render(
        <DotRadioGroup
          data-testid="test-radio-group"
          groupLabel="Group label"
          helperText="Helper test"
          labelPlacement="bottom"
          name="test-radio-name"
          options={radioButtons}
          value="item-2"
        />
      );
      const formControlLabels = baseElement.querySelectorAll('label');
      formControlLabels.forEach((formControlLabel) => {
        expect(formControlLabel).toHaveClass(
          'MuiFormControlLabel-labelPlacementBottom'
        );
      });
    });
    it('should have size="small" prop', () => {
      const { baseElement } = render(
        <DotRadioGroup
          data-testid="test-radio-group"
          label="Group label"
          helperText="Helper test"
          labelPlacement="bottom"
          name="test-radio-name"
          options={radioButtons}
          size="small"
        />
      );
      const svgs = baseElement.querySelectorAll('svg');
      svgs.forEach((svg) => {
        expect(svg).toHaveClass('MuiSvgIcon-fontSizeSmall');
      });
    });
    it('should have onChange event', () => {
      const onChange = jest.fn();
      render(
        <DotRadioGroup
          data-testid="test-radio-group"
          groupLabel="Group label"
          helperText="Helper test"
          labelPlacement="bottom"
          name="test-radio-name"
          onChange={onChange}
          options={radioButtons}
          value="item-2"
        />
      );
      const inputs = screen.getAllByRole('radio');
      userEvent.click(inputs[0]);
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('should not throw exception if no onChange callback', () => {
      render(
        <DotRadioGroup
          data-testid="test-radio-group"
          groupLabel="Group label"
          helperText="Helper test"
          labelPlacement="bottom"
          name="test-radio-name"
          options={radioButtons}
          value="item-2"
        />
      );
      const inputs = screen.getAllByRole('radio');
      userEvent.click(inputs[0]);
    });
  });
});
