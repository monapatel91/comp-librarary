describe('dot-components: Navigation component', () => {
  before(() => cy.visit('/iframe.html?id=components-navigation--default'));

  it('should have a dot- prefix', () => {
    cy.get('nav').should('have.class', 'dot-navigation');
  });

  it('should render the component', () => {
    cy.get('i').should('have.class', 'icon-block');
    cy.get('p').should('contain', 'link');
  });

  describe('style decisions', () => {
    it('list item formatting', () => {
      cy.get('li.dot-nav-item')
        .should('have.css', 'padding-left', '0px')
        .and('have.css', 'margin-left', '0px');
    });

    it('button formatting', () => {
      cy.get('button.dot-button')
        .should('have.css', 'justify-content', 'flex-start')
        .and('have.css', 'padding-top', '8px')
        .and('have.css', 'padding-right', '8px')
        .and('have.css', 'padding-bottom', '8px')
        .and('have.css', 'padding-left', '8px');
    });

    it('icon formatting', () => {
      cy.get('.MuiButton-startIcon .dot-icon')
        .should('have.css', 'font-size', '20px')
        .and('have.css', 'height', '24px')
        .and('have.css', 'width', '24px')
        .and('have.css', 'padding-left', '0px')
        .and('have.css', 'padding-right', '0px')
        .and('have.css', 'padding-top', '0px')
        .and('have.css', 'padding-bottom', '0px');
    });

    it('end button formatting', () => {
      cy.get('.MuiButton-endIcon')
        .should('have.css', 'flex-grow', '1')
        .and('have.css', 'justify-content', 'flex-end');
    });
  });
});
