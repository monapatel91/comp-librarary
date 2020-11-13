describe('dot-components: Icon component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=icon--icon'));

  it('should render the component', () => {
    cy.get('i').should('have.class', 'icon-script');
  });
});
