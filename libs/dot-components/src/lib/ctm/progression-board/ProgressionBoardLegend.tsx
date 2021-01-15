import React, { Component } from 'react';
import './legends.scss';

export const DotProgressionBoardLegend = () => {
  return (
    <div className="legend-columns">
      <div className="legend-column">
        <ul className="legends">
          <li className="workitems">
            <span className="maintain"></span>
            <span className="title">Defect</span>
          </li>
          <li className="workitems">
            <span className="maintain split"></span>
            <span className="title">Trailing Commits (Defect)</span>
          </li>
          <li className="workitems">
            <span className="improve"></span>
            <span className="title">Story</span>
          </li>
          <li className="workitems">
            <span className="improve split"></span>
            <span className="title">Trailing Commits (Story)</span>
          </li>
          <li className="workitems">
            <span className="unknown"></span>
            <span className="title">Other Workitem</span>
          </li>
          <li className="workitems">
            <i className="icon-error-solid"></i>
            <span className="title">Test Coverage</span>
          </li>
          <li className="workitems">
            <i className="icon-info-solid"></i>
            <span className="title">Quality Information</span>
          </li>
        </ul>
      </div>
      <div className="legend-column">
        <ul className="legends">
          <li className="workitems">
            <i className="icon-rogue-commits"></i>
            <span className="title">Rogue Commits</span>
          </li>
          <li className="workitems">
            <i className="icon-pending-clock"></i>
            <span className="title">Pending Activity</span>
          </li>
          <li className="workitems">
            <i className="icon-file-dotted"></i>
            <span className="title">Delivery Forecast</span>
          </li>
          <li className="workitems">
            <i className="icon-error-outlines"></i>
            <span className="title">Activity or Control failed</span>
          </li>
          <li className="workitems">
            <i className="icon-check-solid"></i>
            <span className="title">Completed Activities</span>
          </li>
          <li className="workitems">
            <i className="icon-thumbs-down"></i>
            <span className="title">Failing Tests</span>
          </li>
          <li className="workitems">
            <i className="icon-lock"></i>
            <span className="title">Security Violations</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DotProgressionBoardLegend;
