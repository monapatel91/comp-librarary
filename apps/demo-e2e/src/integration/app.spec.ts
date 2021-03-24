describe('demo', () => {
  before(() => cy.visit('/'));

  it('should contain the sidebar', () => {
    cy.get('aside').should('have.class', 'dot-sidebar');
  });
});
