import React from 'react';

export const WorkItem = (props) => {
  const {
    _id,
    value_goal,
    isEmphazied,
    isSplit,
    selectWorkitem,
    deSelectWorkitem,
    selectedWorkitem,
    baseUrl,
  } = props;

  const isEmphaziedClass = isEmphazied ? 'emphasized' : '';
  const splitClass = isSplit ? 'split' : '';
  const hoverClass = _id === selectedWorkitem ? 'hover' : '';
  const classes = `${value_goal} ${isEmphaziedClass} ${splitClass} ${hoverClass}`;
  const fullUrl = baseUrl + `/flow/workitem_detail?id=${_id}`;

  const hoevrThing = () => {
    selectWorkitem(_id);
  };

  return (
    <li
      className={classes}
      onClick={
        () => window.open(fullUrl, "_blank")
      }
      onMouseEnter={hoevrThing}
      onMouseLeave={deSelectWorkitem}
    />
  );
};
