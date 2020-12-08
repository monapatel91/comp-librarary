import React from 'react';

export default (props) => (
  <div>
    <span>Revisions: </span>
    <a
      href={props.baseUrl + props.revurl}
      data-tip
      data-for={props.revurl}
      className="tooltip-top"
      target="_blank"
      rel="noreferrer"
    >
      <title
        id={props.revurl}
        className="tooltip-nowrap"
        effect="solid"
        type="dark"
        // multiline={true}
      >
        <span>{props.revisionRangeLabel}</span>
      </title>
      {props.revisionRangeLabel}
    </a>
  </div>
);
