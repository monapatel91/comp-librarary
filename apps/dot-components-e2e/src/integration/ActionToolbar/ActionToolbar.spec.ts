describe('dot-components: ActionToolbar component', () => {
  before(() => cy.visit('/iframe.html?id=components-actiontoolbar--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-action-toolbar');
  });

  describe('style decisions', () => {
    it('bottom border is correct', () => {
      cy.get('div.dot-action-toolbar')
        .should('have.css', 'border-bottom-color', 'rgb(227, 229, 232)')
        .and('have.css', 'border-bottom-width', '1px');
    });

    it('sizing is correct', () => {
      cy.get('div.dot-action-toolbar')
        .should('have.css', 'min-height', '48px')
        .and('have.css', 'padding-left', '24px')
        .and('have.css', 'padding-right', '24px');
    });

    it('heading correct color', () => {
      cy.get('div.dot-action-toolbar h1').should(
        'have.css',
        'color',
        'rgb(59, 72, 92)'
      );
    });
  });
});
