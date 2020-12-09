describe('dot-components: Phase Header component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=experimental-phase-header--default')
  );

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-phase-header');
  });

  it('should render the component', () => {
    cy.get('button').should('have.class', 'phase-color');
    cy.get('button').should('have.class', 'delete-btn');
  });
});
