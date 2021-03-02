describe('dot-components: Step Card component', () => {
  before(() => cy.visit('/iframe.html?id=experimental-step-card--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-step-card');
  });

  it('should render the component', () => {
    cy.get('span').should('contain', 'Some name');
    cy.get('span').should('have.class', 'MuiTypography-h4');
    cy.get('i').should('have.class', 'icon-options');
  });

  describe('style decisions', () => {
    it('card', () => {
      cy.get('div.dot-step-card').should(
        'have.css',
        'color',
        'rgb(59, 72, 92)'
      );
    });
  });
});
