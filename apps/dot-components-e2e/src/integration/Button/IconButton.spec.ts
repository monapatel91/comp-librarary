describe('dot-components: Icon Button component', () => {
  before(() => cy.visit('/iframe.html?id=components-icon-button--default'));

  it('should have a dot- prefix', () => {
    cy.get('button').should('have.class', 'dot-icon-btn');
  });

  it('should render the component', () => {
    cy.get('button').should('have.class', 'dot-icon-btn');
  });

  describe('style decisions', () => {
    it('button is correct size', () => {
      cy.get('button.dot-icon-btn')
        .should('have.css', 'padding-top', '12px')
        .and('have.css', 'padding-right', '12px')
        .and('have.css', 'padding-bottom', '12px')
        .and('have.css', 'padding-left', '12px')
        .and('have.css', 'font-size', '24px');
    });

    it('icon is correct size', () => {
      cy.get('span.dot-icon')
        .should('have.css', 'height', '20px')
        .and('have.css', 'width', '20px')
        .and('have.css', 'font-size', '16px');
    });
  });
});
