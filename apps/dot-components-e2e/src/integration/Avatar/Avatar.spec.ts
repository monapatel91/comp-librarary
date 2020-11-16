describe('dot-components: Avatar component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=avatar--primary'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-avatar');
  });

  it('should render the component', () => {
    cy.get('svg').should('have.class', 'MuiAvatar-fallback');
  });
});
