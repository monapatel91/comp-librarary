describe('dot-components: Row component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=row--row'));

  it('should render the component', () => {
    cy.get('svg').should('have.class', 'icon-block');
    cy.get('svg').should('have.class', 'icon-edit');
    cy.get('svg').should('have.class', 'icon-delete');
  });
});
