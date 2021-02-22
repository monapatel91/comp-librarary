describe('dot-components: Row component', () => {
  before(() => cy.visit('/iframe.html?id=experimental-row--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-row');
  });

  it('should render the component', () => {
    cy.get('i').should('have.class', 'icon-block');
    cy.get('i').should('have.class', 'icon-edit');
    cy.get('i').should('have.class', 'icon-delete');
  });

  describe('style decisions', () => {
    it('size and spacing', () => {
      cy.get('div.dot-row')
        .should('have.css', 'margin-bottom', '8px')
        .and('have.css', 'padding-top', '12px')
        .and('have.css', 'padding-left', '16px');
    });
  });
});
