import React from 'react';
import { fireEvent, render, screen } from '../../testing-utils';
import { DotTooltip, TooltipProps, tooltipPlacement } from './Tooltip';
import { DotIconButton } from '../button/IconButton';
const deleteIcon = <DotIconButton iconId="delete"></DotIconButton>;
describe('Tooltip', () => {
  it('should have unchanged API', () => {
    const props = {
      children: deleteIcon,
      className: 'test-class',
      'data-testid': 'dot-tooltip',
      placement: 'bottom' as tooltipPlacement,
      title: 'Delete',
    };
    const tooltiprProps: TooltipProps = props;
    expect(tooltiprProps).toEqual(props);
  });
  it('should render successfully', () => {
    const { baseElement } = render(
      <DotTooltip title="Delete">{deleteIcon}</DotTooltip>
    );
    expect(baseElement).toBeTruthy();
  });
  it('should render tooltip if title is provided', () => {
    render(
      <DotTooltip data-testid="test-tooltip" title="Delete">
        {deleteIcon}
      </DotTooltip>
    );
    const tooltipElm = screen.queryByTestId('test-tooltip');
    expect(tooltipElm).toBeVisible();
  });
  it('should not render tooltip if title is not provided', () => {
    render(<DotTooltip data-testid="test-tooltip">{deleteIcon}</DotTooltip>);
    const tooltipElm = screen.queryByTestId('test-tooltip');
    expect(tooltipElm).toBeNull();
  });
});
