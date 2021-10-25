import React from 'react';
import { render } from '../../testing-utils';
import { <%=propsName%>, <%=componentName%> } from './<%=normalizedName%>';

describe('<%=componentName%>', () => {
  it('should have unchanged API', () => {
    const props = {
      ariaLabel: '<%=fileName%> component',
      className: '<%=fileName%>',
      'data-testid': '<%=fileName%>-testid',
    };
    const componentProps: <%=propsName%> = props;
    expect(componentProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = render(
      <<%=componentName%> />
    );
    expect(baseElement).toBeTruthy();
  });
});
