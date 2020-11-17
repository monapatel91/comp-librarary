describe('dot-components: Empty State component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=components-empty-state--primary'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-empty-state');
  });

  it('should render the component', () => {
    cy.get('svg').should('have.class', 'empty-state-image');
    cy.get('h4').should('contain', 'No Data');
    cy.get('p').should('contain', 'That is unexpected');
    cy.get('button').should('contain', 'Add Data');
  });
});
