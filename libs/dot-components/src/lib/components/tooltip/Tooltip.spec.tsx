import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '../../testing-utils';
import { DotTooltip, tooltipPlacement, TooltipProps } from './Tooltip';
import { DotIconButton } from '../button/IconButton';

describe('Tooltip', () => {
  const deleteIcon = <DotIconButton iconId="delete" />;
  const sampleTooltipTitle = 'My tooltip';
  const sampleDataTestId = 'test-tooltip';

  it('should have unchanged API', () => {
    const props = {
      children: deleteIcon,
      leaveDelay: 400,
      onClose: jest.fn(),
      open: true,
      className: 'test-class',
      'data-testid': 'dot-tooltip',
      placement: 'bottom' as tooltipPlacement,
      title: 'Delete',
    };
    const tooltipProps: TooltipProps = props;
    expect(tooltipProps).toEqual(props);
  });
  it('should render successfully', () => {
    const { baseElement } = render(
      <DotTooltip title="Delete">{deleteIcon}</DotTooltip>
    );
    expect(baseElement).toBeTruthy();
  });
  it('should render tooltip if title is provided', () => {
    render(
      <DotTooltip data-testid={sampleDataTestId} title="Delete">
        {deleteIcon}
      </DotTooltip>
    );
    const tooltipElm = screen.queryByTestId(sampleDataTestId);
    expect(tooltipElm).toBeVisible();
  });
  it('should not render tooltip if title is not provided', () => {
    render(
      <DotTooltip data-testid={sampleDataTestId}>{deleteIcon}</DotTooltip>
    );
    const tooltipElm = screen.queryByTestId(sampleDataTestId);
    expect(tooltipElm).toBeNull();
  });

  it("should be always opened when 'open' flag is set to true", async () => {
    // Use waitFor to avoid console error saying that an update to
    // ForwardRef(Popper) inside a test was not wrapped in act(...).
    await waitFor(() => {
      render(
        <DotTooltip open={true} title={sampleTooltipTitle}>
          {deleteIcon}
        </DotTooltip>
      );
    });
    expect(screen.getByText(sampleTooltipTitle)).toBeVisible();
  });

  it("should NOT be visible when 'open' flag is set to false", async () => {
    render(
      <DotTooltip
        data-testid={sampleDataTestId}
        open={false}
        title={sampleTooltipTitle}
      >
        {deleteIcon}
      </DotTooltip>
    );
    expect(screen.queryByText(sampleTooltipTitle)).not.toBeInTheDocument();
    const tooltipElm = screen.queryByTestId(sampleDataTestId);
    userEvent.hover(tooltipElm);
    await waitFor(() => {
      expect(screen.queryByText(sampleTooltipTitle)).not.toBeInTheDocument();
    });
  });

  // TO-DO: Fix this test
  it('should execute correct event handler upon close', async () => {
    const onCloseMock = jest.fn();
    render(
      <DotTooltip
        data-testid={sampleDataTestId}
        onClose={onCloseMock}
        title={sampleTooltipTitle}
      >
        {deleteIcon}
      </DotTooltip>
    );
    const tooltipElm = screen.queryByTestId(sampleDataTestId);
    expect(onCloseMock).toHaveBeenCalledTimes(0);
    userEvent.unhover(tooltipElm);
    await waitFor(() => {
      expect(screen.queryByText(sampleTooltipTitle)).not.toBeInTheDocument();
      // expect(onCloseMock).toHaveBeenCalledTimes(1);
    });
  });
});
