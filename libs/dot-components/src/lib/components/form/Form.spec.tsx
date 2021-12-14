import React from 'react';
import { render, screen } from '../../testing-utils';
import { DotInputText } from '../input-form-fields/InputText';
import { DotForm, FormProps } from './Form';

describe('Form', () => {
  const onSubmit = jest.fn();

  it('should have unchanged API', () => {
    const props = {
      ariaLabel: 'form',
      children: 'My Form',
      className: 'test-class',
      'data-testid': 'testid',
      onSubmit,
    };
    const formProps: FormProps = props;
    expect(formProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = render(
      <DotForm onSubmit={onSubmit}>
        <>
          <DotInputText id="firstName" label="First Name" name="firstName" />
          <DotInputText id="lastName" label="Last Name" name="lastName" />
        </>
      </DotForm>
    );
    expect(baseElement).toBeTruthy();
  });

  it("should have 'aria-label' attribute with correct value", () => {
    const ariaLabel = 'my label';
    render(
      <DotForm ariaLabel={ariaLabel} onSubmit={onSubmit}>
        <DotInputText id="firstName" label="First Name" name="firstName" />
      </DotForm>
    );
    const formElement = screen.getByRole('form');
    expect(formElement).toHaveAttribute('aria-label', ariaLabel);
  });
});
