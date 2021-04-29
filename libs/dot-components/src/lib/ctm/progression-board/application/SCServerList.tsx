import React, { ReactNode, useState } from 'react';
import { CommonProps } from '../../../components/CommonProps';
import { useStylesWithRootClass } from '../../../components/useStylesWithRootClass';
import { SCServer } from '../ProgressionBoardInterfaces';
import { DrawerItem } from '../DrawerItem';
import {
  DialogButtonProps,
  DotIconButton,
  DotLink,
  DotTypography,
} from '../../../components';
import { PayloadUrlTextInput } from './PayloadUrlTextInput';
import { getFullPayloadUrl } from '../progression/applicationFormHelper';
import {
  rootClassName,
  StyledPayloadDialog,
  StyledScServerList,
} from './SCServerList.styles';

export interface ScServerListProps extends CommonProps {
  applicationName: string;
  basePayloadUrl: string;
  onDelete?: (id: string) => void;
  servers: Array<SCServer>;
}

export const ScServerList = ({
  applicationName,
  basePayloadUrl,
  className,
  'data-testid': dataTestId,
  onDelete,
  servers,
}: ScServerListProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const [selectedServer, setSelectedServer] = useState<SCServer>(null);

  const getPayloadUrl = (serverName: string): string =>
    getFullPayloadUrl(applicationName, basePayloadUrl, serverName);

  const onViewPayloadClick = (scServer: SCServer): (() => void) => (): void =>
    setSelectedServer(scServer);

  const onPayloadDialogClose = (): void => setSelectedServer(null);

  const onItemDelete = (id: string) => () => onDelete(id);

  const renderActionNode = (scServer: SCServer): ReactNode => {
    const { id, name } = scServer;
    const isViewBtnDisabled = !name || !getPayloadUrl(name);
    const iconBtnElem = (
      <DotIconButton
        data-testid={`${dataTestId}-icon-btn-${id}`}
        disabled={isViewBtnDisabled}
        iconId="webhook"
        key={id}
        size="medium"
        titleTooltip="View payload URL"
        onClick={onViewPayloadClick(scServer)}
      />
    );
    if (onDelete) {
      return (
        <>
          {iconBtnElem}
          <DotIconButton
            data-testid={`${dataTestId}-delete-btn-${id}`}
            iconId="delete"
            onClick={onItemDelete(id)}
            titleTooltip="Click to delete"
          />
        </>
      );
    }
    return iconBtnElem;
  };

  const renderPayloadDialog = (): ReactNode => {
    const { id, name } = selectedServer;
    const cancelButtonProps: DialogButtonProps = {
      label: 'OK',
    };
    return (
      <StyledPayloadDialog
        className="payload-dialog"
        cancelButtonProps={cancelButtonProps}
        data-testid={`${dataTestId}-dialog-${id}`}
        hasPrimaryAction={false}
        open={true}
        onCancel={onPayloadDialogClose}
        onSubmit={onPayloadDialogClose}
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
              href="https://docs.xebialabs.com/v.10.1/release/how-to/release-with-delivery-insights-an-illustration/"
              underline="none"
            >
              Release with Delivery Insights Documentation
            </DotLink>
          </DotTypography>
          <PayloadUrlTextInput
            className="payload-url-input"
            data-testid={`${dataTestId}-pu-input-${id}`}
            inputId="modalPayloadUrlInput"
            payloadUrl={getPayloadUrl(name)}
          />
        </div>
      </StyledPayloadDialog>
    );
  };

  return (
    <StyledScServerList className={rootClasses} data-testid={dataTestId}>
      {servers?.map((server: SCServer) => {
        const { id, title } = server;
        return (
          <DrawerItem
            actionNode={renderActionNode(server)}
            data-testid={`${dataTestId}-drawer-item-${id}`}
            key={id}
            className="source-control"
            avatarAltText={title}
            avatarIcon="branch"
            contentText={title}
          />
        );
      })}
      {selectedServer && renderPayloadDialog()}
    </StyledScServerList>
  );
};
