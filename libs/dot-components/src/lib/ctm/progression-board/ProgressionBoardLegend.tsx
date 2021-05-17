import React from 'react';
import { Typography } from '@material-ui/core';
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
    iconId: 'rogue-commits',
    title: 'Rogue Commits',
  },
  {
    iconId: 'file-dotted',
    title: 'Delivery Forecast',
  },
];

export interface ProgressionBoardLegendProps extends CommonProps {
  /** Array of legend items to display */
  items?: Array<LegendItem>;
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
          <Typography variant="body2">{item.title}</Typography>
        </li>
      ))}
    </StyledProgressionLegend>
  );
};
