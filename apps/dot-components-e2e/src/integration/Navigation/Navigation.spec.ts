describe('dot-components: Navigation component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=components-navigation--default'));

  it('should have a dot- prefix', () => {
    cy.get('nav').should('have.class', 'dot-navigation');
  });

  it('should render the component', () => {
    cy.get('a').should('have.class', 'active');
    cy.get('i').should('have.class', 'icon-block');
    cy.get('p').should('contain', 'link');
  });
});
