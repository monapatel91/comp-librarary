describe('dot-components: Breadcrumbs component', () => {
  before(() => cy.visit('/iframe.html?id=components-breadcrumbs--default'));

  it('should have a dot- prefix', () => {
    cy.get('nav').should('have.class', 'dot-breadcrumbs');
  });

  it('should render the component', () => {
    cy.get('div').should('contain', 'Link 1');
    cy.get('div').should('contain', 'Link 5');
  });
});
