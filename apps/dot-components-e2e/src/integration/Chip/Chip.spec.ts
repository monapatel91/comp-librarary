describe('dot-components: Chip component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=components-chip--primary'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-chip');
  });

  it('should render the component', () => {
    cy.get('svg').should('have.class', 'MuiAvatar-fallback');
    cy.get('div').should('contain', 'Hello World');
  });
});
