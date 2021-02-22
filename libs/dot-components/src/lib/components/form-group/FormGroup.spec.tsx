import React from 'react';
import { screen } from '@testing-library/dom';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';

import { DotFormGroup } from './FormGroup';

describe('FormGroup', () => {
  describe('Props', () => {
    it('should render successfully', () => {
      const { baseElement } = render(
        <DotFormGroup>
          <div>test</div>
        </DotFormGroup>
      );
      expect(baseElement).toBeTruthy();
    });
    describe('Props', () => {
      it('should have children prop', () => {
        render(
          <DotFormGroup ariaLabel="group" data-testid="test-group">
            <div>test</div>
          </DotFormGroup>
        );
        expect(screen.getByText('test')).toBeVisible();
      });
      it('should have ariaLabel prop', () => {
        render(
          <DotFormGroup ariaLabel="group">
            <div>test</div>
          </DotFormGroup>
        );
        const group = screen.getByRole('group');
        expect(group).toHaveAttribute('aria-label', 'group');
      });
      it('should have row prop', () => {
        render(
          <DotFormGroup ariaLabel="group" row={true}>
            <div>test</div>
          </DotFormGroup>
        );
        const group = screen.getByRole('group');
        expect(group).toHaveClass('MuiFormGroup-row');
      });
    });
  });
});
