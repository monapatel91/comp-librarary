import React from 'react';
import { render, RenderResult, screen, within } from '../../testing-utils';
import { DrawerItem, DrawerItemProps } from './DrawerItem';

describe('DrawerItem', () => {
  const dataTestId = 'test-drawer-item';

  const actionNodeText = 'My Icon Button';

  const componentProps: DrawerItemProps = {
    actionNode: <p>{actionNodeText}</p>,
    avatarProps: {
      alt: 'My alt text',
      type: 'icon',
      iconId: 'branch',
    },
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
      avatarProps: {
        alt: 'My alt text',
        type: 'icon',
        iconId: 'branch',
      },
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
      expect(within(avatarIcon).queryByRole('img')).not.toBeInTheDocument();
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
      avatarProps: {
        alt: 'My alt text',
        type: 'image',
        imageSrc: 'data:image/svg+xml;base64,1112333',
      },
      actionNode: null,
    };

    beforeEach(() => renderComponent(props));

    it('should NOT render action node', () => {
      const iconButton = screen.queryByText(actionNodeText);
      expect(iconButton).not.toBeInTheDocument();
    });

    it('should render custom avatar image', () => {
      const {
        avatarProps: { alt, imageSrc },
      } = props;
      const avatarIcon = screen.getByTestId(`${dataTestId}-avatar-icon`);
      const imgElem = within(avatarIcon).getByRole('img');
      expect(imgElem).toBeVisible();
      expect(imgElem).toHaveAttribute('src', imageSrc);
      expect(imgElem).toHaveAttribute('alt', alt);
    });
  });
});
