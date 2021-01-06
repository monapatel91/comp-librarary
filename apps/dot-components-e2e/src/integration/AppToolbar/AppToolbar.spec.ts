describe('dot-components: AppToolbar component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=experimental-apptoolbar--default')
  );

  it('should have a dot- prefix', () => {
    cy.get('header').should('have.class', 'dot-app-toolbar');
  });
});
