describe('dot-components: Dialog component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=components-dialog--primary'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-dialog');
  });

  it('should render the component', () => {
    cy.get('h2').should('contain', 'The title');
  });
});
