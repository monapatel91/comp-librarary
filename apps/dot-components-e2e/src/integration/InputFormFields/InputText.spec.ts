describe('dot-components: Input Text Field component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=dotinputtext--input-text'));

  it('should render the component', () => {
    cy.get('input').should('have.class', 'MuiInputBase-input');
  });
});
