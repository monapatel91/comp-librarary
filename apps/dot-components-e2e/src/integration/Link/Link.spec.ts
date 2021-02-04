describe('dot-components: Link component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=experimental-link--default'));

  it('should have a dot- prefix', () => {
    cy.get('a').should('have.class', 'dot-link');
  });

  it('should render the component', () => {
    cy.get('a').should('contain', 'Sample Link');
  });
});
