describe('dot-components: ProgressionBoardWorkItemDrawer component', () => {
  before(() => {
    cy.visit(
      '/iframe.html?id=experimental-dotprogressionboardworkitemdrawer--default'
    );
  });

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-drawer-paper').and('be.visible');
  });

  describe('style decisions', () => {
    it('should use Typography for text', () => {
      cy.get('.drawer-content h3.MuiTypography-root').should(
        'have.css',
        'font-family',
        'LatoBold, sans-serif'
      );
      cy.get('.drawer-content h4.MuiTypography-root').should(
        'have.css',
        'font-family',
        'LatoBold, sans-serif'
      );
      cy.get('.drawer-content p.MuiTypography-root').should(
        'have.css',
        'font-family',
        'Lato, sans-serif'
      );
    });
  });
});
