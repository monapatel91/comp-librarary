describe('dot-components: AppToolbar component', () => {
  before(() => cy.visit('/iframe.html?id=components-apptoolbar--default'));

  it('should have a dot- prefix', () => {
    cy.get('header').should('have.class', 'dot-app-toolbar');
  });
});
