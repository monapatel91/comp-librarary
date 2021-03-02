describe('dot-components: Menu component', () => {
  before(() => cy.visit('/iframe.html?id=components-menu--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-menu');
  });

  describe('style decisions', () => {
    it('ul has correct size constraints and overflow handling', () => {
      cy.get('ul.MuiList-root')
        .should('have.css', 'min-width', '112px')
        .and('have.css', 'max-width', '280px')
        .and('have.css', 'overflow', 'auto');
    });
  });
});
