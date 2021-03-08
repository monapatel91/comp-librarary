import React, { useRef } from 'react';
import { Typography } from '@material-ui/core';
import { CommonProps } from '../../components/CommonProps';
import { DotIconButton } from '../../components/button/IconButton';
import { DotAvatar } from '../../components/avatar/Avatar';
import { WorkItemType } from './ProgressionBoardInterfaces';
import {
  rootClassName,
  StyledProgressionBoardDrawer,
} from './ProgressionBoardDrawer.styles';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { StyledDotDrawer } from './ProgressionBoardDrawer.styles';

export interface ProgressionBoardDrawerProps extends CommonProps {
  onClose: () => void;
  width?: number;
  workItem: WorkItemType;
}

const DRAWER_MIN_WIDTH = 320;

export const ProgressionBoardDrawer = ({
  className,
  'data-testid': dataTestId,
  onClose,
  width = DRAWER_MIN_WIDTH,
  workItem,
}: ProgressionBoardDrawerProps) => {
  const containerElem = useRef(null);
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const wiTypeIconRootClasses = useStylesWithRootClass(
    rootClassName,
    'work-item-type-circle',
    workItem ? workItem.value_goal : '',
    workItem ? (workItem.isSplit ? 'split' : '') : '',
    workItem ? (workItem.isEmphasized ? 'emphasized' : '') : ''
  );

  const isOpen = containerElem && workItem && workItem._id !== '';

  const getDrawerWidth = (isOpened) =>
    isOpened
      ? `${width > DRAWER_MIN_WIDTH ? width : DRAWER_MIN_WIDTH}px`
      : '0px';

  const renderDrawerContent = () => {
    if (workItem) {
      const { isSplit } = workItem;
      return (
        <>
          <div className="drawer-header">
            <DotAvatar
              alt="Workitem Type"
              className={wiTypeIconRootClasses}
              data-testid={`${dataTestId}-type-circle`}
              iconId={isSplit ? 'circle-half-full' : 'circle'}
            />
            <Typography
              variant="h2"
              className="wi-external-key"
              title={workItem.external_key}
            >
              {workItem.external_key}
            </Typography>
            <DotIconButton
              data-testid={`${dataTestId}-close-icon`}
              iconId="close"
              titleTooltip="Click to close"
              onClick={onClose}
            />
          </div>
          <div className="drawer-content">
            <Typography className="drawer-content-title" variant="h2">
              {workItem.title}
            </Typography>
            <Typography variant="h3">Description</Typography>
            <div className="drawer-content-description">
              <Typography variant="body1">
                <em>To be implemented</em>
              </Typography>
            </div>
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <StyledProgressionBoardDrawer
      className={rootClasses}
      data-testid={dataTestId}
      ref={containerElem}
    >
      <StyledDotDrawer
        ModalProps={{ container: containerElem.current }}
        open={isOpen}
        width={getDrawerWidth(isOpen)}
        variant="permanent"
      >
        {renderDrawerContent()}
      </StyledDotDrawer>
    </StyledProgressionBoardDrawer>
  );
};
