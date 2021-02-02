describe('dot-components: Inline Edit component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=experimental-inline-edit--default')
  );

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'inline-edit-wrapper');
  });

  it('should render the component', () => {
    cy.get('input').should('have.class', 'MuiOutlinedInput-inputAdornedEnd');
  });
});
