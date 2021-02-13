import React from 'react';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import {
  SelectWorkItem,
  WorkItemType,
} from '../progression-board/ProgressionBoardInterfaces';

export interface WorkItemProps {
  baseUrl: string;
  selectWorkItem: SelectWorkItem;
  workitem: WorkItemType;
}

export const WorkItem = ({
  baseUrl,
  selectWorkItem,
  workitem,
}: WorkItemProps) => {
  const { _id, isSplit, isEmphasized, value_goal } = workitem;
  const { deSelectWorkitem, selectedWorkitem, selectWorkitem } = selectWorkItem;
  const rootClasses = useStylesWithRootClass(
    value_goal,
    isEmphasized ? 'emphasized' : '',
    isSplit ? 'split' : '',
    _id === selectedWorkitem ? 'hover' : ''
  );

  const hoverThing = () => {
    selectWorkitem(_id);
  };

  return (
    <li
      className={rootClasses}
      onClick={() =>
        window.open(baseUrl + `/flow/workitem_detail?id=${_id}`, '_blank')
      }
      onMouseEnter={hoverThing}
      onMouseLeave={deSelectWorkitem}
    />
  );
};

export default WorkItem;
