describe('dot-components: Button component', () => {
  before(() => cy.visit('/iframe.html?id=components-button-toggle--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-button-toggle');
  });

  it('should render the component', () => {
    cy.get('.dot-button-toggle').should('contain', 'Sample Text');
  });
});
