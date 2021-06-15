describe('dot-components: AppToolbar component', () => {
  before(() => {
    cy.visit('/iframe.html?id=components-apptoolbar--default');
    cy.get('button.dot-icon-btn.hamburger').click();
  });

  it('should have a dot- prefix', () => {
    cy.get('header').should('have.class', 'dot-app-toolbar');
  });

  describe('style decisions', () => {
    it('header background is correct', () => {
      cy.get('header.dot-app-toolbar').should(
        'have.css',
        'background-color',
        'rgb(59, 72, 92)'
      );
    });

    it('header sizing is correct', () => {
      cy.get('header.dot-app-toolbar').should('have.css', 'height', '48px');
    });

    it('border thickness is correct', () => {
      cy.get('header.dot-app-toolbar').should(
        'have.css',
        'border-bottom-width',
        '4px'
      );
    });

    it('hamburger menu icon is correct color', () => {
      cy.get('button.dot-icon-btn.hamburger').should(
        'have.css',
        'color',
        'rgb(227, 229, 232)'
      );
    });

    it('hamburger menu has correct width', () => {
      cy.get('div.MuiPaper-root').should('have.css', 'width', '240px');
    });

    it('hamburger menu has correct height', () => {
      cy.get('.company-name').should('be.visible');
    });
  });
});
