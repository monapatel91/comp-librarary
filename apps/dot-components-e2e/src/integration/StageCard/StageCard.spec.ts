describe('dot-components: Stage Card component', () => {
  before(() => cy.visit('/iframe.html?id=experimental-stage-card--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-stage-card');
  });

  it('should render the component', () => {
    cy.get('h6').should('contain', 'Some name');
    cy.get('i').should('have.class', 'icon-options');
  });
});
