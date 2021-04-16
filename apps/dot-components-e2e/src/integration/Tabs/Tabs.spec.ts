describe('dot-components: Tabs component', () => {
  before(() =>
    cy.visit('/iframe.html?id=experimental-tabs--tabs-in-action-bar')
  );

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-tabs');
  });

  it('should render the component', () => {
    cy.get('div').should('contain', 'Tab One');
    cy.get('div').should('contain', 'Tab Two');
    cy.get('div').should('contain', 'Tab Three');
    cy.get('div').should('contain', 'Tab Four');
  });

  it('should show initially selected tab content', () => {
    cy.contains('Three is not a crowd!').should('be.visible');
  });

  it('should not show content for unselected tab', () => {
    cy.contains('I am first!').should('not.be.visible');
  });

  it('should switch to selected tab', () => {
    cy.contains('Tab One').click();
    cy.contains('I am first!').should('be.visible');
    cy.contains('Three is not a crowd!').should('not.be.visible');
  });

  describe('style decisions', () => {
    it('maximum tab width is correct', () => {
      cy.get('button.MuiTab-root').should('have.css', 'max-width', '360px');
    });
  });
});
