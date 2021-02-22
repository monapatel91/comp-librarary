describe('dot-components: Icon component', () => {
  before(() => cy.visit('/iframe.html?id=components-icon--default'));

  it('should have a dot- prefix', () => {
    cy.get('span').should('have.class', 'dot-icon');
  });

  it('should render the component', () => {
    cy.get('i').should('have.class', 'icon-script');
  });

  describe('style decisions', () => {
    it('spacing and sizing', () => {
      cy.get('span.dot-icon')
        .should('have.css', 'width', '24px')
        .and('have.css', 'height', '24px')
        .and('have.css', 'font-size', '20px');
    });
  });
});
