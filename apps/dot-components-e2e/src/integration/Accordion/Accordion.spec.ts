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

describe('dot-components: Accordion component with noWrap = true', () => {
  before(() =>
    cy.visit('/iframe.html?id=components-accordion--default&args=noWrap:true')
  );

  describe('functionality', () => {
    it('summary text should be truncated', () => {
      cy.get('.dot-accordion-summary p').should(
        'have.class',
        'MuiTypography-noWrap'
      );
      cy.get('.dot-accordion-summary p')
        .should('have.css', 'white-space', 'nowrap')
        .and('have.css', 'overflow', 'hidden')
        .and('have.css', 'text-overflow', 'ellipsis');
    });

    it('summary text should have a title prop', () => {
      cy.get('.dot-tooltip')
        .should('have.attr', 'title')
        .and('match', /I seek the means to fight injustice/);
    });
  });
});

describe('Agility theme style decisions', () => {
  before(() =>
    cy.visit('/iframe.html?id=components-accordion--default&theme=agility-dark')
  );

  it('should apply the correct theme colors', () => {
    cy.get('.MuiPaper-root').should(
      'have.css',
      'background-color',
      'rgb(36, 68, 81)'
    );
  });
});
