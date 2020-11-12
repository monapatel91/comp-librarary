describe('dot-components: Chip component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=chip--primary'));

  it('should render the component', () => {
    cy.get('svg').should('have.class', 'MuiAvatar-fallback');
    cy.get('div').should('contain', 'Hello World');
  });
});
