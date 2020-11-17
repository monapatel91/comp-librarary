describe('dot-components: Auto Complete component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=components-auto-complete--primary'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-autocomplete');
  });

  it('should render the component', () => {
    cy.get('input').should('have.class', 'MuiAutocomplete-input');
  });
});
