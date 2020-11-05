describe('dot-components: Input Select Field component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=atoms--input-select'));

  it('should render the component', () => {
    cy.get('select').should('have.class', 'MuiSelect-select');
    cy.get('select').should('contain', 'Option');
  });
});
