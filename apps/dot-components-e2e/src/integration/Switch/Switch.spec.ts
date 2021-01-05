describe('dot-components: Switch component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=experimental-switch--default'));

  it('should have a dot- prefix', () => {
    cy.get('label').should('have.class', 'dot-switch');
  });

  it('should render the component', () => {
    cy.get('span').should('contain', 'Sample Label');
  });
});
