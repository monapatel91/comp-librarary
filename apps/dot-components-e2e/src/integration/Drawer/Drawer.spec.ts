describe('dot-components: Drawer component', () => {
  before(() => cy.visit('/iframe.html?id=components-drawer--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-drawer');
  });

  it('should render the component', () => {
    cy.get('div').should('contain', 'Batman');
  });

  describe('style decisions', () => {
    it('spacing and sizing', () => {
      cy.get('div.dot-drawer-paper')
        .should('have.css', 'width', '256px')
        .and('have.css', 'padding-left', '16px')
        .and('have.css', 'padding-right', '16px')
        .and('have.css', 'padding-top', '16px')
        .and('have.css', 'padding-bottom', '16px');
    });
  });
});
