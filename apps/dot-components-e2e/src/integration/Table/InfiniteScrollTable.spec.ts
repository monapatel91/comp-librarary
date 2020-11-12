describe('dot-components: Infinite Scroll Table component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=infinite-scroll--infinite-table'));

  it('should render the component', () => {
    cy.get('div').should('contain', 'Name');
  });
});
