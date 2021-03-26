describe('dot-components: Typography component', () => {
  before(() => cy.visit('/iframe.html?id=experimental-typography--default'));

  it('should have a dot- prefix', () => {
    cy.get('h1').should('have.class', 'dot-typography');
  });
});
