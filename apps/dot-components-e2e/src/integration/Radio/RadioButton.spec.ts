describe('dot-components: Radio Button component', () => {
  before(() => cy.visit('/iframe.html?id=components-radio-button--default'));

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

  describe('style decisions', () => {
    it('container', () => {
      cy.get('label.dot-form-control-label')
        .should('have.css', 'margin-left', '-11px')
        .and('have.css', 'margin-right', '16px')
        .and('have.css', 'cursor', 'pointer');
    });

    it('radio', () => {
      cy.get('span.dot-radio')
        .should('have.css', 'color', 'rgba(0, 0, 0, 0.54)')
        .and('have.css', 'padding-right', '8px')
        .and('have.css', 'padding-left', '8px')
        .and('have.css', 'padding-top', '8px')
        .and('have.css', 'padding-bottom', '8px');
    });

    it('text formatting', () => {
      cy.get('label.dot-form-control-label .MuiFormControlLabel-label')
        .should('have.css', 'margin-bottom', '0px')
        .and('have.css', 'padding-left', '4px')
        .and('have.css', 'font-size', '14px');
    });
  });
});
