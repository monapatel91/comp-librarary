import React, { useState } from 'react';
import {
  DotActionToolbar,
  DotBreadcrumbs,
  DotButton,
  DotIconButton,
  LinkUnderline,
} from '@digital-ai/dot-components';
import {
  rootClassName,
  StyledDemoBreadcrumbs,
} from './StyledDemoBreadcrumbs.styles';

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
    <StyledDemoBreadcrumbs className={rootClassName}>
      <DotActionToolbar className="action-toolbar">
        <DotBreadcrumbs
          className="breadcrumbs"
          items={breadcrumbs}
          expansionMenu={true}
        />
        <div className="actions">
          <DotButton onClick={updateBreadcrumbs}>Update Breadcrumbs</DotButton>
          <DotIconButton
            color="inherit"
            data-testid="help-icon-button"
            iconId="help"
            iconSize="small"
            size="medium"
            tooltip="Open documentation page related to this page in a new browser tab"
          />
        </div>
      </DotActionToolbar>
      <DotActionToolbar className="action-toolbar">
        <DotBreadcrumbs
          className="breadcrumbs"
          items={itemsTwo}
          expansionMenu={true}
        />
        <div className="actions">
          <DotButton>Fake button</DotButton>
          <DotButton>Another button</DotButton>
        </div>
      </DotActionToolbar>
    </StyledDemoBreadcrumbs>
  );
};
