import React from 'react';

import { DotBreadcrumbs } from '@digital-ai/dot-components';
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
      <DotBreadcrumbs items={items} expansionMenu={true} />
    </>
  );
};
