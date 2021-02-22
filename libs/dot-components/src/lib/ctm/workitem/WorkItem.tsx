import React from 'react';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { CommonProps } from '../../components/CommonProps';
import {
  SelectWorkItem,
  WorkItemType,
} from '../progression-board/ProgressionBoardInterfaces';
import WorkItemTooltip from './WorkItemTooltip';

export interface WorkItemProps extends CommonProps {
  baseUrl: string;
  selectWorkItem: SelectWorkItem;
  workitem: WorkItemType;
}

export const WorkItem = ({
  baseUrl,
  className,
  'data-testid': dataTestId,
  selectWorkItem,
  workitem,
}: WorkItemProps) => {
  const { _id, isSplit, isEmphasized, value_goal, title, external_key } = workitem;
  const { deSelectWorkitem, selectedWorkitem, selectWorkitem } = selectWorkItem;
  const rootClasses = useStylesWithRootClass(
    className,
    value_goal,
    isEmphasized ? 'emphasized' : '',
    isSplit ? 'split' : '',
    _id === selectedWorkitem ? 'hover' : ''
  );

  const hoverThing = () => {
    selectWorkitem(_id);
  };

  const workItem = (
    <li
      className={rootClasses}
      data-testid={dataTestId}
      onClick={() =>
        window.open(baseUrl + `/flow/workitem_detail?id=${_id}`, '_blank')
      }
      onMouseEnter={hoverThing}
      onMouseLeave={deSelectWorkitem}
    />
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
};

export default WorkItem;
