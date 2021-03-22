describe('dot-components: Table component', () => {
  before(() => cy.visit('/iframe.html?id=components-table--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-table');
  });

  it('should render the component', () => {
    cy.get('thead').should('have.class', 'MuiTableHead-root');
    cy.get('tbody').should('have.class', 'MuiTableBody-root');
    cy.get('th').should('contain', 'Title');
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
});
