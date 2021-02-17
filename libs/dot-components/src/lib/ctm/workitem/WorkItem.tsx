import React from 'react';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { CommonProps } from '../../components/CommonProps';
import {
  SelectWorkItem,
  WorkItemType,
} from '../progression-board/ProgressionBoardInterfaces';

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
  const { _id, isSplit, isEmphasized, value_goal } = workitem;
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

  return (
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
};

export default WorkItem;
