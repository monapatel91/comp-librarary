describe('dot-components: Snackbar component', () => {
  before(() => cy.visit('/iframe.html?id=components-snackbar--default'));

  it('should have a positioning of top-right', () => {
    cy.get('.MuiSnackbar-root').within(($el) => {
      cy.wrap($el.hasClass('MuiSnackbar-anchorOriginTopRight')).should(
        'eq',
        true
      );
    });
  });

  it('should have a severity level', () => {
    cy.get('.MuiAlert-message').within(() => {
      cy.get('span').should('have.attr', 'aria-label', 'success');
    });
  });

  it('should have a max-width of 500px', () => {
    cy.get('.MuiAlert-root').should('have.css', 'max-width', '500px');
  });
  it('should be placed 8px below actionbar', () => {
    cy.get('.MuiAlert-root').should('have.css', 'margin-top', '108px');
  });
});
