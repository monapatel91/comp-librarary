describe('dot-components: Locally Paginated Table component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=experimental-paginated-table-local--default')
  );

  it('should have a dot- prefix', () => {
    cy.get('table').should('have.class', 'dot-table');
  });

  it('should render the component', () => {
    cy.get('thead').should('have.class', 'MuiTableHead-root');
    cy.get('tbody').should('have.class', 'MuiTableBody-root');
    cy.get('th').should('contain', 'Title');
  });
});
