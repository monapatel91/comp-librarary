import React, { MouseEvent } from 'react';
import { action } from '@storybook/addon-actions';
import { number, select } from '@storybook/addon-knobs';
import { DotBreadcrumbs, LinkUnderlineOptions } from './Breadcrumbs';

export default {
  component: DotBreadcrumbs,
  title: 'Breadcrumbs',
};

export const breadcrumb = () => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    action('onClick');
  };
  const underlineOptions = {
    Always: 'always',
    Hover: 'hover',
    None: 'none',
  };

  const groupId = 'Options';
  const maxItems = number('Max Items', 5, {}, groupId);
  const underline = select(
    'Underline',
    underlineOptions,
    'hover',
    groupId
  ) as LinkUnderlineOptions;
  const dummyItems = [
    {
      href: '#',
      onClick: handleClick,
      text: 'Link 1',
      underline: underline,
    },
    {
      href: '#',
      onClick: handleClick,
      text: 'Link 2',
      underline: underline,
    },
    {
      href: '#',
      onClick: handleClick,
      text: 'Link 3',
      underline: underline,
    },
    {
      href: '#',
      onClick: handleClick,
      text: 'Link 4',
      underline: underline,
    },
    {
      text: 'Link 5',
    },
  ];
  return <DotBreadcrumbs items={dummyItems} maxItems={maxItems} />;
};
