import React, { useState } from 'react';
import styled from 'styled-components';
import {
  DotBreadcrumbs,
  DotButton,
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
      text: 'Releases 5',
      underline: 'none' as LinkUnderline,
    },
  ];

  const [breadcrumbs, setBreadcrumbs] = useState(itemsOne);

  const updateBreadcrumbs = () => {
    setBreadcrumbs([]);
    setTimeout(() => setBreadcrumbs(itemsTwo), 2000);
  };

  return (
    <>
      <StyledDemoBreadcrumbsStyled className="action-toolbar-wrapper">
        <DotBreadcrumbs items={breadcrumbs} expansionMenu={true} />
        <div className="action-toolbar">
          <div className="action-toolbar-actions">
            <DotButton onClick={updateBreadcrumbs}>
              update breadcrumbs
            </DotButton>
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
    grid-template-columns: minmax(200px, 1fr) auto;
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
