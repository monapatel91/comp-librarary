describe('dot-components: Infinite Scroll Table component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=components-infinite-scroll--default')
  );

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-infinite-scroll');
  });

  it('should render the component', () => {
    cy.get('div').should('contain', 'Name');
  });
});
