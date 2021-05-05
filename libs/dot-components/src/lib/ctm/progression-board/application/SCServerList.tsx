import React, { ReactNode, useState } from 'react';
import { CommonProps } from '../../../components/CommonProps';
import { useStylesWithRootClass } from '../../../components/useStylesWithRootClass';
import { DrawerItem } from '../DrawerItem';
import { AvatarProps, DotIconButton } from '../../../components';
import { getFullPayloadUrl } from '../progression/applicationFormHelper';
import { PayloadUrlDialog } from './PayloadUrlDialog';
import { sourceControls } from './data/sourceControls';
import { rootClassName, StyledScServerList } from './SCServerList.styles';

export interface ScServerListProps extends CommonProps {
  applicationName: string;
  basePayloadUrl: string;
  onDelete?: (id: string) => void;
  listItems: Array<ScServerListItem>;
}

export interface ScServerListItem {
  scId: string;
  scServerId: string;
  scServerName: string;
  scServerTitle: string;
}

export const ScServerList = ({
  applicationName,
  basePayloadUrl,
  className,
  'data-testid': dataTestId,
  onDelete,
  listItems,
}: ScServerListProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const [selectedListItem, setSelectedListItem] = useState<ScServerListItem>(
    null
  );

  const getPayloadUrl = (serverName: string): string =>
    getFullPayloadUrl(applicationName, basePayloadUrl, serverName);

  const onViewPayloadClick = (
    listItem: ScServerListItem
  ): (() => void) => (): void => setSelectedListItem(listItem);

  const onPayloadDialogClose = (): void => setSelectedListItem(null);

  const onItemDelete = (id: string) => () => onDelete(id);

  const getAvatarPropsFromListItem = (
    listItem: ScServerListItem
  ): AvatarProps => {
    if (listItem.scId in sourceControls) {
      const sourceControl = sourceControls[listItem.scId];
      return {
        alt: sourceControl.label,
        type: 'image',
        imageSrc: sourceControl.base64,
      };
    }
    return {
      alt: listItem.scId,
      type: 'icon',
      iconId: 'branch',
    };
  };

  const renderActionNode = (listItem: ScServerListItem): ReactNode => {
    const { scServerId, scServerName } = listItem;
    const isViewBtnDisabled = !scServerName || !getPayloadUrl(scServerName);
    const iconBtnElem = (
      <DotIconButton
        data-testid={`${dataTestId}-icon-btn-${scServerId}`}
        disabled={isViewBtnDisabled}
        iconId="webhook"
        key={scServerId}
        size="medium"
        titleTooltip="View payload URL"
        onClick={onViewPayloadClick(listItem)}
      />
    );
    if (onDelete) {
      return (
        <>
          {iconBtnElem}
          <DotIconButton
            data-testid={`${dataTestId}-delete-btn-${scServerId}`}
            iconId="delete"
            onClick={onItemDelete(scServerId)}
            titleTooltip="Click to delete"
          />
        </>
      );
    }
    return iconBtnElem;
  };

  const renderPayloadDialog = (): ReactNode => {
    const { scServerId, scServerName } = selectedListItem;
    return (
      <PayloadUrlDialog
        data-testid={`${dataTestId}-dialog-${scServerId}`}
        onClose={onPayloadDialogClose}
        payloadUrl={getPayloadUrl(scServerName)}
        serverId={scServerId}
      />
    );
  };

  return (
    <StyledScServerList className={rootClasses} data-testid={dataTestId}>
      {listItems?.map((listItem: ScServerListItem) => {
        const { scServerId, scServerTitle } = listItem;
        const avatarProps = listItem && getAvatarPropsFromListItem(listItem);
        return (
          <DrawerItem
            actionNode={renderActionNode(listItem)}
            avatarProps={avatarProps}
            className="source-control"
            contentText={scServerTitle}
            data-testid={`${dataTestId}-drawer-item-${scServerId}`}
            key={scServerId}
          />
        );
      })}
      {selectedListItem && renderPayloadDialog()}
    </StyledScServerList>
  );
};
