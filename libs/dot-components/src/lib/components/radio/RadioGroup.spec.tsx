import React from 'react';
import { screen } from '@testing-library/dom';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { DotRadioButton } from './RadioButton';
import { DotRadioGroup } from './RadioGroup';

describe('DotRadioGroup', () => {
  it('should be checked and have a value of item-1', () => {
    render(
      <DotRadioGroup
        radioButtons={[
          { label: 'item 1', value: 'item-1' },
          { label: 'item 2', value: 'item-2' },
          { label: 'item 3', value: 'item-3' },
          { label: 'item 4', value: 'item-4', disabled: true },
        ]}
        data-testid="test-radio-group"
        value="item-1"
      />
    );
    const input = screen.getByTestId('test-radio-group').querySelector('input');

    expect(input).toBeChecked();
    expect(input.value).toBe('item-1');
  });
  it('should not be checked and have a value of item-2', () => {
    render(
      <DotRadioGroup
        radioButtons={[
          { label: 'item 1', value: 'item-1' },
          { label: 'item 2', value: 'item-2' },
          { label: 'item 3', value: 'item-3' },
          { label: 'item 4', value: 'item-4', disabled: true },
        ]}
        data-testid="test-radio-group"
        value="item-2"
      />
    );
    const input = screen
      .getByTestId('test-radio-group')
      .querySelectorAll('input');

    expect(input[0]).not.toBeChecked();
    expect(input[1].value).toBe('item-2');
  });
  it('should be checked and have a value of item-2', () => {
    render(
      <DotRadioGroup
        radioButtons={[
          { label: 'item 1', value: 'item-1' },
          { label: 'item 2', value: 'item-2' },
          { label: 'item 3', value: 'item-3' },
          { label: 'item 4', value: 'item-4', disabled: true },
        ]}
        data-testid="test-radio-group"
        value="item-2"
      />
    );
    const input = screen
      .getByTestId('test-radio-group')
      .querySelectorAll('input');

    expect(input[1]).toBeChecked();
    expect(input[1].value).toBe('item-2');
  });
});
