import React from 'react';

const Workitem = (props) => {
  const {
    _id,
    value_goal,
    isSelected,
    isEmphazied,
    isSplit,
    selectWorkitem,
    deSelectWorkitem,
  } = props;

  const isEmphaziedClass = isEmphazied ? 'emphasized' : '';
  const splitClass = isSplit ? 'split' : '';
  const hoverClass = isSelected ? 'hover' : '';
  const className = `${value_goal} ${isEmphaziedClass} ${splitClass} ${hoverClass}`;

  const url = `/flow/workitem_detail?id=${_id}`;

  return (
    <li
      className={className}
      onClick={() => (location.href = url)}
      onMouseEnter={selectWorkitem}
      onMouseLeave={deSelectWorkitem}
    />
  );
};

class SmartWorkitem extends React.Component {
  render() {
    return <Workitem {...this.props} />;
  }
}

export default SmartWorkitem;
