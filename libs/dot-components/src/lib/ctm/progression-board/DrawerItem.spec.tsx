import React from 'react';
import { render, RenderResult, screen } from '../../testing-utils';
import { DrawerItem, DrawerItemProps } from './DrawerItem';

describe('DrawerItem', () => {
  const dataTestId = 'test-drawer-item';

  const actionNodeText = 'My Icon Button';

  const componentProps: DrawerItemProps = {
    actionNode: <p>{actionNodeText}</p>,
    avatarAltText: 'My alt text',
    avatarIcon: 'branch',
    contentText: 'My Test 01',
    'data-testid': dataTestId,
    contentVariant: 'h1',
  };

  const renderComponent = (props: DrawerItemProps = null): RenderResult => {
    const renderProps = props ? props : componentProps;
    return render(<DrawerItem {...renderProps} />);
  };

  it('should have unchanged API', () => {
    const props = {
      actionNode: <p>{actionNodeText}</p>,
      avatarAltText: 'My alt text',
      avatarIcon: 'branch',
      contentText: 'My Test 01',
      'data-testid': dataTestId,
      contentVariant: 'h1',
    };
    expect(componentProps).toEqual(props);
  });

  describe('default render', () => {
    let baseComponentElement: HTMLElement;

    beforeEach(() => {
      const { baseElement } = renderComponent();
      baseComponentElement = baseElement;
    });

    it('should render successfully', () => {
      expect(baseComponentElement).toBeTruthy();
    });

    it('should render avatar icon', () => {
      const avatarIcon = screen.getByTestId(`${dataTestId}-avatar-icon`);
      expect(avatarIcon).toBeVisible();
      expect(avatarIcon).toHaveClass('dot-avatar');
    });

    it('should render correct content text', () => {
      const textElem = screen.getByText(componentProps.contentText);
      expect(textElem).toBeVisible();
      expect(textElem).toHaveClass(
        `MuiTypography-${componentProps.contentVariant}`
      );
    });

    it('should render action node', () => {
      const iconButton = screen.getByText(actionNodeText);
      expect(iconButton).toBeVisible();
    });
  });

  describe('with custom props', () => {
    const props: DrawerItemProps = {
      ...componentProps,
      actionNode: null,
    };

    beforeEach(() => renderComponent(props));

    it('should NOT render action node', () => {
      const iconButton = screen.queryByText(actionNodeText);
      expect(iconButton).not.toBeInTheDocument();
    });
  });
});
