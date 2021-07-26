describe('dot-components: DotSnackbar component', () => {
  before(() => cy.visit('/iframe.html?id=experimental-dotsnackbar--default'));

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

  it('should have a font-size of 16px ', () => {
    cy.get('.MuiSvgIcon-fontSizeSmall').should('have.css', 'font-size', '16px');
  });

  it('should have a top positioning of 112px', () => {
    cy.get('.MuiAlert-root').should('have.css', 'top', '112px');
  });
});
