describe('dot-components: Card component', () => {
  before(() => cy.visit('/iframe.html?id=experimental-card--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-card');
  });

  it('should render the component', () => {
    cy.get('h6').should('contain', 'Hello World');
    cy.get('i').should('have.class', 'icon-options');
  });

  describe('style decisions', () => {
    it('size and spacing is correct', () => {
      cy.get('div.dot-card')
        .should('have.css', 'color', 'rgb(102, 115, 133)')
        .and('have.css', 'font-size', '12px')
        .and('have.css', 'padding-left', '16px')
        .and('have.css', 'padding-right', '16px')
        .and('have.css', 'padding-top', '16px')
        .and('have.css', 'padding-bottom', '16px');
    });
  });
});
