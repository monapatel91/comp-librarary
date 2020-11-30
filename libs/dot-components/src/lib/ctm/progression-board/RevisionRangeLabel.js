import React from 'react';
// import ReactTooltip from 'react-tooltip';

export default (props) => (
  <div>
    <span>Revisions: </span>
    <a
      href={props.revurl}
      data-tip
      data-for={props.revurl}
      className="tooltip-top"
    >
      <title
        id={props.revurl}
        className="tooltip-nowrap"
        effect="solid"
        type="dark"
        multiline={true}
      >
        <span>{props.revisionRangeLabel}</span>
      </title>
      {props.revisionRangeLabel}
    </a>
  </div>
);
