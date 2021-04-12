import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../testing-utils';
import { DotProgressionBoardWorkItemDrawer } from './ProgressionBoardWorkItemDrawer';
import {
  WorkItemDetailsType,
  WorkItemType,
} from './ProgressionBoardInterfaces';

const onPbWorkItemDrawerClose = () => console.log('Closed');
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
  owner: ['John Smith'],
  sourceSystemName: 'Jira',
  sourceSystemUrl: `http://localhost:8080/id=${workItem._id}`,
};

interface PbDrawerProps {
  onClose: () => void;
  workItem: WorkItemType;
  workItemDetails: WorkItemDetailsType;
  dataTestId: string;
}

const renderPbDrawer = (pbDrawerProps: PbDrawerProps) => {
  const { onClose, workItem, workItemDetails, dataTestId } =
    pbDrawerProps || {};
  render(
    <DotProgressionBoardWorkItemDrawer
      onClose={onClose}
      workItem={workItem}
      workItemDetails={workItemDetails}
      data-testid={dataTestId}
    />
  );
};

describe('ProgressionBoardDrawer', () => {
  const dataTestId = 'test-pb-workitem-drawer';

  describe('basic render', () => {
    beforeEach(() => {
      renderPbDrawer({
        onClose: onPbWorkItemDrawerClose,
        workItem,
        workItemDetails,
        dataTestId,
      });
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
        .querySelector('.wi-external-key span');
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
      const ownerName = owner[0];
      const wiOwnerSpanElem = screen.getByText(ownerName);
      expect(wiOwnerSpanElem).toHaveAttribute('title', ownerName);
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

  describe('multiple workitem owners', () => {
    const owner = ['John Smith', 'Mike Tyson', 'Hugh Hefner', 'Will Smith'];
    const wiDetails = {
      ...workItemDetails,
      owner,
    };

    beforeEach(() =>
      renderPbDrawer({
        onClose: onPbWorkItemDrawerClose,
        workItem,
        workItemDetails: wiDetails,
        dataTestId,
      })
    );

    it('should render owner group avatar component with tooltip component, when multiple owners exist', async () => {
      const avatarGroup = screen.getByTestId(
        `${dataTestId}-owner-avatar-group`
      );
      const tooltip = screen.getByTestId(`${dataTestId}-owner-group-tooltip`);
      userEvent.hover(tooltip);
      const ownersTooltipContent = await screen.findByText(owner.join(', '));
      expect(tooltip).toBeVisible();
      expect(avatarGroup).toBeVisible();
      expect(ownersTooltipContent).toBeVisible();
    });

    it('should NOT render owner names when multiple owners exist', () => {
      expect(screen.queryByText(owner.join(', '))).not.toBeInTheDocument();
    });
  });
});
