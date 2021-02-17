describe('dot-components: Link component', () => {
  before(() => cy.visit('/iframe.html?id=components-link--default'));

  it('should have a dot- prefix', () => {
    cy.get('a').should('have.class', 'dot-link');
  });

  it('should render the component', () => {
    cy.get('a').should('contain', 'Sample Link');
  });
});
