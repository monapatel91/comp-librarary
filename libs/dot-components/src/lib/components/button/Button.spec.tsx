import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { ButtonProps, DotButton } from './Button';
import { DotIcon } from '../icon/Icon';

describe('DotButton', () => {
  it('should have unchanged API', () => {
    const onClick = jest.fn();
    const props = {
      children: 'My Button',
      disabled: false,
      disableRipple: false,
      endIcon: <DotIcon iconId="save" />,
      fullWidth: true,
      isSubmit: true,
      onClick: onClick,
      size: 'small',
      startIcon: <DotIcon iconId="home" />,
      titleTooltip: 'click here',
      type: 'text',
    };
    const buttonProps: ButtonProps = {
      children: 'My Button',
      disabled: false,
      disableRipple: false,
      endIcon: <DotIcon iconId="save" />,
      fullWidth: true,
      isSubmit: true,
      onClick: onClick,
      size: 'small',
      startIcon: <DotIcon iconId="home" />,
      titleTooltip: 'click here',
      type: 'text',
    };
    expect(buttonProps).toEqual(props);
  });

  it('should render a primary button', () => {
    render(
      <DotButton
        onClick={() => {
          console.log('test click');
        }}
        type="primary"
      >
        Test
      </DotButton>
    );
    expect(screen.getByRole('button')).toHaveClass(
      'MuiButton-containedPrimary'
    );
  });

  it('should render the medium button size', () => {
    render(
      <DotButton
        size="medium"
        onClick={() => {
          console.log('test click');
        }}
        type="outlined"
      >
        Test
      </DotButton>
    );

    expect(screen.getByRole('button')).not.toHaveClass('MuiButton-sizeLarge');
    expect(screen.getByRole('button')).not.toHaveClass('MuiButton-sizeSmall');
  });

  it('should render the small button size', () => {
    render(
      <DotButton
        size="small"
        onClick={() => {
          console.log('test click');
        }}
        type="outlined"
      >
        Test
      </DotButton>
    );
    expect(screen.getByRole('button')).toHaveClass('MuiButton-sizeSmall');
  });

  it('should render the large button size', () => {
    render(
      <DotButton
        size="large"
        onClick={() => {
          console.log('test click');
        }}
        type="outlined"
      >
        Test
      </DotButton>
    );

    expect(screen.getByRole('button')).toHaveClass('MuiButton-sizeLarge');
  });

  it('should render a destructive button', () => {
    render(
      <DotButton
        onClick={() => {
          console.log('test click');
        }}
        type="destructive"
      >
        Test
      </DotButton>
    );
    expect(screen.getByRole('button')).toHaveClass(
      'MuiButton-containedSecondary'
    );
  });

  it('should render a secondary button', () => {
    render(
      <DotButton
        onClick={() => {
          console.log('test click');
        }}
        type="outlined"
      >
        Test
      </DotButton>
    );
    expect(screen.getByRole('button')).toHaveClass('MuiButton-outlined');
  });

  it('should render a transparent button', () => {
    render(
      <DotButton
        onClick={() => {
          console.log('test click');
        }}
        type="text"
      >
        Test
      </DotButton>
    );
    expect(screen.getByRole('button')).toHaveClass('MuiButton-text');
  });

  it('should allow me to click the button', () => {
    const onClick = jest.fn();
    render(
      <DotButton onClick={onClick} type="destructive">
        Test
      </DotButton>
    );
    const myButton = screen.getByRole('button');
    userEvent.click(myButton);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should not allow me to click a disabled button', () => {
    const onClick = jest.fn();
    render(
      <DotButton onClick={onClick} type="destructive" disabled={true}>
        Test
      </DotButton>
    );
    const myButton = screen.getByRole('button');
    userEvent.click(myButton);
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it('should render an icon inside of a button', () => {
    render(
      <DotButton
        onClick={() => {
          console.log('test click');
        }}
        type="outlined"
        startIcon={<DotIcon data-testid="icon" iconId="save" />}
      >
        Test
      </DotButton>
    );
    const icon = screen.getByTestId('icon');

    expect(screen.getByText('Test')).toContainElement(icon);
    expect(icon).toHaveClass('material-icons');
    expect(icon).toBeVisible();
  });

  it('should render the large button size with the default icon size inside a button', () => {
    render(
      <DotButton
        size="large"
        onClick={() => {
          console.log('test click');
        }}
        type="outlined"
        startIcon={<DotIcon data-testid="icon" iconId="save" />}
      >
        Test
      </DotButton>
    );
    const icon = screen.getByTestId('icon');

    expect(screen.getByRole('button')).toHaveClass('MuiButton-sizeLarge');
    expect(icon).not.toHaveClass('MuiIcon-fontSizeLarge');
    expect(icon).not.toHaveClass('MuiIcon-fontSizeSmall');
  });
});
