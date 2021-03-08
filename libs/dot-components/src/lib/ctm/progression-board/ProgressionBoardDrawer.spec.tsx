import React from 'react';
import { screen } from '@testing-library/dom';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { ProgressionBoardDrawer } from './ProgressionBoardDrawer';

const onPbDrawerClose = () => console.log('Closed');
const workItem = {
  _id: '5b9c4fc12979930dbb0f13c5',
  change_count: 1,
  external_id: 'Story:1243',
  external_key: 'S-01031',
  isSplit: true,
  title: 'Accounting Integration - Spike',
  value_goal: 'improve',
};

describe('ProgressionBoardDrawer', () => {
  let dataTestId;

  beforeEach(() => {
    dataTestId = 'test-pb-drawer';
    render(
      <ProgressionBoardDrawer
        onClose={onPbDrawerClose}
        workItem={workItem}
        data-testid={dataTestId}
      />
    );
  });

  it('should render successfully', () => {
    expect(screen).toBeTruthy();
  });

  it('should render work item circle with appropriate class', () => {
    const spanElem = screen.getByTestId(`${dataTestId}-type-circle`);
    expect(spanElem).toBeVisible();
    expect(spanElem).toHaveClass('improve');
  });

  it('should render work item external key with correct title and content', () => {
    const { external_key } = workItem;
    const externalKeyElem = screen
      .getByTestId(dataTestId)
      .querySelector('.wi-external-key');
    expect(externalKeyElem).toBeVisible();
    expect(externalKeyElem).toHaveTextContent(external_key);
    expect(externalKeyElem).toHaveAttribute('title', external_key);
  });

  it('should render close icon button', () => {
    const closeIconBtn = screen.getByTestId(`${dataTestId}-close-icon`);
    expect(closeIconBtn).toBeVisible();
    expect(closeIconBtn).toBeEnabled();
  });

  it("should render correct work item's title", () => {
    const { title } = workItem;
    const wiTitleElem = screen.getByText(title);
    expect(wiTitleElem).toHaveClass('drawer-content-title');
  });
});
