import React from 'react';
import { parseRevURL } from '../progression-board/PackageVersion';

export default (props) => (
  <div>
    <span>Revisions: </span>
    <a
      href={props.baseUrl + parseRevURL(props.rev_from, props.rev_to_id)}
      data-tip
      data-for={parseRevURL(props.rev_from, props.rev_to_id)}
      className="tooltip-top"
      target="_blank"
      rel="noreferrer"
    >
      <title
        id={parseRevURL(props.rev_from, props.rev_to_id)}
        className="tooltip-nowrap"
        effect="solid"
        type="dark"
      >
        <span>{props.revisionRangeLabel}</span>
      </title>
      {props.revisionRangeLabel}
    </a>
  </div>
);
