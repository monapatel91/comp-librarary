import React, { Fragment, ReactNode } from 'react';
import {
  DotList,
  DotListItem,
  SourceControl,
  TicketSystem,
} from '@digital-ai/dot-components';
import { rootClassName, StyledDotDialog } from './DemoAppFormResult.styles';

export interface DemoAppFormResultProps {
  applicationName: string;
  createAnother: boolean;
  onClose: () => void;
  sourceControls: Array<SourceControl>;
  ticketSystem: TicketSystem;
}

export const DemoAppFormResult = ({
  applicationName,
  createAnother,
  onClose,
  sourceControls,
  ticketSystem,
}: DemoAppFormResultProps) => {
  const renderServerListItem = (id, title): ReactNode => (
    <DotListItem
      key={id}
      title="Source Control Server"
      text={title}
      iconId="server"
    />
  );

  const renderSourceControlListItems = (sourceControl): ReactNode =>
    sourceControl.servers.map(({ id, title }) =>
      renderServerListItem(id, title)
    );

  const renderTicketSystemListItems = (selectedTicketSystem): ReactNode =>
    selectedTicketSystem.servers.map(({ id, title }) =>
      renderServerListItem(id, title)
    );

  return (
    <StyledDotDialog
      className={rootClassName}
      onCancel={onClose}
      onSubmit={onClose}
      open={true}
      title="Form Results"
    >
      <DotList>
        <>
          <DotListItem
            className="application-name"
            title="Application Name"
            text={applicationName}
            iconId="apps"
          />
          {sourceControls.map((sourceControl) => (
            <Fragment key={sourceControl.id}>
              <DotListItem
                className="source-control"
                title="Source Control"
                key={sourceControl.id}
                text={sourceControl.title}
                iconId="branch"
              />
              <DotList className="form-child-list">
                {renderSourceControlListItems(sourceControl)}
              </DotList>
            </Fragment>
          ))}
          <DotListItem
            className="ticket-system"
            title="Ticketing System"
            text={ticketSystem.title}
            iconId="task"
          />
          <DotList className="form-child-list">
            {renderTicketSystemListItems(ticketSystem)}
          </DotList>
          <DotListItem
            title="Create another"
            text={`Create another: ${createAnother}`}
            iconId="add"
          />
        </>
      </DotList>
    </StyledDotDialog>
  );
};
