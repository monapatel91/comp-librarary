describe('dot-components: Auto Complete component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=autocomplete--auto-complete'));

  it('should render the component', () => {
    cy.get('input').should('have.class', 'MuiAutocomplete-input');
  });
});
