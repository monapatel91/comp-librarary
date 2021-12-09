import React from 'react';
import styled, { css } from 'styled-components';
import {
  DotBreadcrumbs,
  DotButton,
  DotChip,
  DotIconButton,
} from '@digital-ai/dot-components';
import { LinkUnderline } from '../../../../libs/dot-components/src/lib/components/link/Link';

export const DemoBreadcrumbs = () => {
  const items = [
    {
      text: 'Home',
      href: '#/',
      underline: 'hover' as LinkUnderline,
    },
    {
      text: 'My Folder',
      href: '#/',
      underline: 'hover' as LinkUnderline,
    },
    {
      text: 'Releases',
      underline: 'none' as LinkUnderline,
    },
  ];

  return (
    <>
      <h2>First issue</h2>
      <p>
        Resize screen until collapse appears, clicking on collapsed button shows
        nothing and few warnings on console
      </p>
      <StyledDemoBreadcrumbsStyled className="action-toolbar-wrapper">
        <div className="breadcrumbs-labels">
          <DotBreadcrumbs items={items} expansionMenu={true} />
          <DotChip>TEMPLATE</DotChip>
        </div>
        <div className="action-toolbar">
          <div className="action-toolbar-actions">
            <DotButton>fake button</DotButton>
            <DotButton>another button</DotButton>
          </div>
          <DotIconButton
            color="inherit"
            data-testid="help-icon-button"
            iconId="help"
            iconSize="small"
            size="medium"
            tooltip="Open documentation page related to this page in a new browser tab"
          />
        </div>
      </StyledDemoBreadcrumbsStyled>
    </>
  );
};

const StyledDemoBreadcrumbsStyled = styled.div`
  &.action-toolbar-wrapper {
    display: flex;
    align-items: center;

    .breadcrumbs-labels {
      display: flex;
      align-items: center;
    }

    .action-toolbar {
      display: flex;
      flex-grow: 1;
      align-items: center;
      justify-content: flex-end;

      .action-toolbar-actions {
        margin-left: 104px; //13*8px
        display: flex;
      }
    }
  }
`;
