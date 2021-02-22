describe('dot-components: Empty State component', () => {
  before(() => cy.visit('/iframe.html?id=components-empty-state--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-empty-state');
  });

  it('should render the component', () => {
    cy.get('svg').should('have.class', 'empty-state-image');
    cy.get('h2').should('contain', 'No Data');
    cy.get('p').should('contain', 'That is unexpected');
    cy.get('button').should('contain', 'Add Data');
  });

  describe('style decisions', () => {
    it('spacing and sizing', () => {
      cy.get('div.dot-empty-state')
        .should('have.css', 'max-width', '600px')
        .and('have.css', 'text-align', 'center');
    });

    it('graphic spacing and sizing', () => {
      cy.get('svg.empty-state-image')
        .should('have.css', 'min-height', '239px')
        .and('have.css', 'margin-bottom', '40px');
    });

    it('typography size and spacing', () => {
      cy.get('h2.MuiTypography-h2')
        .should('have.css', 'font-size', '20px')
        .and('have.css', 'margin-bottom', '8px');

      cy.get('p.MuiTypography-body1')
        .should('have.css', 'font-size', '14px')
        .and('have.css', 'margin-bottom', '4px');
    });
  });
});
