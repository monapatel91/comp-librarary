import React from 'react';
import { screen } from '@testing-library/dom';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import userEvent from '@testing-library/user-event';
import { DotRadioGroup } from './RadioGroup';
import DotIcon from '../icon/Icon';
import { RadioGroup } from '@material-ui/core';

const radioButtons = [
  { label: 'item 1', value: 'item-1' },
  { label: 'item 2', value: 'item-2' },
  { label: 'item 3', value: 'item-3' },
  { label: 'item 4', value: 'item-4' },
];

describe('DotRadioGroup', () => {
  it('should be checked and have a value of item-1', () => {
    render(
      <DotRadioGroup
        data-testid="test-radio-group"
        options={radioButtons}
        value="item-1"
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
        options={radioButtons}
        data-testid="test-radio-group"
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
        options={radioButtons}
        data-testid="test-radio-group"
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
        options={radioButtons}
        defaultValue="item-2"
      />
    );
    const inputs = screen.getAllByRole('radio');

    expect(inputs[1]).toBeChecked();
    expect(inputs[1].getAttribute('value')).toBe('item-2');
  });
  it('should disable all radio buttons', () => {
    render(
      <DotRadioGroup
        disableGroup
        data-testid="test-radio-group"
        options={radioButtons}
        value="item-2"
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
        groupLabel="Group label"
        startIcon={<DotIcon data-testid="start-icon" iconId="home" />}
        data-testid="test-radio-group"
        options={radioButtons}
        value="item-2"
      />
    );
    const startIcon = screen.getByTestId('start-icon');
    expect(startIcon).toBeVisible();
  });
  it('should have groupLabel', () => {
    const { baseElement } = render(
      <DotRadioGroup
        groupLabel="Group label"
        endIcon={<DotIcon data-testid="end-icon" iconId="home" />}
        data-testid="test-radio-group"
        options={radioButtons}
        value="item-2"
      />
    );
    const formControlLabel = baseElement.querySelector('.dot-form-group-label');
    expect(formControlLabel).toBeVisible();
    expect(formControlLabel).toHaveTextContent('Group label');
  });
  it('should have endIcon', () => {
    render(
      <DotRadioGroup
        groupLabel="Group label"
        endIcon={<DotIcon data-testid="end-icon" iconId="home" />}
        data-testid="test-radio-group"
        options={radioButtons}
        value="item-2"
      />
    );
    const startIcon = screen.getByTestId('end-icon');
    expect(startIcon).toBeVisible();
  });
  it('should have error', () => {
    const { baseElement } = render(
      <DotRadioGroup
        error
        groupLabel="Group label"
        helperText="error"
        data-testid="test-radio-group"
        options={radioButtons}
        value="item-2"
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
        groupLabel="Group label"
        helperText="Helper test"
        data-testid="test-radio-group"
        options={radioButtons}
        value="item-2"
      />
    );
    const helperText = baseElement.querySelector('.MuiFormHelperText-root');
    expect(helperText).toBeVisible();
    expect(helperText).toHaveTextContent('Helper test');
  });
  it('should have name prop', () => {
    render(
      <DotRadioGroup
        groupLabel="Group label"
        helperText="Helper test"
        name="test-radio-name"
        data-testid="test-radio-group"
        options={radioButtons}
        value="item-2"
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
        groupLabel="Group label"
        helperText="Helper test"
        name="test-radio-name"
        labelPlacement="start"
        data-testid="test-radio-group"
        options={radioButtons}
        value="item-2"
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
        groupLabel="Group label"
        helperText="Helper test"
        name="test-radio-name"
        labelPlacement="bottom"
        options={radioButtons}
        data-testid="test-radio-group"
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
        groupLabel="Group label"
        helperText="Helper test"
        name="test-radio-name"
        labelPlacement="bottom"
        options={radioButtons}
        size="small"
        value="item-2"
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
        groupLabel="Group label"
        helperText="Helper test"
        name="test-radio-name"
        onChange={onChange}
        labelPlacement="bottom"
        options={radioButtons}
        data-testid="test-radio-group"
        value="item-2"
      />
    );
    const inputs = screen.getAllByRole('radio');
    userEvent.click(inputs[0]);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
