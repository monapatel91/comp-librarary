import React from 'react';
import { CommonProps } from '../../../components/CommonProps';
import { useStylesWithRootClass } from '../../../components/useStylesWithRootClass';
import { DotIcon, DotTypography } from '../../../components';
import { rootClassName, StyledWaitingPhase } from './WaitingPhase.styles';
import { DEFAULT_APP_WAITING_MESSAGE } from '../application/data/constants';

export interface WaitingPhaseProps extends CommonProps {
  waitingMessage: string;
}

export const WaitingPhase = ({
  className,
  'data-testid': dataTestId,
  waitingMessage = DEFAULT_APP_WAITING_MESSAGE,
}: WaitingPhaseProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <StyledWaitingPhase className={rootClasses} data-testid={dataTestId}>
      <div className="waiting-card">
        <DotIcon
          className="waiting-icon"
          data-testid={`${dataTestId}-waiting-icon`}
          iconId="pending-clock"
        />
        <DotTypography variant="body2">{waitingMessage}</DotTypography>
      </div>
    </StyledWaitingPhase>
  );
};
