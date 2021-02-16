describe('dot-components: Checkbox component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=components-checkbox--default'));

  it('should have a dot- prefix', () => {
    cy.get('label').should('have.class', 'dot-form-control-label');
  });

  it('should render the with label', () => {
    cy.get('span').should('contain', 'Sample Label');
  });

  it('should render the checkbox', () => {
    cy.get('input[name="dot-checkbox"]').should('have.value', 'sample-label');
  });
});
