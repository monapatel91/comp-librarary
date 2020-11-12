describe('dot-components: Table component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=switch--switch'));

  it('should render the component', () => {
    cy.get('table').should('contain', 'Sample Label');
    cy.get('tbody').should('contain', 'Sample Label');
    cy.get('thead').should('contain', 'Sample Label');
    cy.get('tr').should('contain', 'Sample Label');
    cy.get('td').should('contain', 'Sample Label');
  });
});
