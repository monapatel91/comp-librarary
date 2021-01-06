describe('dot-components: Row component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=experimental-row--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-row');
  });

  it('should render the component', () => {
    cy.get('i').should('have.class', 'icon-block');
    cy.get('i').should('have.class', 'icon-edit');
    cy.get('i').should('have.class', 'icon-delete');
  });
});
