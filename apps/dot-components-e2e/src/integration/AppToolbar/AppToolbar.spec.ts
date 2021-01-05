describe('dot-components: AppToolbar component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=components-app-toolbar--default'));

  it('should have a dot- prefix', () => {
    cy.get('header').should('have.class', 'dot-app-toolbar');
  });
});
