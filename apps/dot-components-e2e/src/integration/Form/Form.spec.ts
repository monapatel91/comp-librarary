describe('dot-components: Form component', () => {
  before(() => cy.visit('/iframe.html?id=components-form--default'));

  it('should have a dot- prefix', () => {
    cy.get('form').should('have.class', 'dot-form');
  });

  describe('style decisions', () => {
    it('primary button has correct color', () => {
      cy.get('form.dot-form')
        .should('have.css', 'margin-top', '24px')
        .and('have.css', 'margin-bottom', '24px');
    });
  });
});
