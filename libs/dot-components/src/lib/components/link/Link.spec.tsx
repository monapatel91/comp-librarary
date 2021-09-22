import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../testing-utils';
import {
  DotLink,
  LinkColor,
  LinkProps,
  LinkTarget,
  LinkUnderline,
} from './Link';

describe('Link', () => {
  it('should have unchanged API', () => {
    const onClick = jest.fn();
    const onMouseEnter = jest.fn();
    const props = {
      ariaLabel: 'my link',
      children: 'My Link',
      className: 'test-class',
      color: 'primary' as LinkColor,
      'data-testid': 'testid',
      href: 'http://somewhere',
      onClick: onClick,
      onMouseEnter: onMouseEnter,
      rel: 'second cousin',
      tabIndex: 0,
      target: '_self' as LinkTarget,
      title: 'Sir Link',
      underline: 'always' as LinkUnderline,
    };
    const linkProps: LinkProps = props;
    expect(linkProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = render(<DotLink>Sample Link</DotLink>);
    expect(baseElement).toBeTruthy();
  });

  it('should have an href is one is passed', () => {
    render(<DotLink href="someplace/cool">Sample Link</DotLink>);

    expect(
      screen.getByText('Sample Link').closest('a').getAttributeNode('href')
        .value
    ).toEqual('someplace/cool');
  });

  it('should call onClick if one is passed down as a prop', () => {
    const onClick = jest.fn();
    render(<DotLink onClick={onClick}>Sample Link</DotLink>);

    userEvent.click(screen.getByText('Sample Link'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should trigger onClick if Enter key is pressed while focused', () => {
    const onClick = jest.fn();
    render(<DotLink onClick={onClick}>Sample Link</DotLink>);

    userEvent.type(screen.getByText('Sample Link'), '{enter}');
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it("should have 'aria-label' attribute with correct value", () => {
    const ariaLabel = 'my label';
    render(
      <DotLink ariaLabel={ariaLabel} href="#">
        Link
      </DotLink>
    );
    expect(screen.getByRole('link')).toHaveAttribute('aria-label', ariaLabel);
  });
});
