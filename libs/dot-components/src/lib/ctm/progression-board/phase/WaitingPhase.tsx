import React from 'react';
import { CommonProps } from '../../../components/CommonProps';
import { useStylesWithRootClass } from '../../../components/useStylesWithRootClass';
import { DotIcon, DotTypography } from '../../../components';
import { rootClassName, StyledWaitingPhase } from './WaitingPhase.styles';

export const WaitingPhase = ({
  className,
  'data-testid': dataTestId,
}: CommonProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <StyledWaitingPhase className={rootClasses} data-testid={dataTestId}>
      <div className="waiting-card">
        <DotIcon
          className="waiting-icon"
          data-testid={`${dataTestId}-waiting-icon`}
          iconId="pending-clock"
        />
        <DotTypography variant="body2">
          To see stories and defects here, configure a source control webhook,
          make a commit and use the Track code changes task to update the board.
        </DotTypography>
      </div>
    </StyledWaitingPhase>
  );
};
