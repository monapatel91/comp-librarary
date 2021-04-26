describe('dot-components: Accordion component', () => {
  before(() => cy.visit('/iframe.html?id=components-accordion--default'));
  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-accordion');
  });
  describe('style decisions', () => {
    it('summary text should use body1', () => {
      cy.get('.dot-accordion-summary p').should(
        'have.class',
        'MuiTypography-body1'
      );
    });
    it('summary text should be vertically aligned with icon', () => {
      cy.get('.MuiAccordionSummary-content p').should(
        'have.css',
        'padding',
        '2px 0px'
      );
    });

    it('icon has right margin', () => {
      cy.get('.dot-accordion-summary .dot-icon').should(
        'have.css',
        'margin-right',
        '4px'
      );
    });
  });
});
