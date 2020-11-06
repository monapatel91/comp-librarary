describe('dot-components: Phase Header component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=dotphaseheader--phase-header'));

  it('should render the component', () => {
    cy.get('button').should('have.class', 'phase-color');
    cy.get('button').should('have.class', 'delete-btn');
  });
});
