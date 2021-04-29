import React from 'react';
import { Divider } from '@material-ui/core';
import { CommonProps } from '../../../components/CommonProps';
import { useStylesWithRootClass } from '../../../components/useStylesWithRootClass';
import { rootClassName, StyledEmptyPhases } from './EmptyPhases.styles';
import { DotTypography } from '../../../components';

export interface EmptyPhasesProps extends CommonProps {
  phaseNames: Array<string>;
}

export const EmptyPhases = ({
  className,
  'data-testid': dataTestId,
  phaseNames,
}: EmptyPhasesProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <StyledEmptyPhases className={rootClasses} data-testid={dataTestId}>
      {phaseNames?.map((phaseName: string, index: number) => {
        return (
          <div className="empty-phase" key={index}>
            <div className="header">
              <DotTypography className="header-title" variant="h3">
                <span title={phaseName}>{phaseName}</span>
              </DotTypography>
            </div>
            <Divider
              className="content-divider"
              data-testid={`${dataTestId}-divider-${index}`}
            />
          </div>
        );
      })}
    </StyledEmptyPhases>
  );
};
