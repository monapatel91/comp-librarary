import React from 'react';
import { render, screen } from '../../testing-utils';
import { DotSnackbarProvider } from './DotSnackbarProvider';
describe('<DotSnackbarProvider/>', () => {
  it('should render DotSnackbarProvider component', () => {
    render(
      <DotSnackbarProvider>
        <div>Test</div>
      </DotSnackbarProvider>
    );
    expect(screen.getByTestId('dot-snackbar-container')).toBeInTheDocument();
  });
});
