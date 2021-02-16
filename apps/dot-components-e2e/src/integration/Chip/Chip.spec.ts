describe('dot-components: Chip component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=components-chip--default'));

  it('should have a dot- prefix', () => {
    cy.get('div').should('have.class', 'dot-chip');
  });

  it('should render the component', () => {
    cy.get('div').should('have.class', 'MuiAvatar-root');
    cy.get('div').should('contain', 'Hello World');
  });
});
