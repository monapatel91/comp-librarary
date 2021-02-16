describe('dot-components: CheckboxGroup component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=components-form-group--default'));

  it('should have a dot- prefix', () => {
    cy.get('label').should('have.class', 'dot-form-control-label');
  });

  it('should render the FormGroup', () => {
    cy.get('div[role="group"]').should('have.class', 'dot-form-group');
  });

  it('should render the InputText', () => {
    cy.get('input[name="input-text"]').should('have.value', 'Superman');
  });

  it('should render the Checkbox', () => {
    cy.get('input[name="item-1"]').should('have.value', 'item-1');
  });
});
