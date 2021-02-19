import React from 'react';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { DotIcon } from '../../components/icon/Icon';
import { CommonProps } from '../../components/CommonProps';
import {
  rootClassName,
  StyledProgressionLegend,
} from './ProgressionBoardLegend.styles';

interface LegendItem {
  className?: string;
  iconId: string;
  title: string;
}

export const legendItems: Array<LegendItem> = [
  {
    className: 'maintain',
    iconId: 'circle',
    title: 'Defect',
  },
  {
    className: 'maintain',
    iconId: 'circle-half-full',
    title: 'Trailing Commits (Defect)',
  },
  {
    className: 'improve',
    iconId: 'circle',
    title: 'Story',
  },
  {
    className: 'improve',
    iconId: 'circle-half-full',
    title: 'Trailing Commits (Story)',
  },
  {
    className: 'unknown',
    iconId: 'circle',
    title: 'Other Workitem',
  },
  {
    iconId: 'error-solid',
    title: 'Test Coverage',
  },
  {
    iconId: 'info-solid',
    title: 'Quality Information',
  },
  {
    iconId: 'rogue-commits',
    title: 'Rogue Commits',
  },
  {
    iconId: 'pending-clock',
    title: 'Pending Activity',
  },
  {
    iconId: 'file-dotted',
    title: 'Delivery Forecast',
  },
  {
    iconId: 'error-outlines',
    title: 'Activity or Control failed',
  },
  {
    iconId: 'check-solid',
    title: 'Completed Activities',
  },
  {
    iconId: 'thumbs-down',
    title: 'Failing Tests',
  },
  {
    iconId: 'lock',
    title: 'Security Violations',
  },
];

export interface ProgressionBoardLegendProps extends CommonProps {
  /** Array of legend items to display */
  items: Array<LegendItem>;
}

export const DotProgressionBoardLegend = ({
  className,
  'data-testid': dataTestId,
  items = legendItems,
}: ProgressionBoardLegendProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  return (
    <StyledProgressionLegend className={rootClasses} data-testid={dataTestId}>
      {items.map((item, index) => (
        <li className={item.className ? item.className : null} key={index}>
          <DotIcon fontSize="small" iconId={item.iconId} />
          {item.title}
        </li>
      ))}
    </StyledProgressionLegend>
  );
};

export default DotProgressionBoardLegend;
