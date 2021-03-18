import React from 'react';
import { screen } from '@testing-library/dom';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { DotProgressionBoardDrawer } from './ProgressionBoardDrawer';
import { WorkItemDetailsType } from './ProgressionBoardInterfaces';

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

const workItemDetails: WorkItemDetailsType = {
  id: workItem._id,
  description: 'Test description',
  owner: 'John Smith',
  sourceSystemName: 'Jira',
  sourceSystemUrl: `http://localhost:8080/id=${workItem._id}`,
};

describe('ProgressionBoardDrawer', () => {
  let dataTestId;

  beforeEach(() => {
    dataTestId = 'test-pb-drawer';
    render(
      <DotProgressionBoardDrawer
        onClose={onPbDrawerClose}
        workItem={workItem}
        workItemDetails={workItemDetails}
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

  it('should render correct description', () => {
    const { description } = workItemDetails;
    const wiDescElem = screen.getByText(description).closest('div');
    expect(wiDescElem).toHaveClass('drawer-content-description');
  });

  it('should render owner name with correct title and content', () => {
    const { owner } = workItemDetails;
    const wiOwnerSpanElem = screen.getByText(owner);
    expect(wiOwnerSpanElem).toHaveAttribute('title', owner);
  });

  it('should render source system name with correct title and content', () => {
    const { sourceSystemName } = workItemDetails;
    const wiOwnerSpanElem = screen.getByText(sourceSystemName);
    expect(wiOwnerSpanElem).toHaveAttribute('title', sourceSystemName);
  });

  it('should render source system button element', () => {
    const wiSourceUrlButton = screen.getByTestId(
      `${dataTestId}-source-open-icon-button`
    );
    expect(wiSourceUrlButton).toHaveClass('source-open-btn');
    expect(wiSourceUrlButton).toBeEnabled();
  });
});
