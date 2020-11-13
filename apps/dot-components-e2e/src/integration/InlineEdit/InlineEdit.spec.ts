describe('dot-components: Inline Edit component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=inlineedit--inline-edit'));

  it('should render the component', () => {
    cy.get('input').should('have.class', 'MuiOutlinedInput-inputAdornedEnd');
  });
});
