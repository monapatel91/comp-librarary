import React, { Fragment } from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { screen } from '@testing-library/dom';
import { DotCard } from './Card';
import { DotCardHeader } from './CardHeader';
import { DotCardContent } from './CardContent';
import { DotCardFooter } from './CardFooter';
import DotAvatar from '../avatar/Avatar';

describe('DotCard', () => {
  it('should render with all props', () => {
    const avatar = (
      <DotAvatar alt="Batman" size="small" data-testid="test-avatar" />
    );
    render(
      <DotCard className="custom-test-class" data-testid="test-card">
        <Fragment>
          <DotCardHeader
            data-testid="test-card-header"
            className="custom-test-class"
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
