describe('dot-components: Locally Paginated Table component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=paginated-table-local--paginated-table')
  );

  it('should render the component', () => {
    cy.get('table').should('have.class', 'dot-table');
    cy.get('thead').should('have.class', 'MuiTableHead-root');
    cy.get('tbody').should('have.class', 'MuiTableBody-root');
    cy.get('th').should('contain', 'Title');
  });
});
