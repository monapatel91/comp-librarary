describe('dot-components: Icon Button component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=atoms--icon-button'));

  it('should render the component', () => {
    cy.get('button').should('have.class', 'dot-icon-btn');
  });
});
