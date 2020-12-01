import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import DotButton from './Button';

describe('DotButton', () => {
  it('should render a primary button', () => {
    render(
      <DotButton
        displayText="Test"
        onClick={() => {
          console.log('test click');
        }}
        type="primary"
      />
    );
    expect(screen.getByRole('button')).toHaveClass(
      'MuiButton-containedPrimary'
    );
  });

  it('should render a destructive button', () => {
    render(
      <DotButton
        displayText="Test"
        onClick={() => {
          console.log('test click');
        }}
        type="destructive"
      />
    );
    expect(screen.getByRole('button')).toHaveClass(
      'MuiButton-containedSecondary'
    );
  });

  it('should render a secondary button', () => {
    render(
      <DotButton
        displayText="Test"
        onClick={() => {
          console.log('test click');
        }}
        type="outlined"
      />
    );
    expect(screen.getByRole('button')).toHaveClass('MuiButton-outlinedPrimary');
  });

  it('should render a transparent button', () => {
    render(
      <DotButton
        displayText="Test"
        onClick={() => {
          console.log('test click');
        }}
        type="text"
      />
    );
    expect(screen.getByRole('button')).toHaveClass('MuiButton-textPrimary');
  });

  it('should allow me to click the button', () => {
    const onClick = jest.fn();
    render(
      <DotButton displayText="Test" onClick={onClick} type="destructive" />
    );
    const myButton = screen.getByRole('button');
    userEvent.click(myButton);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should not allow me to click a disabled button', () => {
    const onClick = jest.fn();
    render(
      <DotButton
        displayText="Test"
        onClick={onClick}
        type="destructive"
        disabled={true}
      />
    );
    const myButton = screen.getByRole('button');
    userEvent.click(myButton);
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  xit('should render an icon button', () => {
    render(
      <DotButton
        displayText="Test"
        onClick={() => {
          console.log('test click');
        }}
        type="outlined"
        iconId="save"
      />
    );
    expect(screen.getByText('save')).toHaveClass('material-icons');
    expect(screen.getByText('save')).toBeVisible();
  });

  xit('should not render an icon button if no icon is provided', () => {
    render(
      <DotButton
        displayText="Test"
        onClick={() => {
          console.log('test click');
        }}
        type="outlined"
      />
    );
    expect(screen.queryByText('save')).toBeNull();
  });
});
