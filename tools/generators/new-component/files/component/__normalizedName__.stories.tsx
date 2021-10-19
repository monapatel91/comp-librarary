import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { <%=componentName%>, <%=propsName%> } from './<%=normalizedName%>';

export default {
  title: 'Components/<%=normalizedName%>',
  component: <%=componentName%>,
  argTypes: {
    className: {
      defaultValue: '<%=fileName%>',
    },
  },
} as Meta;

export const Default: Story<<%=propsName%>> = (args) => (
  <<%=componentName%> {...args} />
);
