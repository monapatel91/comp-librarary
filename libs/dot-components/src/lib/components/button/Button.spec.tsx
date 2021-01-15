import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import DotButton from './Button';

describe('DotButton', () => {
  it('should render a primary button', () => {
    render(
      <DotButton
        label="Test"
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

  it('should render the default button size', () => {
    render(
      <DotButton
        label="Test"
        size="default"
        onClick={() => {
          console.log('test click');
        }}
        type="outlined"
      />
    );

    expect(screen.getByRole('button')).not.toHaveClass('MuiButton-sizeLarge');
    expect(screen.getByRole('button')).not.toHaveClass('MuiButton-sizeSmall');
  });

  it('should render the small button size', () => {
    render(
      <DotButton
        label="Test"
        size="small"
        onClick={() => {
          console.log('test click');
        }}
        type="outlined"
      />
    );
    expect(screen.getByRole('button')).toHaveClass('MuiButton-sizeSmall');
  });

  it('should render the large button size', () => {
    render(
      <DotButton
        label="Test"
        size="large"
        onClick={() => {
          console.log('test click');
        }}
        type="outlined"
      />
    );

    expect(screen.getByRole('button')).toHaveClass('MuiButton-sizeLarge');
  });

  it('should render a verbose primary button', () => {
    render(
      <DotButton
        onClick={() => {
          console.log('test click');
        }}
        type="primary"
      >
        Verbose test
      </DotButton>
    );
    expect(screen.getByRole('button')).toHaveClass(
      'MuiButton-containedPrimary'
    );
  });

  it('should render a destructive button', () => {
    render(
      <DotButton
        label="Test"
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
        label="Test"
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
        label="Test"
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
    render(<DotButton label="Test" onClick={onClick} type="destructive" />);
    const myButton = screen.getByRole('button');
    userEvent.click(myButton);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should not allow me to click a disabled button', () => {
    const onClick = jest.fn();
    render(
      <DotButton
        label="Test"
        onClick={onClick}
        type="destructive"
        disabled={true}
      />
    );
    const myButton = screen.getByRole('button');
    userEvent.click(myButton);
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it('should render an icon inside of a button', () => {
    render(
      <DotButton
        label="Test"
        onClick={() => {
          console.log('test click');
        }}
        type="outlined"
        iconId="save"
      />
    );
    const icon = screen.getByTestId('button-icon');

    expect(screen.getByText('Test')).toContainElement(icon);
    expect(icon).toHaveClass('material-icons');
    expect(icon).toBeVisible();
  });

  it('should render the large button size with the default icon size inside a button', () => {
    render(
      <DotButton
        label="Test"
        size="large"
        onClick={() => {
          console.log('test click');
        }}
        type="outlined"
        iconId="save"
      />
    );
    const icon = screen.getByTestId('button-icon');

    expect(screen.getByRole('button')).toHaveClass('MuiButton-sizeLarge');
    expect(icon).not.toHaveClass('MuiIcon-fontSizeLarge');
    expect(icon).not.toHaveClass('MuiIcon-fontSizeSmall');
  });
});
