describe('dot-components: Switch component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=switch--switch'));

  it('should render the component', () => {
    cy.get('svg').should('have.class', 'MuiAvatar-fallback');
  });
});
