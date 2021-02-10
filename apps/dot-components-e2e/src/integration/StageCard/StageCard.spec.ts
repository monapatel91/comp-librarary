describe('dot-components: Stage Card component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=experimental-stage-card--default')
  );

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-stage-card');
  });

  it('should render the component', () => {
    cy.get('span').should('contain', 'Some name');
    cy.get('span').should('have.class', 'MuiTypography-h4');
    cy.get('i').should('have.class', 'icon-options');
  });
});
