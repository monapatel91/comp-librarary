describe('dot-components: Icon Button component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=components-icon-button--primary'));

  it('should have a dot- prefix', () => {
    cy.get('button').should('have.class', 'dot-icon-btn');
  });

  it('should render the component', () => {
    cy.get('button').should('have.class', 'dot-icon-btn');
  });
});
