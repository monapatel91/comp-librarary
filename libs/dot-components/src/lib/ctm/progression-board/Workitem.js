import React from 'react';

const Workitem = (props) => {
  const {
    _id,
    value_goal,
    isEmphazied,
    isSplit,
    selectWorkitem,
    deSelectWorkitem,
    selectedWorkitem
  } = props;

  const isEmphaziedClass = isEmphazied ? 'emphasized' : '';
  const splitClass = isSplit ? 'split' : '';
  const hoverClass = _id === selectedWorkitem ? 'hover' : '';
  const classes = `${value_goal} ${isEmphaziedClass} ${splitClass} ${hoverClass}`;

  const url = `/flow/workitem_detail?id=${_id}`;

  const hoevrThing = () => {
    selectWorkitem(_id);
  };

  return (
    <li
      className={classes}
      onClick={() => (location.href = url)}
      onMouseEnter={hoevrThing}
      onMouseLeave={deSelectWorkitem}

    />
  );
};

export default Workitem;