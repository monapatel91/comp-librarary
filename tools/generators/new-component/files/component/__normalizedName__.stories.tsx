import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { <%=componentName%>, <%=propsName%> } from './<%=normalizedName%>';

export default {
  title: 'Experimental/<%=normalizedName%>',
  component: <%=componentName%>,
  argTypes: {
    dataTestId: {
      defaultValue: '<%=fileName%>-test-id',
    },
  },
} as Meta;

export const Default: Story<<%=propsName%>> = (args) => (
  <<%=componentName%> {...args} />
);
