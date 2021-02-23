describe('dot-components: Input Select Field component', () => {
  before(() => cy.visit('/iframe.html?id=components-input-select--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-select-field');
  });

  it('should render the component', () => {
    cy.get('select').should('have.class', 'MuiSelect-select');
    cy.get('select').should('contain', 'Option');
  });

  describe('style decisions', () => {
    it('label', () => {
      cy.get('label.MuiFormLabel-root')
        .should('have.css', 'color', 'rgba(0, 0, 0, 0.54)')
        .and('have.css', 'font-size', '14px')
        .and('have.css', 'margin-bottom', '4px');
    });

    it('field wrapper', () => {
      cy.get('div.MuiInputBase-root')
        .should('have.css', 'color', 'rgb(59, 72, 92)')
        .and('have.css', 'font-size', '14px')
        .and('have.css', 'margin-bottom', '4px');
    });

    it('select', () => {
      cy.get('select.MuiSelect-root')
        .should('have.css', 'color', 'rgb(59, 72, 92)')
        .and('have.css', 'font-size', '14px')
        .and('have.css', 'padding-right', '32px');
    });
  });
});
