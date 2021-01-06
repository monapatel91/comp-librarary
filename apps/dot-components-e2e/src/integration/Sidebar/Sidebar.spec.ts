describe('dot-components: Sidebar component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=experimental-sidebar--default'));

  it('should have a dot- prefix', () => {
    cy.get('aside').should('have.class', 'dot-sidebar');
  });
});
