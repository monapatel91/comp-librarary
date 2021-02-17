describe('dot-components: Sidebar component', () => {
  before(() => cy.visit('/iframe.html?id=components-sidebar--default'));

  it('should have a dot- prefix', () => {
    cy.get('aside').should('have.class', 'dot-sidebar');
  });
});
