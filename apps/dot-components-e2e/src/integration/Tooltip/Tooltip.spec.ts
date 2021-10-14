describe('dot-components: Tooltip component', () => {
  before(() => cy.visit('/iframe.html?id=components-tooltip--default'));
  it('should have a dot- prefix', () => {
    cy.get('span').should('have.class', 'dot-tooltip');
  });
});
