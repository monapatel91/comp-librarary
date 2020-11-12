describe('dot-components: Drawer component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=drawer--drawer'));

  it('should render the component', () => {
    cy.get('div').should('contain', 'Batman');
  });
});
