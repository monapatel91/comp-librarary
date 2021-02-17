import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { screen } from '@testing-library/dom';
import { DotCard } from './Card';
import { DotCardHeader } from './CardHeader';
import { DotCardContent } from './CardContent';
import { DotCardFooter } from './CardFooter';

describe('DotCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DotCard>Look Mom! I'm a card!!!</DotCard>);
    expect(baseElement).toBeTruthy();
  });
  it('should have a title and subheader', () => {
    render(
      <DotCard>
        <DotCardHeader title="Hello World" subheader="Well hello there" />
      </DotCard>
    );
    expect(screen.getByText('Hello World')).toHaveClass('MuiTypography-h2');
    expect(screen.getByText('Well hello there')).toHaveClass(
      'MuiTypography-body1'
    );
  });
  it('should have content', () => {
    render(
      <DotCard>
        <DotCardContent>This is some content</DotCardContent>
      </DotCard>
    );
    expect(screen.getByText('This is some content')).toBeVisible();
  });
  it('should have a footer', () => {
    render(
      <DotCard>
        <DotCardFooter>This is a footer</DotCardFooter>
      </DotCard>
    );
    expect(screen.getByText('This is a footer')).toBeVisible();
  });
});
