import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { fireEvent, screen, waitFor } from '@testing-library/dom';
import { WorkItemTooltip } from './WorkItemTooltip';

const testTip = (
  <WorkItemTooltip
    isSplit={false}
    value_goal="improve"
    title="test-title"
    external_key="test-101"
    child={<h1>Test Child</h1>}
  />
);

describe('WorkItemTooltip', () => {
  it('should render successfully', () => {
    const { baseElement } = render(testTip);
    expect(baseElement).toBeTruthy();
  });

  it('should be hidden when not hovered', () => {
    render(testTip);
    const tip = screen.queryByRole('tooltip');
    expect(tip).not.toBeInTheDocument();
  });

  it('should be visible while hovering', async () => {
    render(testTip);
    const h1 = screen.getByText('Test Child');
    fireEvent.mouseOver(h1);
    await waitFor(() => screen.getByRole('tooltip'));
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
  });
});
