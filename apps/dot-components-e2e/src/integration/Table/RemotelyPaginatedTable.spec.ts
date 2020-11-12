describe('dot-components: Remotely Paginated Table component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=switch--switch'));

  it('should render the component', () => {
    cy.get('table').should('contain', 'Sample Label');
  });
});
