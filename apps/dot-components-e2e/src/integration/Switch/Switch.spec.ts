describe('dot-components: Switch component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=switch--primary'));

  it('should render the component', () => {
    cy.get('div').should('contain', 'Sample Label');
  });
});
