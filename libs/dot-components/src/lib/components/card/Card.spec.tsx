import React, { Fragment } from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { screen } from '@testing-library/dom';
import { DotCard, CardProps } from './Card';
import { DotCardHeader, CardHeaderProps } from './CardHeader';
import { DotCardContent, CardContentProps } from './CardContent';
import { DotCardFooter, CardFooterProps } from './CardFooter';
import DotAvatar from '../avatar/Avatar';

describe('DotCard', () => {
  const avatar = (
    <DotAvatar alt="Batman" size="small" data-testid="test-avatar" />
  );
  const action = <span>Do Something</span>;

  it('should have unchanged API', () => {
    const hProps = {
      action: action,
      avatar: avatar,
      subheader: 'I am a subheader',
      subheaderSize: 'large',
      title: 'I am a title',
      titleSize: 'large',
    };
    const headerProps: CardHeaderProps = {
      action: action,
      avatar: avatar,
      subheader: 'I am a subheader',
      subheaderSize: 'large',
      title: 'I am a title',
      titleSize: 'large',
    };
    expect(headerProps).toEqual(hProps);
    const cProps = {
      children: 'This is some content',
    };
    const contentProps = {
      children: 'This is some content',
    };
    expect(contentProps).toEqual(cProps);
    const fProps = {
      children: 'This is a footer',
    };
    const footerProps = {
      children: 'This is a footer',
    };
    expect(footerProps).toEqual(fProps);
    const props = {
      children: 'I am a card!',
    };
    const cardProps = {
      children: 'I am a card!',
    };
    expect(props).toEqual(cardProps);
  });

  it('should render with all props', () => {
    render(
      <DotCard className="custom-test-class" data-testid="test-card">
        <Fragment>
          <DotCardHeader
            data-testid="test-card-header"
            className="custom-test-class"
            action={action}
            avatar={avatar}
            title="Cool Card"
            subheader="Ever so refreshing!"
          />
          <DotCardContent
            data-testid="test-card-content"
            className="custom-test-class"
          >
            This is some content
          </DotCardContent>
          <DotCardFooter
            data-testid="test-card-footer"
            className="custom-test-class"
          >
            This is a footer
          </DotCardFooter>
        </Fragment>
      </DotCard>
    );
    const cardTestId = screen.getByTestId('test-card');
    const cardHeaderTestId = screen.getByTestId('test-card-header');
    const avatarTestId = screen.getByTestId('test-avatar');
    const cardContentTestId = screen.getByTestId('test-card-content');
    const cardFooterTestId = screen.getByTestId('test-card-footer');
    expect(avatarTestId).toBeVisible();
    expect(screen.getByText('Do Something')).toBeVisible();
    expect(screen.getByText('This is some content')).toBeVisible();
    expect(screen.getByText('This is a footer')).toBeVisible();
    expect(screen.getByText('Cool Card')).toHaveClass('MuiCardHeader-title');
    expect(screen.getByText('Ever so refreshing!')).toHaveClass(
      'MuiCardHeader-subheader'
    );
    expect(cardTestId).toHaveClass('custom-test-class');
    expect(cardHeaderTestId).toHaveClass('custom-test-class');
    expect(cardContentTestId).toHaveClass('custom-test-class');
    expect(cardFooterTestId).toHaveClass('custom-test-class');
  });
});
