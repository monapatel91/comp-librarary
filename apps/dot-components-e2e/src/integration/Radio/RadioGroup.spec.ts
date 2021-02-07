describe('dot-components: Switch component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=experimental-radio-group--default')
  );

  it('should have a dot- prefix', () => {
    cy.get('label').should('have.class', 'dot-form-control-label');
  });

  it('should render the component', () => {
    cy.get('legend').should('contain', 'Group of items');
  });
});
