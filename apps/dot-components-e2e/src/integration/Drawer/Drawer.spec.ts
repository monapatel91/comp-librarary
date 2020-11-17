describe('dot-components: Drawer component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=components-drawer--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-drawer');
  });

  it('should render the component', () => {
    cy.get('div').should('contain', 'Batman');
  });
});
