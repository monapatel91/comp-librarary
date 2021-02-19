describe('dot-components: Switch component', () => {
  before(() => cy.visit('/iframe.html?id=components-switch--default'));

  it('should have a dot- prefix', () => {
    cy.get('label').should('have.class', 'dot-form-control-label');
  });

  it('should render the component', () => {
    cy.get('span').should('contain', 'Sample Label');
  });

  describe('style decisions', () => {
    it('switch toggle', () => {
      cy.get('span.dot-switch')
        .should('have.css', 'width', '58px')
        .and('have.css', 'height', '38px')
        .and('have.css', 'padding-top', '12px')
        .and('have.css', 'padding-left', '12px');

      cy.get('.MuiSwitch-switchBase')
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .and('have.css', 'padding-top', '9px')
        .and('have.css', 'padding-left', '9px');

      cy.get('.MuiSwitch-track')
        .should('have.css', 'background-color', 'rgb(0, 0, 0)')
        .and('have.css', 'opacity', '0.38')
        .and('have.css', 'z-index', '-1');
    });

    it('label', () => {
      cy.get('.MuiFormControlLabel-label')
        .should('have.css', 'font-size', '14px')
        .and('have.css', 'line-height', '20px')
        .and('have.css', 'margin-bottom', '0px')
        .and('have.css', 'padding-left', '4px');
    });
  });
});
