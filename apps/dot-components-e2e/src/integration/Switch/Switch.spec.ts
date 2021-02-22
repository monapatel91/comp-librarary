describe('dot-components: Switch component', () => {
  before(() => cy.visit('/iframe.html?id=components-switch--default'));

  it('should have a dot- prefix', () => {
    cy.get('label').should('have.class', 'dot-form-control-label');
  });

  it('should render the component', () => {
    cy.get('span').should('contain', 'Sample Label');
  });
});
