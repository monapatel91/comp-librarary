describe('dot-components: Progress component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=experimental-progress--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-progress');
  });

  it('should render the component', () => {
    cy.get('svg').should('have.class', 'MuiCircularProgress-svg');
  });
});
