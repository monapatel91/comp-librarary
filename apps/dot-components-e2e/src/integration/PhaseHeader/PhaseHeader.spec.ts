describe('dot-components: Phase Header component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=components-phase-header--primary')
  );

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-phase-header');
  });

  it('should render the component', () => {
    cy.get('button').should('have.class', 'phase-color');
    cy.get('button').should('have.class', 'delete-btn');
  });
});
