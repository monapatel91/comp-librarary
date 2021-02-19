describe('dot-components: Skeleton component', () => {
  before(() => cy.visit('/iframe.html?id=experimental-skeleton--default'));

  it('should have a dot- prefix', () => {
    cy.get('span').should('have.class', 'dot-skeleton');
  });

  it('should render the component', () => {
    cy.get('span').should('have.class', 'MuiSkeleton-root');
  });

  describe('style decisions', () => {
    it('container', () => {
      cy.get('span.dot-skeleton')
        .should('have.css', 'background-color', 'rgba(59, 72, 92, 0.11)')
        .and('have.css', 'overflow', 'hidden');
    });
  });
});
