describe('dot-components: Switch component', () => {
  before(() => cy.visit('/iframe.html?id=components-radio-group--default'));

  it('should have a dot- prefix', () => {
    cy.get('label').should('have.class', 'dot-form-control-label');
  });

  it('should render the component', () => {
    cy.get('legend').should('contain', 'Group of items');
  });
});
