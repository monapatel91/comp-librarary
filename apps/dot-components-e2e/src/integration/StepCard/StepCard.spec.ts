describe('dot-components: Step Card component', () => {
  before(() => cy.visit('/iframe.html?id=experimental-step-card--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-step-card');
  });

  it('should render the component', () => {
    cy.get('h6').should('contain', 'Some name');
    cy.get('i').should('have.class', 'icon-options');
  });

  describe('style decisions', () => {
    it('card', () => {
      cy.get('div.dot-step-card')
        .should('have.css', 'color', 'rgb(102, 115, 133)')
        .and('have.css', 'font-size', '12px')
        .and('have.css', 'line-height', '14px')
        .and('have.css', 'padding-top', '16px')
        .and('have.css', 'padding-left', '16px');
    });
  });
});
