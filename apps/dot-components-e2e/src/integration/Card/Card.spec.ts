describe('dot-components: Card component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=card--primary'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-card');
  });

  it('should render the component', () => {
    cy.get('h6').should('contain', 'Hello World');
    cy.get('i').should('have.class', 'icon-options');
  });
});
