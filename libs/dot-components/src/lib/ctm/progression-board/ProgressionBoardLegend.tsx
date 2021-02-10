import React from 'react';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { DotIcon } from '../../components/icon/Icon';
import {
  rootClassName,
  StyledProgressionLegend,
} from './ProgressionBoardLegend.styles';

export const DotProgressionBoardLegend = () => {
  const rootClasses = useStylesWithRootClass(rootClassName);
  return (
    <StyledProgressionLegend className={rootClasses}>
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
            <DotIcon fontSize="small" iconId="error-solid" />
            <span className="title">Test Coverage</span>
          </li>
          <li className="workitems">
            <DotIcon fontSize="small" iconId="info-solid" />
            <span className="title">Quality Information</span>
          </li>
        </ul>
      </div>
      <div className="legend-column">
        <ul className="legends">
          <li className="workitems">
            <DotIcon fontSize="small" iconId="rogue-commits" />
            <span className="title">Rogue Commits</span>
          </li>
          <li className="workitems">
            <DotIcon fontSize="small" iconId="pending-clock" />
            <span className="title">Pending Activity</span>
          </li>
          <li className="workitems">
            <DotIcon fontSize="small" iconId="file-dotted" />
            <span className="title">Delivery Forecast</span>
          </li>
          <li className="workitems">
            <DotIcon fontSize="small" iconId="error-outlines" />
            <span className="title">Activity or Control failed</span>
          </li>
          <li className="workitems">
            <DotIcon fontSize="small" iconId="check-solid" />
            <span className="title">Completed Activities</span>
          </li>
          <li className="workitems">
            <DotIcon fontSize="small" iconId="thumbs-down" />
            <span className="title">Failing Tests</span>
          </li>
          <li className="workitems">
            <DotIcon fontSize="small" iconId="lock" />
            <span className="title">Security Violations</span>
          </li>
        </ul>
      </div>
    </StyledProgressionLegend>
  );
};

export default DotProgressionBoardLegend;
