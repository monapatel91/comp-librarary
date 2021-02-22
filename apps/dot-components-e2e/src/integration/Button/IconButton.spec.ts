describe('dot-components: Icon Button component', () => {
  before(() => cy.visit('/iframe.html?id=components-icon-button--default'));

  it('should have a dot- prefix', () => {
    cy.get('button').should('have.class', 'dot-icon-btn');
  });

  it('should render the component', () => {
    cy.get('button').should('have.class', 'dot-icon-btn');
  });
});
