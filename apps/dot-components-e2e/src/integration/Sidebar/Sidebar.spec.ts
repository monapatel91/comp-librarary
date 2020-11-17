describe('dot-components: Sidebar component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sidebar--primary'));

  it('should have a dot- prefix', () => {
    cy.get('aside').should('have.class', 'dot-sidebar');
  });
});
