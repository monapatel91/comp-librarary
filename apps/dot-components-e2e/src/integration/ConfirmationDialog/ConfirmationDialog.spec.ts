describe('dot-components: Confirmation Dialog component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=confirmation-dialog--primary'));

  it('should render the component', () => {
    cy.get('h2').should('contain', 'Please confirm');
  });
});
