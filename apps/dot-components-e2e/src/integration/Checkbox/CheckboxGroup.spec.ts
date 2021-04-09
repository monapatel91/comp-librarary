describe('dot-components: CheckboxGroup component', () => {
  before(() => cy.visit('/iframe.html?id=components-checkbox-group--default'));

  it('should have a dot- prefix', () => {
    cy.get('label').should('have.class', 'dot-form-control-label');
  });

  it('should render the select all checbox', () => {
    cy.get('input[name="dot-checkbox-group-select-all"]').should(
      'have.value',
      'select-all'
    );
  });

  it('should render the component', () => {
    cy.get('legend').should('contain', 'Group of items');
  });

  it('should have label and required asterisk on same line', () => {
    cy.get('legend').invoke('height').should('eq', 24);
  });
});
