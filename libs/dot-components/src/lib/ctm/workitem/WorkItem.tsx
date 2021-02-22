import React from 'react';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { CommonProps } from '../../components/CommonProps';
import {
  SelectWorkItem,
  WorkItemType,
} from '../progression-board/ProgressionBoardInterfaces';
import { Tooltip } from '@material-ui/core';

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

  const truncate = (str: string) => {
    return str.length > 20 ? str.substring(0, 17) + '...' : str;
  }

  const buildTooLtip = () => {
    const truncated_title = truncate(title)
    return(
      <div>
        ({value_goal}) {external_key}
        <br />
        {truncated_title}
      </div>
    )
  }

  return (
    <Tooltip title={buildTooLtip()}>
        <li
          className={rootClasses}
          data-testid={dataTestId}
          onClick={() =>
            window.open(baseUrl + `/flow/workitem_detail?id=${_id}`, '_blank')
          }
          onMouseEnter={hoverThing}
          onMouseLeave={deSelectWorkitem}
        />
    </Tooltip>
  );
};

export default WorkItem;
