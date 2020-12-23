describe('dot-components: Menu component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=components-menu--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-menu');
  });
});
