describe('dot-components: ProgressionBoardApplicationDrawer component', () => {
  before(() => {
    cy.visit(
      '/iframe.html?id=experimental-progressionboardapplicationdrawer--default'
    );
  });

  it('should display drawer', () => {
    cy.get('.dot-drawer-paper').should('be.visible');
  });
});
