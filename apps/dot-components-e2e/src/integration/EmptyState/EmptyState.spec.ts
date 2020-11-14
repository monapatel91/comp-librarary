describe('dot-components: Empty State component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=empty-state--primary'));

  it('should render the component', () => {
    cy.get('svg').should('have.class', 'empty-state-image');
    cy.get('h4').should('contain', 'No Data');
    cy.get('p').should('contain', 'That is unexpected');
    cy.get('button').should('contain', 'Add Data');
  });
});
