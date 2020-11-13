describe('dot-components: Dialog component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=dialog--primary'));

  it('should render the component', () => {
    cy.get('h2').should('contain', 'The title');
  });
});
