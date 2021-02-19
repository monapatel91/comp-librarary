describe('dot-components: Switch component', () => {
  before(() => cy.visit('/iframe.html?id=components-radio-group--default'));

  it('should have a dot- prefix', () => {
    cy.get('label').should('have.class', 'dot-form-control-label');
  });

  it('should render the component', () => {
    cy.get('legend').should('contain', 'Group of items');
  });

  describe('style decisions', () => {
    it('group label', () => {
      cy.get('legend')
        .should('have.css', 'color', 'rgba(0, 0, 0, 0.54)')
        .and('have.css', 'line-height', '24px')
        .and('have.css', 'margin-bottom', '4px')
        .and('have.css', 'font-size', '14px');
    });
  });
});
