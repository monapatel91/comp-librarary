describe('dot-components: Radio Button component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=components-radio-button--default')
  );

  it('should have a dot- prefix', () => {
    cy.get('label').should('have.class', 'dot-form-control-label');
  });

  it('should render the component', () => {
    cy.get('span').should('contain', 'Sample Label');
  });

  it('should render the component', () => {
    cy.get('input[name="dot-radio-button"]').should(
      'have.value',
      'sample-label'
    );
  });
});
