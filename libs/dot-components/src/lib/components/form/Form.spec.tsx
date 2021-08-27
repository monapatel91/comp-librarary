import React from 'react';
import { render, screen } from '../../testing-utils';
import { DotInputText } from '../input-form-fields/InputText';
import { DotForm } from './Form';

describe('Form', () => {
  const onSubmit = jest.fn();
  it('should render successfully', () => {
    const { baseElement } = render(
      <DotForm onSubmit={onSubmit}>
        <>
          <DotInputText id="firstName" name="firstName" label="First Name" />
          <DotInputText id="lastName" name="lastName" label="Last Name" />
        </>
      </DotForm>
    );
    expect(baseElement).toBeTruthy();
  });

  it("should have 'aria-label' attribute with correct value", () => {
    const ariaLabel = 'my label';
    render(
      <DotForm ariaLabel={ariaLabel} onSubmit={onSubmit}>
        <DotInputText id="firstName" name="firstName" label="First Name" />
      </DotForm>
    );
    const formElement = screen.getByRole('form');
    expect(formElement).toHaveAttribute('aria-label', ariaLabel);
  });
});
