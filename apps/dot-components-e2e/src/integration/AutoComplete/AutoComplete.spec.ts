describe('dot-components: Auto Complete component', () => {
  before(() => cy.visit('/iframe.html?id=experimental-auto-complete--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-autocomplete');
  });

  it('should render the component', () => {
    cy.get('input').should('have.class', 'MuiAutocomplete-input');
  });

  describe('style decisions', () => {
    it('sizing is correct', () => {
      cy.get('div.dot-autocomplete div.MuiAutocomplete-inputRoot')
        .should('have.css', 'padding-right', '39px')
        .and('have.css', 'margin-bottom', '4px');
    });

    it('border is correct', () => {
      cy.get('div.dot-autocomplete div.MuiAutocomplete-inputRoot').should(
        'have.css',
        'padding-right',
        '39px'
      );
    });

    it('end adornment is styled correctly', () => {
      cy.get('div.dot-autocomplete div.MuiAutocomplete-endAdornment')
        .should('have.css', 'right', '9px')
        .and('have.css', 'top', '4.81667px');
    });
  });
});
