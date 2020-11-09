describe('dot-components: Step Card component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=dotstepcard--step-card'));

  it('should render the component', () => {
    cy.get('h6').should('contain', 'Some name');
    cy.get('i').should('have.class', 'icon-options');
  });
});
