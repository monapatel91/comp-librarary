import React, { ReactNode, useState } from 'react';
import { CommonProps } from '../../../components/CommonProps';
import { useStylesWithRootClass } from '../../../components/useStylesWithRootClass';
import { DotInputText } from '../../../components';
import { copyTextToClipboard } from '../helper';
import { CopyPayloadButton } from './CopyPayloadButton';

export interface PayloadUrlTextInputProps extends CommonProps {
  inputId: string;
  payloadUrl: string;
}

export const PayloadUrlTextInput = ({
  className,
  'data-testid': dataTestId,
  inputId,
  payloadUrl,
}: PayloadUrlTextInputProps) => {
  const rootClasses = useStylesWithRootClass(
    'payload-url-text-input',
    className
  );

  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

  const onCopyClick = async (): Promise<void> => {
    try {
      await copyTextToClipboard(payloadUrl);
      setIsTooltipVisible(true);
    } catch (_) {
      return;
    }
  };

  const onTooltipClose = (): void => setIsTooltipVisible(false);

  const renderCopyButton = (): ReactNode => {
    const isDisabled = !payloadUrl;
    return (
      <CopyPayloadButton
        data-testid={dataTestId}
        isTooltipOpen={isTooltipVisible}
        isDisabled={isDisabled}
        onButtonClick={payloadUrl && onCopyClick}
        onTooltipClose={onTooltipClose}
      />
    );
  };

  return (
    <DotInputText
      className={rootClasses}
      data-testid={dataTestId}
      endIcon={renderCopyButton()}
      id={inputId}
      label="Payload URL"
      name="payloadUrl"
      readOnly={true}
      value={payloadUrl}
    />
  );
};
