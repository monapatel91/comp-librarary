describe('dot-components: Empty State component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=emptystate--empty-state'));

  it('should render the component', () => {
    cy.get('svg').should('have.class', 'empty-state-image');
    cy.get('h4').should('contain', 'No Data');
    cy.get('p').should(
      'contain',
      'There is no data because this is an empty state.'
    );
    cy.get('button').should('contain', 'Add Data');
  });
});
