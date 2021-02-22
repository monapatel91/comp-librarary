describe('dot-components: Stage Card component', () => {
  before(() => cy.visit('/iframe.html?id=experimental-stage-card--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-stage-card');
  });

  it('should render the component', () => {
    cy.get('span').should('contain', 'Some name');
    cy.get('span').should('have.class', 'MuiTypography-h4');
    cy.get('i').should('have.class', 'icon-options');
  });

  describe('style decisions', () => {
    it('card', () => {
      cy.get('div.dot-stage-card')
        .should('have.css', 'color', 'rgb(102, 115, 133)')
        .and('have.css', 'font-size', '12px')
        .and('have.css', 'line-height', '14px')
        .and('have.css', 'padding-top', '16px')
        .and('have.css', 'padding-left', '16px');
    });
  });
});
