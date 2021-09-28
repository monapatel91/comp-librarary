describe('dot-components: Icon component', () => {
  before(() => cy.visit('/iframe.html?id=components-icon--default'));

  it('should have a dot- prefix', () => {
    cy.get('span').should('have.class', 'dot-icon');
  });

  it('should render the component', () => {
    cy.get('i').should('have.class', 'icon-script');
    cy.get('i').should('have.class', 'dot-i');
  });

  describe('style decisions', () => {
    it('spacing and sizing', () => {
      cy.get('span.dot-icon')
        .should('have.css', 'width', '20px')
        .and('have.css', 'height', '20px')
        .and('have.css', 'font-size', '20px');
    });

    it('float left for inline flex', () => {
      cy.get('span.dot-icon').should('have.css', 'float', 'left');
    });
  });
});
