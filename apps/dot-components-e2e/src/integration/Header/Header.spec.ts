describe('dot-components: Header component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=header--primary'));

  it('should have a dot- prefix', () => {
    cy.get('header').should('have.class', 'dot-header');
  });
});
