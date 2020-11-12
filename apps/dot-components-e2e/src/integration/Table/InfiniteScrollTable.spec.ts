describe('dot-components: Infinite Scroll Table component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=switch--switch'));

  it('should render the component', () => {
    cy.get('table').should('contain', 'Sample Label');
  });
});
