import { render } from '@testing-library/react';

import AlertBanner from './AlertBanner';

describe('AlertBanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AlertBanner />);
    expect(baseElement).toBeTruthy();
  });
});
