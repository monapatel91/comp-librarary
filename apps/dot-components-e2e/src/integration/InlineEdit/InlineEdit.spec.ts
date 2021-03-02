describe('dot-components: Inline Edit component', () => {
  before(() => cy.visit('/iframe.html?id=experimental-inline-edit--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-inline-edit');
  });

  it('should render the component', () => {
    cy.get('input').should('have.class', 'MuiOutlinedInput-inputAdornedEnd');
  });

  describe('style decisions', () => {
    it('spacing and sizing', () => {
      cy.get('div.dot-inline-edit').should(
        'have.css',
        'color',
        'rgb(59, 72, 92)'
      );
    });

    it('input field', () => {
      cy.get('div.MuiInputBase-root')
        .should('have.css', 'margin-bottom', '4px')
        .and('have.css', 'margin-left', '0px')
        .and('have.css', 'padding-right', '0px');
    });

    it('helper text', () => {
      cy.get('p.MuiFormHelperText-contained')
        .should('have.css', 'color', 'rgb(59, 72, 92)')
        .and('have.css', 'font-size', '10px')
        .and('have.css', 'margin-left', '14px')
        .and('have.css', 'margin-right', '14px');
    });
  });
});
