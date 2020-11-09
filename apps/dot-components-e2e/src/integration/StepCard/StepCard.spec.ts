describe('dot-components: Stage Card component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=dotstagecard--stage-card'));

  it('should render the component', () => {
    cy.get('h6').should('contain', 'Some name');
    cy.get('i').should('have.class', 'icon-options');
  });
});
