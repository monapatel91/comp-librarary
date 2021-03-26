describe('dot-components: Table component', () => {
  before(() =>
    cy.visit('/iframe.html?id=components-table--locally-paginated-table')
  );

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-table');
  });

  it('should render the component', () => {
    cy.get('table').should('have.class', 'dot-table');
    cy.get('thead').should('have.class', 'MuiTableHead-root');
    cy.get('thead').should('have.class', 'dot-thead');
    cy.get('tbody').should('have.class', 'MuiTableBody-root');
    cy.get('tbody').should('have.class', 'dot-tbody');
    cy.get('th').should('contain', 'Name');
    cy.get('th').should('have.class', 'dot-th');
    cy.get('tr').should('have.class', 'dot-tr');
    cy.get('td').should('have.class', 'dot-td');
  });

  describe('style decisions', () => {
    it('table header', () => {
      cy.get('.MuiTableCell-head')
        .should('have.css', 'color', 'rgb(59, 72, 92)')
        .and('have.css', 'line-height', '24px')
        .and('have.css', 'font-size', '12px')
        .and('have.css', 'text-align', 'left');
    });

    it('table body', () => {
      cy.get('.MuiTableCell-body')
        .should('have.css', 'color', 'rgb(59, 72, 92)')
        .and('have.css', 'line-height', '16px')
        .and('have.css', 'font-size', '12px')
        .and('have.css', 'margin-bottom', '3px');
    });
  });

  it('should have a pagination caption with a dot- prefix', () => {
    cy.get('p').should('contain', 'Rows per page:');
    cy.get('p').should('have.class', 'dot-typography');
  });
});
