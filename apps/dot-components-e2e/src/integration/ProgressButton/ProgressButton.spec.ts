describe('dot-components: ProgressButton component', () => {
  before(() =>
    cy.visit('/iframe.html?id=experimental-progressbutton--default')
  );

  it('should have a dot- prefix', () => {
    cy.get('button').should('have.class', 'dot-progress-button');
  });
});
