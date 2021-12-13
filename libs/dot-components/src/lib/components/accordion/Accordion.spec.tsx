import React from 'react';
import { render, screen, waitFor } from '../../testing-utils';
import { DotAccordion, AccordionProps } from './Accordion';
import { DotIcon } from '../icon/Icon';
import { DotTypography } from '../typography/Typography';

const onChange = jest.fn();
const consoleSpy = jest.spyOn(global.console, 'warn');

describe('Accordion', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render successfully', () => {
    const { baseElement } = render(
      <DotAccordion summary="Testing Render">Testing Render</DotAccordion>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have unchanged API', () => {
    const props = {
      actions: 'accordion-test',
      ariaLabel: 'my avatar group',
      children: 'My Accordion',
      className: 'dot-accordion',
      'data-testid': 'dot-accordion',
      defaultExpanded: false,
      disabled: false,
      expanded: false,
      hasElevation: false,
      noWrap: false,
      onChange: onChange,
      square: true,
      startIcon: <DotIcon iconId="notification-bell" />,
      summary: 'Sample Summary Text',
    };
    const accordionProps: AccordionProps = props;
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

  it("should have 'aria-label' attribute with correct value", () => {
    const ariaLabel = 'my label';
    render(
      <DotAccordion ariaLabel={ariaLabel} summary="Test summary">
        Testing
      </DotAccordion>
    );
    const accordionElement = screen.getByTestId('dot-accordion');
    expect(accordionElement).toHaveAttribute('aria-label', ariaLabel);
  });

  it('should have a deprecation warning if `defaultExpanded` is provided', () => {
    render(
      <DotAccordion
        defaultExpanded={true}
        summary={<DotTypography>Test summary</DotTypography>}
      >
        Testing
      </DotAccordion>
    );
    expect(consoleSpy).toBeCalled();
  });

  it('should have a deprecation warning if `onChange` is provided but not `expanded`', () => {
    render(
      <DotAccordion
        onChange={onChange}
        summary={<DotTypography>Test summary</DotTypography>}
      >
        Testing
      </DotAccordion>
    );
    expect(consoleSpy).toBeCalled();
  });

  it('should NOT have a deprecation warning if `onChange` and `expanded` are provided', () => {
    render(
      <DotAccordion
        expanded={true}
        onChange={onChange}
        summary={<DotTypography>Test summary</DotTypography>}
      >
        Testing
      </DotAccordion>
    );
    expect(consoleSpy).not.toBeCalled();
  });
});
