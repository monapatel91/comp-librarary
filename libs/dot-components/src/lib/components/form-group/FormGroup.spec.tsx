import React from 'react';
import { render } from '@testing-library/react';

import { DotFormGroup } from './FromGroup';

describe('FormGroup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <DotFormGroup>
        <div>test</div>
      </DotFormGroup>
    );
    expect(baseElement).toBeTruthy();
  });
});
