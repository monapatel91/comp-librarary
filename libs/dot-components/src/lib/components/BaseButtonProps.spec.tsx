import { BaseButtonProps, ButtonSize, ButtonType } from './BaseButtonProps';

describe('CommonProps', () => {
  it('should have unchanged API', () => {
    const onClick = jest.fn();
    const props = {
      className: 'test-class',
      'data-testid': 'testid',
      disabled: false,
      disableRipple: false,
      fullWidth: true,
      isSubmit: true,
      onClick: onClick,
      size: 'small' as ButtonSize,
      titleTooltip: 'click here',
      type: 'text' as ButtonType,
    };
    const buttonProps: BaseButtonProps = props;
    expect(buttonProps).toEqual(props);
  });
});
