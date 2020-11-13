describe('dot-components: Progress component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=progress--progress'));

  it('should render the component', () => {
    cy.get('svg').should('have.class', 'MuiCircularProgress-svg');
  });
});
