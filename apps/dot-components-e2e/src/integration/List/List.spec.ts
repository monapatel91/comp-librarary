describe('dot-components: List component', () => {
  before(() => cy.visit('/iframe.html?id=experimental-list--default'));

  it('should have a dot- prefix', () => {
    cy.get('ul').should('have.class', 'dot-list');
  });

  it('should render the component', () => {
    cy.get('span').should('contain', 'Progressions');
  });

  describe('style decisions', () => {
    it('font format', () => {
      cy.get('a.dot-link').should('have.css', 'color', 'rgb(59, 72, 92)');
    });
  });
});
