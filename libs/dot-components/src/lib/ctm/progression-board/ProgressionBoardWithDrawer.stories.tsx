import React, { CSSProperties, useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import styled, { css } from 'styled-components';
import { DotProgressionBoard, ProgressionBoardProps } from './ProgressionBoard';
import { DotProgressionBoardDrawer } from './ProgressionBoardDrawer';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { WorkItemSelection, WorkItemType } from './ProgressionBoardInterfaces';
import { sampleDetailsData } from './sample-data/sampleDetailsData';
import samplePhases from './sample-data/sampleData';

export default {
  title: 'Experimental/ProgressionBoardWithDrawer',
  component: DotProgressionBoard,
  argTypes: {
    theme: { defaultValue: 'agility-light' },
    phases: { defaultValue: samplePhases },
    baseUrl: { defaultValue: 'http://localhost:8080' },
  },
} as Meta;

const rootClassName = 'pb-with-drawer';

const StyledProgressionBoardWithDrawer = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      display: inline-flex;
      padding: 30px;
      border: 1px solid ${theme.palette.layer['50']};
      position: relative;
      overflow: hidden;
    }
  `}
`;

interface ProgressionBoardWithDrawerProps extends ProgressionBoardProps {
  /* Width of the drawer in pixels. If not set, default value is assumed. */
  drawerWidth?: number;
}

/* Wrapper component which simulates progression board display when used together with drawer. Used only for story example. */
const ProgressionBoardWithDrawer = ({
  className,
  'data-testid': dataTestId,
  drawerWidth = 320,
  ...args
}: ProgressionBoardWithDrawerProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const [selectedWorkItem, setSelectedWorkItem] = useState(null);
  const [workItemDetails, setWorkItemDetails] = useState(null);

  const onWorkItemChange = (workItem: WorkItemType): void => {
    setSelectedWorkItem(workItem);
    /* Simulate async API call */
    setTimeout(() => {
      const detailsItem = sampleDetailsData.find(
        (item) => item.id === workItem._id
      );
      if (detailsItem) {
        setWorkItemDetails({
          ...detailsItem,
          sourceSystemUrl: `${detailsItem.sourceSystemUrl}${detailsItem.id}`,
        });
      }
    }, 1500);
  };

  const onDrawerClose = (): void => setSelectedWorkItem(null);

  const workItemSelection: WorkItemSelection = {
    onWorkItemChange,
    selectedWorkItem,
    drawerWidth,
    drawerOffsetFromBoard: 30,
  };

  const drawerPaperProps = {
    style: {
      position: 'absolute',
    } as CSSProperties,
  };

  return (
    <StyledProgressionBoardWithDrawer
      className={rootClasses}
      data-testid={dataTestId}
    >
      <DotProgressionBoard workItemSelection={workItemSelection} {...args} />
      <DotProgressionBoardDrawer
        onClose={onDrawerClose}
        width={drawerWidth}
        workItem={selectedWorkItem}
        workItemDetails={workItemDetails}
        drawerPaperProps={drawerPaperProps}
      />
    </StyledProgressionBoardWithDrawer>
  );
};

export const Default: Story<ProgressionBoardWithDrawerProps> = (args) => (
  <ProgressionBoardWithDrawer {...args} />
);
