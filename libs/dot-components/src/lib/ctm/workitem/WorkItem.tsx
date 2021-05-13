import React, { forwardRef, MouseEvent, MutableRefObject, useRef } from 'react';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { CommonProps } from '../../components/CommonProps';
import { DotIcon } from '../../components';
import {
  SelectWorkItem,
  WorkItemType,
} from '../progression-board/ProgressionBoardInterfaces';
import { WorkItemTooltip } from './WorkItemTooltip';

export interface WorkItemProps extends CommonProps {
  baseUrl: string;
  isFaded: boolean;
  isSelected: boolean;
  selectWorkItem: SelectWorkItem;
  workitem: WorkItemType;
}

export const WorkItem = forwardRef(
  (
    {
      baseUrl,
      className,
      'data-testid': dataTestId,
      isFaded,
      isSelected,
      selectWorkItem,
      workitem,
    }: WorkItemProps,
    ref: MutableRefObject<HTMLElement>
  ) => {
    const {
      _id,
      isSplit,
      isEmphasized,
      value_goal,
      title,
      external_key,
    } = workitem;
    const {
      allowSelection,
      selectWorkItem: selectItem,
      hoverWorkItem,
      unHoverWorkItem,
    } = selectWorkItem;
    const rootClasses = useStylesWithRootClass(
      className,
      value_goal,
      isEmphasized ? 'emphasized' : '',
      isSelected ? 'selected' : '',
      isFaded ? 'fade' : ''
    );

    const workItemElem = useRef(null);

    const onItemMouseEnter = () => hoverWorkItem(_id);
    const onItemMouseLeave = () => unHoverWorkItem();
    const onItemClick = (_: MouseEvent<HTMLLIElement>): void => {
      if (allowSelection) {
        selectItem({
          ...workitem,
          boardColumnRectRight: ref.current.getBoundingClientRect().right,
        });
      } else {
        window.open(baseUrl + `/flow/workitem_detail?id=${_id}`, '_blank');
      }
    };

    const workItem = (
      <span
        className={rootClasses}
        data-testid={dataTestId}
        onClick={onItemClick}
        onMouseEnter={isSplit ? onItemMouseEnter : null}
        onMouseLeave={isSplit ? onItemMouseLeave : null}
        ref={workItemElem}
      >
        <DotIcon
          data-testid={dataTestId && 'icon-circle'}
          fontSize="inherit"
          iconId={isSplit ? 'circle-half-full' : 'circle'}
        />
      </span>
    );

    return (
      <WorkItemTooltip
        child={workItem}
        isSplit={isSplit}
        value_goal={value_goal}
        title={title}
        external_key={external_key}
      />
    );
  }
);
