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
  const classes = `${value_goal} ${isEmphaziedClass} ${splitClass} ${hoverClass}`;

  const url = `/flow/workitem_detail?id=${_id}`;

  return (
    <li
      className={classes}
      onClick={() => (location.href = url)}
      onMouseEnter={selectWorkitem}
      onMouseLeave={deSelectWorkitem}
    />
  );
};

class SmartWorkitem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.selectWorkitem = this.selectWorkitem.bind(this);
    this.deSelectWorkitem = this.deSelectWorkitem.bind(this);
    this.state = {isSelected: false};
  }

  selectWorkitem() {
    this.setState({isSelected: true});
  }

  deSelectWorkitem() {
    this.setState({isSelected: false});
  }

  render() {
    return <Workitem {...this.props}
                     selectWorkitem={this.selectWorkitem}
                     deSelectWorkitem={this.deSelectWorkitem}
                     isSelected={this.state.isSelected}
    />;
  }
}

export default SmartWorkitem;
