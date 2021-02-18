describe('dot-components: Confirmation Dialog component', () => {
  before(() =>
    cy.visit('/iframe.html?id=experimental-confirmation-dialog--default')
  );

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-confirmation-dialog');
  });

  it('should render the component', () => {
    cy.get('h2').should('contain', 'Please confirm');
  });
});
