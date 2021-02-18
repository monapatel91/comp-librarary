describe('dot-components: Auto Complete component', () => {
  before(() => cy.visit('/iframe.html?id=experimental-auto-complete--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-autocomplete');
  });

  it('should render the component', () => {
    cy.get('input').should('have.class', 'MuiAutocomplete-input');
  });
});
