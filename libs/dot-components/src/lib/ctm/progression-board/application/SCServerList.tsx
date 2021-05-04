import React, { ReactNode, useState } from 'react';
import { CommonProps } from '../../../components/CommonProps';
import { useStylesWithRootClass } from '../../../components/useStylesWithRootClass';
import { SCServer } from '../ProgressionBoardInterfaces';
import { DrawerItem } from '../DrawerItem';
import { DotIconButton } from '../../../components';
import { getFullPayloadUrl } from '../progression/applicationFormHelper';
import { rootClassName, StyledScServerList } from './SCServerList.styles';
import { PayloadUrlDialog } from './PayloadUrlDialog';

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
    return (
      <PayloadUrlDialog
        data-testid={`${dataTestId}-dialog-${id}`}
        onClose={onPayloadDialogClose}
        payloadUrl={getPayloadUrl(name)}
        serverId={id}
      />
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
