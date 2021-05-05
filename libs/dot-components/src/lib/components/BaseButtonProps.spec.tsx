import { BaseButtonProps } from './BaseButtonProps';

describe('CommonProps', () => {
  it('should have unchanged API', () => {
    const onClick = jest.fn();
    const props = {
      disabled: false,
      disableRipple: false,
      fullWidth: true,
      isSubmit: true,
      onClick: onClick,
      size: 'small',
      titleTooltip: 'click here',
      type: 'text',
    };
    const buttonProps: BaseButtonProps = {
      disabled: false,
      disableRipple: false,
      fullWidth: true,
      isSubmit: true,
      onClick: onClick,
      size: 'small',
      titleTooltip: 'click here',
      type: 'text',
    };
    expect(buttonProps).toEqual(props);
  });
});
