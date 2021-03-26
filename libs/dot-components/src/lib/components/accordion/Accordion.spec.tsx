import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { screen, waitFor } from '@testing-library/dom';

import { DotAccordion, AccordionProps } from './Accordion';
import { DotIcon } from '../icon/Icon';

describe('Accordion', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <DotAccordion summary="Testing Render">Testing Render</DotAccordion>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have unchanged API', () => {
    const props = {
      actions: 'accordion-test',
      children: 'My Accordion',
      className: 'dot-accordion',
      'data-testid': 'dot-accordion',
      defaultExpanded: false,
      disabled: false,
      startIcon: <DotIcon iconId="notification-bell" />,
      summary: 'Sample Summary Text',
    };
    const accordionProps: AccordionProps = {
      actions: 'accordion-test',
      children: 'My Accordion',
      className: 'dot-accordion',
      'data-testid': 'dot-accordion',
      defaultExpanded: false,
      disabled: false,
      startIcon: <DotIcon iconId="notification-bell" />,
      summary: 'Sample Summary Text',
    };
    expect(accordionProps).toEqual(props);
  });

  it('should render text for summary', () => {
    const { baseElement } = render(
      <DotAccordion summary="Sample text for Summary">Testing</DotAccordion>
    );
    const summaryText = baseElement.querySelector('.dot-accordion-summary');
    expect(summaryText).toBeVisible();
    expect(summaryText).toHaveTextContent('Sample text for Summary');
  });

  it('should render startIcon inside Accordion Summary', () => {
    render(
      <DotAccordion
        data-testid="dot-accordion"
        startIcon={
          <DotIcon data-testid="test-icon" iconId="notification-bell" />
        }
        summary="Start Icon properly renders"
      >
        Testing
      </DotAccordion>
    );
    const icon = screen.getByTestId('test-icon');
    expect(screen.getByTestId('dot-accordion')).toContainElement(icon);
  });

  it('should not render startIcon when icon is not present', () => {
    render(
      <DotAccordion
        data-testid="test-accordion"
        summary="Start Icon properly renders"
      >
        Testing
      </DotAccordion>
    );
    waitFor(() => {
      const icon = screen.getByTestId('test-icon');
      expect(screen.getByTestId('test-accordion-summary')).not.toContainElement(
        icon
      );
    });
  });
});
