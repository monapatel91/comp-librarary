describe('dot-components: Skeleton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=skeleton--primary'));

  it('should render the component', () => {
    cy.get('span').should('have.class', 'MuiSkeleton-root');
  });
});
