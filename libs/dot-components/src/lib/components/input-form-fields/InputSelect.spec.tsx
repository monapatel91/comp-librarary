import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { screen, fireEvent } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import { DotInputSelect } from './InputFormFields';

const sampleOptions = ['Batman', 'Ironman', 'Superman'];

describe('DotInputSelect', () => {
  it('renders successfully', () => {
    const { baseElement } = render(
      <DotInputSelect
        label="Foo Bar"
        name="bar"
        required={false}
        options={sampleOptions}
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it('displays correct number of options', async () => {
    render(
      <DotInputSelect
        label="Foo Bar"
        name="foo"
        required={false}
        options={sampleOptions}
      />
    );

    userEvent.click(screen.getByRole('combobox'));
    expect(await screen.findAllByRole('option')).toHaveLength(3);
  });

  it('should trigger the onChange event if one is provided', async () => {
    const onChange = jest.fn();
    render(
      <DotInputSelect
        label="Foo Bar"
        name="foo"
        required={false}
        options={sampleOptions}
        onChange={onChange}
      />
    );
    const inputField = screen.getByRole('combobox');

    fireEvent.change(inputField, { targe: { value: 'Ironman' } });
    expect(onChange).toHaveBeenCalled();
  });
});
