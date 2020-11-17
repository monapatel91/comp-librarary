describe('dot-components: Stage Card component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=components-stage-card--primary'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-stage-card');
  });

  it('should render the component', () => {
    cy.get('h6').should('contain', 'Some name');
    cy.get('i').should('have.class', 'icon-options');
  });
});
