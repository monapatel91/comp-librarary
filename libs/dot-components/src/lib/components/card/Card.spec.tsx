import React, { Fragment } from 'react';
import { render, screen } from '../../testing-utils';
import { DotCard } from './Card';
import {
  DotCardHeader,
  CardHeaderProps,
  SubheaderSize,
  TitleSize,
} from './CardHeader';
import { DotCardContent } from './CardContent';
import { DotCardFooter } from './CardFooter';
import { DotAvatar } from '../avatar/Avatar';

describe('DotCard', () => {
  const avatar = (
    <DotAvatar alt="Batman" size="small" data-testid="test-avatar" />
  );
  const action = <span>Do Something</span>;

  it('should have unchanged API', () => {
    const hProps = {
      action: action,
      avatar: avatar,
      className: 'test-class',
      'data-testid': 'testid',
      subheader: 'I am a subheader',
      subheaderSize: 'large' as SubheaderSize,
      title: 'I am a title',
      titleSize: 'large' as TitleSize,
    };
    const headerProps: CardHeaderProps = hProps;
    expect(headerProps).toEqual(hProps);
    const cProps = {
      children: 'This is some content',
      className: 'test-class',
      'data-testid': 'testid',
    };
    const contentProps = cProps;
    expect(contentProps).toEqual(cProps);
    const fProps = {
      children: 'This is a footer',
      className: 'test-class',
      'data-testid': 'testid',
    };
    const footerProps = fProps;
    expect(footerProps).toEqual(fProps);
    const props = {
      children: 'I am a card!',
      className: 'test-class',
      'data-testid': 'testid',
    };
    const cardProps = props;
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

  it("should have 'aria-label' attributes with correct values", () => {
    const cardAriaLabel = 'my card';
    const cardHeaderAriaLabel = 'my card header';
    const cardContentAriaLabel = 'my card content';
    const cardFooterAriaLabel = 'my card footer';
    const cardHeaderTitle = 'Cool Card';
    const cardContent = 'This is some content';
    const cardFooter = 'This is a footer';
    const cardHeaderDataTestId = 'test-card-header';
    const dataTestId = 'test-card';
    render(
      <DotCard ariaLabel={cardAriaLabel} data-testid={dataTestId}>
        <DotCardHeader
          ariaLabel={cardHeaderAriaLabel}
          data-testid={cardHeaderDataTestId}
          title={cardHeaderTitle}
        />
        <DotCardContent ariaLabel={cardContentAriaLabel}>
          {cardContent}
        </DotCardContent>
        <DotCardFooter ariaLabel={cardFooterAriaLabel}>
          {cardFooter}
        </DotCardFooter>
      </DotCard>
    );
    const cardElement = screen.getByTestId(dataTestId);
    const cardHeaderTitleElement = screen.getByTestId(cardHeaderDataTestId);
    const cardContentElement = screen.getByText(cardContent);
    const cardFooterElement = screen.getByText(cardFooter);

    expect(cardElement).toHaveAttribute('aria-label', cardAriaLabel);
    expect(cardHeaderTitleElement).toHaveAttribute(
      'aria-label',
      cardHeaderAriaLabel
    );
    expect(cardContentElement).toHaveAttribute(
      'aria-label',
      cardContentAriaLabel
    );
    expect(cardFooterElement).toHaveAttribute(
      'aria-label',
      cardFooterAriaLabel
    );
  });
});
