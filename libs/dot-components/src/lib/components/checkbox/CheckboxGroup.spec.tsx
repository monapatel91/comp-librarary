import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../testing-utils';
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
      className: 'test-class',
      'data-testid': 'testid',
      defaultValues: defaultValues,
      disableGroup: false,
      endIcon: <DotIcon iconId="save" />,
      error: false,
      groupLabel: 'My Button Group',
      helperText: 'a little help here?',
      name: 'checkbox-group',
      labelPlacement: 'end',
      onChange: onChange,
      options: options,
      required: true,
      row: true,
      selectAllLabel: 'select all',
      showSelectAll: true,
      size: 'medium',
      startIcon: <DotIcon iconId="save" />,
    };
    const checkboxGroupProps: CheckboxGroupProps = props;
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
          data-testid="test-checkbox-group"
          options={options}
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
          data-testid="test-checkbox-group"
          disableGroup
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
          data-testid="test-checkbox-group"
          groupLabel="Group label"
          options={options}
          startIcon={<DotIcon data-testid="start-icon" iconId="home" />}
          value="item-2"
        />
      );
      const startIcon = screen.getByTestId('start-icon');
      expect(startIcon).toBeVisible();
    });
    it('should have groupLabel', () => {
      const { baseElement } = render(
        <DotCheckboxGroup
          data-testid="test-checkbox-group"
          endIcon={<DotIcon data-testid="end-icon" iconId="home" />}
          groupLabel="Group label"
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
          data-testid="test-checkbox-group"
          endIcon={<DotIcon data-testid="end-icon" iconId="home" />}
          groupLabel="Group label"
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
          data-testid="test-checkbox-group"
          error
          groupLabel="Group label"
          helperText="error"
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
          data-testid="test-checkbox-group"
          groupLabel="Group label"
          helperText="Helper test"
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
          data-testid="test-checkbox-group"
          groupLabel="Group label"
          helperText="Helper test"
          name="test-checkbox-name"
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
          data-testid="test-checkbox-group"
          groupLabel="Group label"
          helperText="Helper test"
          labelPlacement="start"
          name="test-checkbox-name"
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
          data-testid="test-checkbox-group"
          groupLabel="Group label"
          helperText="Helper test"
          labelPlacement="bottom"
          name="test-checkbox-name"
          options={options}
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
          labelPlacement="bottom"
          name="test-checkbox-name"
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
          data-testid="test-checkbox-group"
          groupLabel="Group label"
          helperText="Helper test"
          labelPlacement="bottom"
          name="test-checkbox-name"
          onChange={onChange}
          options={options}
          value="item-2"
        />
      );
      const inputs = screen.getAllByRole('checkbox');
      userEvent.click(inputs[0]);
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('should not throw exception if no onChange callback', () => {
      render(
        <DotCheckboxGroup
          data-testid="test-checkbox-group"
          groupLabel="Group label"
          helperText="Helper test"
          labelPlacement="bottom"
          name="test-checkbox-name"
          options={options}
          value="item-2"
        />
      );
      const inputs = screen.getAllByRole('checkbox');
      userEvent.click(inputs[0]);
    });

    it("should have 'aria-label' attribute with correct value", () => {
      const ariaLabel = 'my label';
      const dataTestId = 'dot-checkbox-group';
      render(
        <DotCheckboxGroup
          ariaLabel={ariaLabel}
          data-testid={dataTestId}
          options={options}
        />
      );
      const checkboxGroupElement = screen.getByTestId(dataTestId);
      expect(checkboxGroupElement).toHaveAttribute('aria-label', ariaLabel);
    });
  });
});
