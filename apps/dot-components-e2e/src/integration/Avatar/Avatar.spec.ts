describe('dot-components: Avatar component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=avatar--primary'));

  it('should render the component', () => {
    cy.get('svg').should('have.class', 'MuiAvatar-fallback');
  });
});
