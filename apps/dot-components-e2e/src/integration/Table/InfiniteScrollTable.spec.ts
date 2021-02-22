// Temporarily skipping these tests until we are ready to add this to the library
xdescribe('dot-components: Infinite Scroll Table component', () => {
  before(() =>
    cy.visit('/iframe.html?id=experimental-infinite-scroll--default')
  );

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-infinite-scroll');
  });

  it('should render the component', () => {
    cy.get('div').should('contain', 'Name');
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
