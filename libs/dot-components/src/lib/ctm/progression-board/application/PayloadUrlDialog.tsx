import React from 'react';
import { CommonProps } from '../../../components/CommonProps';
import { useStylesWithRootClass } from '../../../components/useStylesWithRootClass';
import {
  rootClassName,
  StyledPayloadUrlDialog,
} from './PayloadUrlDialog.styles';
import { DialogButtonProps, DotLink, DotTypography } from '../../../components';
import { PayloadUrlTextInput } from './PayloadUrlTextInput';

export interface PayloadUrlDialogProps extends CommonProps {
  onClose: () => void;
  payloadUrl: string;
  serverId: string;
}

const cancelButtonProps: DialogButtonProps = {
  label: 'OK',
};

export const PayloadUrlDialog = ({
  className,
  'data-testid': dataTestId,
  onClose,
  payloadUrl,
  serverId,
}: PayloadUrlDialogProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <StyledPayloadUrlDialog
      cancelButtonProps={cancelButtonProps}
      className={rootClasses}
      data-testid={dataTestId}
      hasPrimaryAction={false}
      onCancel={onClose}
      open={true}
      onSubmit={onClose}
      title="Configure WebHook"
    >
      <div className="dialog-content">
        <DotTypography variant="body1" className="dialog-text-1">
          Copy this Webhook URL and configure Webhook in your SCM tool (GitHub
          or GitLab) so that Release with Delivery Insights can track all your
          SCM commits and link your commits to your work items.
        </DotTypography>
        <DotTypography variant="body1">
          For more information about Webhook configuration, see&nbsp;
          <DotLink
            href="https://docs.xebialabs.com/release/how-to/release-with-delivery-insights-an-illustration/"
            underline="none"
          >
            Release with Delivery Insights Documentation
          </DotLink>
        </DotTypography>
        <PayloadUrlTextInput
          className="pu-input"
          data-testid={`pu-input-${serverId}`}
          inputId="modalPayloadUrlInput"
          payloadUrl={payloadUrl}
        />
      </div>
    </StyledPayloadUrlDialog>
  );
};
