describe('dot-components: Input Text Field component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=atoms--input-text'));

  it('should render the component', () => {
    cy.get('input').should('have.class', 'MuiInputBase-input');
  });
});
