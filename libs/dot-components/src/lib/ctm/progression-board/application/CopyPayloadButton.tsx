import React from 'react';
import { Tooltip } from '@material-ui/core';
import { CommonProps } from '../../../components/CommonProps';
import { useStylesWithRootClass } from '../../../components/useStylesWithRootClass';
import { StyledTooltipContent } from '../ProgressionBoardDrawer.styles';
import { DotIconButton } from '../../../components';

export interface CopyPayloadButtonProps extends CommonProps {
  confirmationText?: string;
  isTooltipOpen: boolean;
  isDisabled: boolean;
  onButtonClick: () => void;
  onTooltipClose: () => void;
}

export const CopyPayloadButton = ({
  className,
  confirmationText = 'URL Copied!',
  'data-testid': dataTestId,
  isDisabled,
  isTooltipOpen,
  onButtonClick,
  onTooltipClose,
}: CopyPayloadButtonProps) => {
  const rootClasses = useStylesWithRootClass('copy-payload-button', className);

  return (
    <div className={rootClasses} data-testid={dataTestId}>
      <Tooltip
        data-testid={`${dataTestId}-tooltip`}
        leaveDelay={400}
        onClose={onTooltipClose}
        open={isTooltipOpen}
        title={
          <StyledTooltipContent variant="body2">
            {confirmationText}
          </StyledTooltipContent>
        }
      >
        <span>
          <DotIconButton
            data-testid={`${dataTestId}-copy-btn`}
            disabled={isDisabled}
            iconId="duplicate"
            size="small"
            titleTooltip="Click to copy to clipboard"
            onClick={onButtonClick}
          />
        </span>
      </Tooltip>
    </div>
  );
};
