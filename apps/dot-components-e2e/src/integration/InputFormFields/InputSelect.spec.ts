describe('dot-components: Input Select Field component', () => {
  before(() => cy.visit('/iframe.html?id=experimental-input-select--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-select-field');
  });

  it('should render the component', () => {
    cy.get('select').should('have.class', 'MuiSelect-select');
    cy.get('select').should('contain', 'Option');
  });
});
