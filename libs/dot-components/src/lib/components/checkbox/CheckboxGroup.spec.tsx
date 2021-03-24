import React from 'react';
import { screen } from '@testing-library/dom';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import userEvent from '@testing-library/user-event';
import { DotCheckboxGroup, CheckboxGroupProps } from './CheckboxGroup';
import { DotIcon } from '../icon/Icon';

const options = [
  { label: 'item 1', value: 'item-1' },
  { label: 'item 2', value: 'item-2' },
  { label: 'item 3', value: 'item-3' },
  { label: 'item 4', value: 'item-4' },
];
const defaultValues = [
  { label: 'item 1', value: 'item-1' },
  { label: 'item 3', value: 'item-3' },
  { label: 'item 4', value: 'item-4' },
];

describe('DotCheckbox', () => {
  it('should have unchanged API', () => {
    const onChange = jest.fn();
    const props = {
      defaultValues: defaultValues,
      onChange: onChange,
      options: options,
      selectAllLabel: 'select all',
      showSelectAll: true,
    };
    const checkboxGroupProps: CheckboxGroupProps = {
      defaultValues: defaultValues,
      onChange: onChange,
      options: options,
      selectAllLabel: 'select all',
      showSelectAll: true,
    };
    expect(checkboxGroupProps).toEqual(props);
  });

  describe('Props', () => {
    it('should be checked and have a value of item-1', () => {
      render(
        <DotCheckboxGroup
          data-testid="test-checkbox-group"
          defaultValues={defaultValues}
          options={options}
        />
      );
      const inputs = screen.getAllByRole('checkbox');

      expect(inputs[0]).toBeChecked();
      expect(inputs[0].getAttribute('value')).toBe('item-1');
      expect(inputs[2]).toBeChecked();
      expect(inputs[2].getAttribute('value')).toBe('item-3');
      expect(inputs[3]).toBeChecked();
      expect(inputs[3].getAttribute('value')).toBe('item-4');
    });
    it('should be checked and have a defaultValue of item-2', () => {
      render(
        <DotCheckboxGroup
          data-testid="test-checkoxb-group"
          defaultValues={defaultValues}
          options={options}
        />
      );
      const inputs = screen.getAllByRole('checkbox');

      expect(inputs[2]).toBeChecked();
      expect(inputs[2].getAttribute('value')).toBe('item-3');
    });
    it('should not be checked and have a value of item-2', () => {
      render(
        <DotCheckboxGroup
          options={options}
          data-testid="test-checkbox-group"
          value="item-2"
        />
      );
      const inputs = screen.getAllByRole('checkbox');

      expect(inputs[0]).not.toBeChecked();
      expect(inputs[1].getAttribute('value')).toBe('item-2');
    });
    it('should disable all checkboxes', () => {
      render(
        <DotCheckboxGroup
          disableGroup
          data-testid="test-checkbox-group"
          options={options}
          value="item-2"
        />
      );
      const inputs = screen.getAllByRole('checkbox');
      inputs.forEach((input) => {
        expect(input).toBeDisabled();
      });
    });
    it('should have startIcon', () => {
      const { baseElement } = render(
        <DotCheckboxGroup
          groupLabel="Group label"
          startIcon={<DotIcon data-testid="start-icon" iconId="home" />}
          data-testid="test-checkbox-group"
          options={options}
          value="item-2"
        />
      );
      const startIcon = screen.getByTestId('start-icon');
      expect(startIcon).toBeVisible();
    });
    it('should have groupLabel', () => {
      const { baseElement } = render(
        <DotCheckboxGroup
          groupLabel="Group label"
          endIcon={<DotIcon data-testid="end-icon" iconId="home" />}
          data-testid="test-checkbox-group"
          options={options}
          value="item-2"
        />
      );
      const formControlLabel = baseElement.querySelector(
        '.dot-form-group-label'
      );
      expect(formControlLabel).toBeVisible();
      expect(formControlLabel).toHaveTextContent('Group label');
    });
    it('should have endIcon', () => {
      render(
        <DotCheckboxGroup
          groupLabel="Group label"
          endIcon={<DotIcon data-testid="end-icon" iconId="home" />}
          data-testid="test-checkbox-group"
          options={options}
          value="item-2"
        />
      );
      const startIcon = screen.getByTestId('end-icon');
      expect(startIcon).toBeVisible();
    });
    it('should have error', () => {
      const { baseElement } = render(
        <DotCheckboxGroup
          error
          groupLabel="Group label"
          helperText="error"
          data-testid="test-checkbox-group"
          options={options}
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
        <DotCheckboxGroup
          groupLabel="Group label"
          helperText="Helper test"
          data-testid="test-checkbox-group"
          options={options}
          value="item-2"
        />
      );
      const helperText = baseElement.querySelector('.MuiFormHelperText-root');
      expect(helperText).toBeVisible();
      expect(helperText).toHaveTextContent('Helper test');
    });
    it('should have name prop', () => {
      render(
        <DotCheckboxGroup
          groupLabel="Group label"
          helperText="Helper test"
          name="test-checkbox-name"
          data-testid="test-checkbox-group"
          options={options}
          value="item-2"
        />
      );
      const inputs = screen.getAllByRole('checkbox');
      inputs.forEach((input) => {
        expect(input).toHaveAttribute('name', 'test-checkbox-name');
      });
    });
    it('should have labelPlacement="start" prop', () => {
      const { baseElement } = render(
        <DotCheckboxGroup
          groupLabel="Group label"
          helperText="Helper test"
          name="test-checkbox-name"
          labelPlacement="start"
          data-testid="test-checkbox-group"
          options={options}
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
        <DotCheckboxGroup
          groupLabel="Group label"
          helperText="Helper test"
          name="test-checkbox-name"
          labelPlacement="bottom"
          options={options}
          data-testid="test-checkbox-group"
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
        <DotCheckboxGroup
          data-testid="test-checkbox-group"
          groupLabel="Group label"
          helperText="Helper test"
          name="test-checkbox-name"
          labelPlacement="bottom"
          options={options}
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
        <DotCheckboxGroup
          groupLabel="Group label"
          helperText="Helper test"
          name="test-checkbox-name"
          onChange={onChange}
          labelPlacement="bottom"
          options={options}
          data-testid="test-checkbox-group"
          value="item-2"
        />
      );
      const inputs = screen.getAllByRole('checkbox');
      userEvent.click(inputs[0]);
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });
});
