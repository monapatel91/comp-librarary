describe('dot-components: Skeleton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=experimental-skeleton--default'));

  it('should have a dot- prefix', () => {
    cy.get('span').should('have.class', 'dot-skeleton');
  });

  it('should render the component', () => {
    cy.get('span').should('have.class', 'MuiSkeleton-root');
  });
});
