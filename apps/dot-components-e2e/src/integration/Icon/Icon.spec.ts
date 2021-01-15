describe('dot-components: Icon component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=components-icon--default'));

  it('should have a dot- prefix', () => {
    cy.get('span').should('have.class', 'dot-icon');
  });

  it('should render the component', () => {
    cy.get('i').should('have.class', 'icon-script');
  });
});
