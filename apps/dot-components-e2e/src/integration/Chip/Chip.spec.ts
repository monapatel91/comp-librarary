describe('dot-components: Chip component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=chip--chip'));

  it('should render the component', () => {
    cy.get('svg').should('have.class', 'MuiAvatar-fallback');
  });
});
