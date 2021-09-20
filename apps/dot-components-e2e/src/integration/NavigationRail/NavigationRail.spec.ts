describe('dot-components: Navigation Rail component', () => {
  before(() =>
    cy.visit('/iframe.html?id=experimental-navigationrail--default')
  );

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-navigation-rail');
  });

  describe('style decisions', () => {
    it('container', () => {
      cy.get('div.dot-navigation-rail')
        .should('have.css', 'background-color', 'rgb(243, 245, 246)')
        .and('have.css', 'width', '72px')
        .and('have.css', 'padding-top', '8px')
        .and('have.css', 'border-left', '1px solid rgb(227, 229, 232)');
    });

    it('selected item', () => {
      cy.get('.rail-item-button.selected').should(
        'have.css',
        'background-color',
        'rgb(255, 255, 255)'
      );
    });
  });
});
