describe('dot-components: Breadcrumbs component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=breadcrumbs--breadcrumb'));

  it('should render the component', () => {
    cy.get('div').should('contain', 'Link 1');
    cy.get('div').should('contain', 'Link 5');
  });
});
