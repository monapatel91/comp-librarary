describe('dot-components: Input Text Field component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=experimental-input-text--default')
  );

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-text-field');
  });

  it('should render the component', () => {
    cy.get('input').should('have.class', 'MuiInputBase-input');
  });
});
