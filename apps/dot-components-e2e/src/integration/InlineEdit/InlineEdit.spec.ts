describe('dot-components: Inline Edit component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=components-inline-edit--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-inline-edit');
  });

  it('should render the component', () => {
    cy.get('input').should('have.class', 'MuiOutlinedInput-inputAdornedEnd');
  });
});
