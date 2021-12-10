import React from 'react';
import styled from 'styled-components';
import {
  DotBreadcrumbs,
  DotButton,
  DotChip,
  DotIconButton,
} from '@digital-ai/dot-components';
import { LinkUnderline } from '../../../../libs/dot-components/src/lib/components/link/Link';
import { Divider } from '@material-ui/core';

export const DemoBreadcrumbs = () => {
  const itemsOne = [
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

  const itemsTwo = [
    ...itemsOne,
    {
      text: 'Releases 2',
      underline: 'none' as LinkUnderline,
    },
    {
      text: 'Releases 3333',
      underline: 'none' as LinkUnderline,
    },
    {
      text: 'Releases 4444444444',
      underline: 'none' as LinkUnderline,
    },
    {
      text: 'Releases 5555555555555555555',
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
        <DotBreadcrumbs items={itemsOne} expansionMenu={true} />
        <DotChip>TEMPLATE</DotChip>
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
      <Divider />
      <StyledDemoBreadcrumbsStyled className="action-toolbar-wrapper">
        <DotBreadcrumbs items={itemsTwo} expansionMenu={true} />
        <DotChip>TEMPLATE</DotChip>
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
    margin: 20px 0;
    display: grid;
    grid-template-columns: minmax(200px, auto) auto 1fr;
    align-items: center;

    .breadcrumbs-labels {
      display: flex;
      align-items: center;
    }

    .action-toolbar {
      min-width: 450px;
      display: flex;
      justify-content: flex-end;
    }
  }
`;
