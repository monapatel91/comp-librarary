describe('dot-components: Row component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=row--primary'));

  it('should render the component', () => {
    cy.get('i').should('have.class', 'icon-block');
    cy.get('i').should('have.class', 'icon-edit');
    cy.get('i').should('have.class', 'icon-delete');
  });
});
