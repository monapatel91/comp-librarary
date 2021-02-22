describe('dot-components: Menu component', () => {
  before(() => cy.visit('/iframe.html?id=experimental-menu--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-menu');
  });

  describe('style decisions', () => {
    it('text formatting', () => {
      cy.get('div.dot-menu button')
        .should('have.css', 'color', 'rgb(59, 72, 92)')
        .and('have.css', 'font-size', '14px');
    });

    it('button size', () => {
      cy.get('div.dot-menu button')
        .should('have.css', 'padding-top', '6px')
        .and('have.css', 'padding-right', '8px')
        .and('have.css', 'padding-bottom', '6px')
        .and('have.css', 'padding-left', '8px');
    });
  });
});
